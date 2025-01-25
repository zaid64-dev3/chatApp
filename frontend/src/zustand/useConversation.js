import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => 
    set({ selectedConversation }), // Fixed typo here
  messages: [],
  setMessage: (messages) => set({ messages }),
}));

export default useConversation;
