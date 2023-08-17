import React, { ChangeEvent, FormEvent, useState } from 'react'
import { faCloudArrowUp, faFileCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { api } from '../../../Services/axios';
import axios from 'axios';
import { url } from 'inspector';
import './projectModal.css'
import { useSelector } from 'react-redux';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
interface projects {
    setProject: Function
}
interface datas {

    pname?: string;
    description?: string
}

function ProjectModal(props: projects) {
    const { cid } = useSelector((state: any) => state.company)
    console.log("hhhhhhhhhhhhhhh", cid);

    // const [selectedFile, setSelectedFile] = useState<File[] | null>(null);
    const [pdata, setData] = useState<datas>()
    const [fileUrl, setUrl] = useState<string[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState({ pname: '', description: '' })
    const closeModal = () => {
        props.setProject(false)
        window.location.reload();
    }

    const addProject = ((e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...pdata, [e.target.name]: e.target.value })
    })
    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...pdata, [e.target.name]: e.target.value });
        // validateJob(e.target.name,e.target.value,err,setErr)
    };

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileList = Array.from(files);
            let urls: string[] = []

            const promises = fileList.map(async (file) => {
                const pic = await generateUrl(file);
                urls.push(pic);
            });

            await Promise.all(promises);

            console.log(urls);
            setUrl(urls)


        } else {
            console.log("null");
        }
    };



    const generateUrl = async (img: File) => {
        setIsLoading(true)
        console.log(img);

        const datas = new FormData();
        datas.append("file", img);
        datas.append("upload_preset", "user_doc");
        datas.append("cloud_name", "dn6cqglmo");
        const { data } = await axios.post(
            "https://api.cloudinary.com/v1_1/dn6cqglmo/raw/upload",
            datas
        );

        console.log("data here", data.url);
        setIsLoading(false)
        return data.url
    };


    const handleAdd = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const { data } = await api.post('/user/addProject', { ...pdata, cid: cid, url: fileUrl })
        }
        catch (error) {

        }
    }






    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50">

                <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
                    <div>
                        <div className='flex justify-end'>
                            <button onClick={() => closeModal()}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                        </div>
                        <div className='text-center'>
                            <h1 className='font-bold text-2xl'>Upload files</h1>
                           
                        </div>
                      
                    </div>

                   
                    <form className='border border-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4'>
                        <div className='w-full mt-5'>
                            <div>
                                <label className=''>Project Name</label>
                            </div>

                            <div>
                                <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 h-12' name='pname' onChange={addProject}></input>
                            </div>
                        </div>

                        <div className='w-full mt-5'>
                            <div>
                                <label className=''>Description</label>
                            </div>
                            <div className='w-full'>
                                <textarea name='description' className='shadow appearance-none border rounded w-full py-2 px-3 h-32' onChange={handleTextareaChange} required></textarea>
                            </div>
                        </div>


                        <div className="max-w-xl mt-9">
                            {fileUrl ? 
                            <div className='relative w-full overflow-x-scroll flex scrollbar gap-2  py-2 px-1'>
                                <FontAwesomeIcon onClick={()=>setUrl(null)} className='fixed text-xl' icon={faCircleXmark} />
                                {fileUrl.map(obj=><img src={obj} className='pt-6 h-24'/>)}
                                
                            </div>
                            :
                             <label
                                className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="font-medium text-gray-600">
                                        Drop files to Attach, or
                                        <span className="text-blue-600 underline">browse</span>
                                    </span>
                                </span>
                                <input type="file" accept="image/*" name="file_upload" className="hidden" multiple onChange={handleFileChange} />
                            </label>}
                            <div className='flex justify-center mt-8'>
                                {isLoading ?
                                    <div className="loader">
                                        <div className="loader__circle"></div>
                                        <div className="loader__circle"></div>
                                        <div className="loader__circle"></div>
                                        <div className="loader__circle"></div>
                                    </div>
                                    :
                                    <button className='bg-sky-950 text-white py-2 px-6 text-sm rounded-md' onClick={handleAdd}>Add</button>}
                            </div>
                        </div></form>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
