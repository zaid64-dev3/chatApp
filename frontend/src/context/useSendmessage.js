import React, { useState } from 'react'
import axios from 'axios'

import useConversation from '../zustand/useConversation.js';

function useSendmessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();
  // function to send message to a specific conversation
  const sendMessages = async (message) => {
    setLoading(true);
    try {
      // Ensure the endpoint has the correct structure
      const res = await axios.post(`/api/message/send/${selectedConversation._id}`, { message });
      setMessage([...messages, res.data]);
      setLoading(false);
    } catch (error) {
      console.error('Error in send message:', error);
      setLoading(false);
    }
  };
return { loading, sendMessages };
};

export default useSendmessage;