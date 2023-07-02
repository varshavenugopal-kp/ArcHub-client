import React, { ChangeEvent, useState } from 'react'
import { faCloudArrowUp, faFileCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { api } from '../../../Services/axios';
import axios from 'axios';
import { url } from 'inspector';
interface projects {
    setProject: Function
}
function ProjectModal(props: projects) {
    const [selectedFile, setSelectedFile] = useState<File[] | null>(null);
    const [fileUrl,setUrl]=useState<string[]|null>(null)
    const closeModal = () => {
        props.setProject(false)
    }



   const handleFileChange = async(e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
          const fileList = Array.from(files);
          let urls: string[]=[]

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
        console.log(img);
        
        const datas = new FormData();
        datas.append("file", img);
        datas.append("upload_preset", "user_doc");
        datas.append("cloud_name", "dn6cqglmo");
        const { data } = await axios.post(
          "https://api.cloudinary.com/v1_1/dn6cqglmo/raw/upload",
          datas
        );
        // console.log("fffff",data);
        
        
       
        // setSelectedFile((selectedFile) => ({
        //   ...selectedFile,
        //   files: [...selectedFile.files, data.url], // Assuming you have a 'files' array in your 'user' state to store multiple image URLs
        // }));
        console.log("data here", data.url);
        return data.url
      };








    
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
                        {/* <div className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                            <hr></hr>
                        </div> */}
                    </div>

                    {/* <form>

                        <div className='w-full mt-5  border border-black border-dashed'>
                            <div className='px-72 py-24'>
                            <FontAwesomeIcon className='text-4xl' icon={faFileCirclePlus}></FontAwesomeIcon>
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </form> */}
                    <form>
                    <div className="max-w-xl mt-9">
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
        <input type="file" accept="image/*" name="file_upload" className="hidden" multiple onChange={handleFileChange}/>
    </label>
</div></form>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
