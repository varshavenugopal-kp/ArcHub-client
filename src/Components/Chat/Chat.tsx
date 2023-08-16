import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client';
import { api } from '../../Services/axios';
import { useSelector } from 'react-redux';
interface role{
  role:string
}
interface user{
  _id:string,
  fname:string,
  email:string,
  lname:string,
  image:string

}
interface company{
  _id:string,
  cname:string,
  logo:string
  // firstname:string,
  // lastname:string,
  // profileImg:string

}
interface latest{
  chat:string,
  content:string
}

interface Chats{
  _id:string,
  chatName:string,
  user:user
  company:company
  latestMessage:latest
}


interface Message{
  _id:string
  user:user,
  company:company
  content:string,
  chat:Chats
  createdAt:string,
  
}
interface role {
  role: string;
}
function Chat(props:role) {
  const ENDPOINT=process.env.REACT_APP_BASE_URL as string
  let socket:any
  socket=io(ENDPOINT)

  const { userid } = useSelector((state: any) => state.user);
  const { cid } = useSelector((state: any) => state.company);
  const [loading, setLoading] = useState(false);
  const [messages,setMessages]=useState<Message[]>([])
  const[newMessage,setNewMessage]=useState<string>("")
  const [chatId, setChatId] = useState("");
  const [chats, setChats] = useState<Chats[]>([]);
  const [selectedUser, setselectedUser] = useState<Chats>();
  const currentUserId = props.role === "user" ? userid : cid;
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [typing,setTyping] = useState<boolean>(false)
  const [cmpName,setCmpName]=useState("")
  const[userName,setUserName]=useState("")
  const [cmpImg,setCmpImg]=useState("")
  const[userImg,setUserImg]=useState("")
  
  
  // useEffect(() => {
  //   socket.emit("setup", currentUserId);
  // }, []);//vishnu

const selectChat = (user: Chats) => {
  setselectedUser(user);
};
      console.log("selectedUser",selectedUser);
      console.log("chatId came",chatId);
      
      
const setMessageFn = (e: React.ChangeEvent<HTMLInputElement>) => {
  setNewMessage(e.target.value);
  console.log("kkk", newMessage);
};

useEffect(() => {
  const fetch = async () => {
    if (props.role === "user") {
      console.log("useridghgghvhvh",userid);
      
      const data = await api.get(`/chat/user-chat/${userid}`);
      console.log("logggg");
      
      console.log("userchat=", data.data);

      setChats(data.data.chats);
      console.log("chts=", chats);
    } else {
      console.log("bvvgvhgvhgv",cid);
      console.log("chaat opennnn");
      
      const data = await api.get(`/chat/company-chat/${cid}`);
      console.log("cmpchat=", data.data);
      setChats(data.data.allChats);
    }
  };
  fetch();
}, []);

useEffect(() => {
  socket.on("message recieved", (newMessage: Message) => {
    console.log("got new message");

    if (chatId !== newMessage.chat._id) {
      console.log(
        `Message from ${newMessage.user?.fname} ${newMessage.user?.lname}`
      );
    } else {
      setMessages([...messages, newMessage]);
    }
  });
},[socket,messages]);

useEffect(()=>{
  socket.emit("typing",currentUserId)
},[newMessage])

socket.on("typing",()=>setTyping(true))
socket.on("stoptyping",()=>setTyping(false))

useEffect(()=>{
    if(containerRef.current){
        containerRef.current.scrollTo(0,containerRef.current.scrollHeight)  
    }
},[messages])

const handleMessageFetch = async (chatId: string) => {
  console.log("hey chatid", chatId);

  const { data } = await api.get(`/message/${chatId}`);
  console.log(data.messages);
  setMessages(data.messages);
  
  socket.emit("join chat", chatId);
  // return data.messages
};

const sendMessage = async (
  content: string,
  chatId: string,
  currentuserId: string
) => {
  const currentRole = props.role;
  const { data } = await api.post(`/message/send`, {
    content,
    chatId,
    currentUserId,
    currentRole,
  });
  console.log("brototype",data);
  
  return data;
};

const handleMessageSent = async () => {
  console.log("sss");

  if (newMessage.trim().length > 0) {
    const res = await sendMessage(newMessage, chatId, currentUserId);
    console.log("Got the message response", res);
    setNewMessage("");
    socket.emit("stoptyping",currentUserId) 
    socket?.emit("new message", res.msg);
    console.log("messageee",res.msg);
    
    setMessages([...messages, res.msg]);
  }
};

useEffect(() => {
  socket.emit("setup", currentUserId);
}, [currentUserId, socket]);

console.log("chats here",chats);
console.log("chatId here",chatId);

  return (
    <div className="container mx-auto">
    <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
      <div className="border-r border-gray-300 lg:col-span-1">
        {/* <div className="mx-3 my-3">
          <div className="relative text-gray-600">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-300"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input
              type="search"
              className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
              name="search"
              placeholder="Search"
              required
            />
          </div>
        </div> */}

        <ul className="overflow-auto h-[32rem]">
          <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
          {props.role === "user"
            ? chats.map((obj) => (
                <li
                  key={obj._id}
                  onClick={() => {
                    selectChat(obj);
                    setChatId(obj._id);
                    handleMessageFetch(obj._id);
                    setCmpName(obj.company.cname)
                    setCmpImg(obj.company.logo)
                  }}
                >
                  <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                    <img
                      className="object-cover w-10 h-10 rounded-full"
                      src={obj?.company?.logo}
                      alt="username"
                    />
                    <div className="w-full pb-2">
                      <div className="flex justify-between">
                        <span className="block ml-2 font-semibold text-gray-600">
                          {obj?.company?.cname}
                        </span>
                       
                      </div>
                      <span className="block ml-2 text-sm text-gray-600">
                        {obj?.latestMessage?.content}
                      </span>
                    </div>
                  </a>
                </li>
              ))
            : chats.map((obj) => (
                <li
                  key={obj._id}
                  onClick={() => {
                    selectChat(obj);
                    setChatId(obj._id);
                    handleMessageFetch(obj._id);
                    setUserName(obj.user.fname)
                    setUserImg(obj.user.image)
                  }}
                >
                  <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                    <img
                      className="object-cover w-10 h-10 rounded-full"
                      src={obj.user.image}
                      alt="username"
                    />
                    <div className="w-full pb-2">
                      <div className="flex justify-between">
                        <span className="block ml-2 font-semibold text-gray-600">
                          {obj?.user?.fname}
                        </span>
                        
                      </div>
                      <span className="block ml-2 text-sm text-gray-600">
                        {obj?.latestMessage?.content}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
        </ul>
      </div>
      <div className="hidden lg:col-span-2 lg:block">
        <div className="w-full">
         {
           props.role==='user'?
           <div className="relative flex items-center p-3 border-b border-gray-300">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={cmpImg}
              alt="username"
            />
            <span className="block ml-2 font-bold text-gray-600">{cmpName}</span>
            <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
          </div>
          :
          <div className="relative flex items-center p-3 border-b border-gray-300">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={userImg}
              alt="username"
            />
            <span className="block ml-2 font-bold text-gray-600">{userName}</span>
            <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
          </div>
         }


          
          <div className="relative w-full p-6 overflow-y-auto h-[40rem]" ref={containerRef}>
            <ul className="space-y-2">
              {props.role === "user"
                ? messages.map((obj) => (
                    <li
                      className={`${
                        obj.user?._id && obj.user?._id === currentUserId
                          ? "justify-end"
                          : "justify-start"
                      } flex `}
                    >
                      <div
                        className={`relative max-w-xl px-4 py-2 text-gray-700 rounded shadow 
                ${
                  obj.user?._id && obj.user?._id === currentUserId
                    ? "bg-gray-100"
                    : ""
                }`}
                      >
                        <span className="block">{obj.content}</span>
                      </div>
                    </li>
                  ))
                : messages.map((obj) => (
                    <li
                      className={`${
                        obj.company?._id && obj.company?._id === currentUserId
                          ? "justify-end"
                          : "justify-start"
                      } flex `}
                    >
                      <div
                        className={`relative max-w-xl px-4 py-2 text-gray-700 rounded shadow 
                ${
                  obj.company?._id && obj.company?._id === currentUserId
                    ? "bg-gray-100"
                    : ""
                }`}
                      >
                        <span className="block">{obj.content}</span>
                      </div>
                    </li>
                  ))}

              {/* <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                  <span className="block">Hi</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">Hiiii</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">how are you?</span>
                </div>
              </li> */}
              {/* <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                  <span className="block">Edii Varsha kuttyyy happy birthday.......
                  </span>
                </div>
              </li> */}
            </ul>
          </div>

          <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
           

            <input
              type="text"
              placeholder="Message"
              className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
              name="message"
              onChange={(e) => setMessageFn(e)}
              value={newMessage}
              required
            />
           
            <button
              type="submit"
              onClick={() => {
                handleMessageSent();
              }}
            >
              <svg
                className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Chat
