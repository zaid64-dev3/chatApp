import React from 'react';
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';

function Users({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  
  // Ensure onlinUsers is always an array
  const { socket, onlinUsers = [] } = useSocketContext();
  
  // Now, onlinUsers will default to an empty array if undefined
  const isOnline = onlinUsers.includes(user._id);

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${isSelected ? 'bg-slate-700' : ''}`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={user.avatarUrl || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt={user.fullname} />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Users;
