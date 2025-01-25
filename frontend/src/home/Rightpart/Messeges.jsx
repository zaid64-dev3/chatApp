import React, { useEffect, useRef } from 'react'
import Message from './message.jsx'
import useGetMessege from '../../context/useGetMassege.js'
import Loading from "../../compoments/Loading.jsx"
import useGetSocketMessage from '../../context/useGetSocketMessage.js';


function Messeges() {
    const {loading, messages}= useGetMessege();
    useGetSocketMessage(); //listing incoming messages
    console.log(messages);
    // scroll to bottom on new message
    const lastMsgRef=useRef()
    useEffect(()=>{
      setTimeout(()=>{
        if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({behavior: 'smooth'});
     } 
    },100);
    },[messages])
    return (
        <div className='flex-1 overflow-y-auto' 
        style={{minHeight:'calc(92vh - 8vh)'}}>

{
  loading ? (
    <Loading />
  ) : (
    messages.length > 0 &&
    messages.map((message, index) => (
      <Message key={message._id || index} message={message} />
    ))
  )
}

        

        {!loading && messages.length  ===  0 && (
            <div>
                <p className='text-center mt-[20%]'>
                    Say! Hi start the Conversation
                </p>

                </div>
        )}

        </div>
    );
}

export default Messeges;