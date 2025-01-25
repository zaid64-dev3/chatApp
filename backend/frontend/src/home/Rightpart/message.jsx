import React from 'react'

function message({ message }) {
    const authUser = JSON.parse(localStorage.getItem("Chatapp"));
    const itsMe = message.senderId === authUser.user._id;
    const chatName = itsMe ? "chat-end" : "chat-start";
    const chatColor = itsMe ? "bg-blue-500" : "";
    // Formatting the timestamp
    const createdAt = new Date(message.createdAt)
    const formettedTime=createdAt.toLocaleTimeString([],{
        hour: '2-digit',
        minute: '2-digit'
    })
    return (
        <div>
            <div className='p-4'>
                <div className={`chat ${chatName}`}>
                    <div className={`chat-bubble text-white ${chatColor}  `} >{message.message}

                    </div>
                    <div className='chat-footer'>{formettedTime}</div>
                </div>

            </div>
        </div>
    )
}

export default message;