import React,{useEffect} from 'react'
import { useSocketContext } from './SocketContext.jsx'
import useConversation from '../zustand/useConversation.js'
import sound from '../assets/noti.mp3.wav'
    const useGetSocketMessage = () => {
    const {socket}=useSocketContext()
    const {messages, setMessage} = useConversation()

    useEffect(() => {
        socket.on('newMessage', (newMessage) => {
            // Add sound notification
            const notification = new Audio(sound)
            notification.play()
            setMessage([...messages,newMessage]) 
        });
        return () => {
            socket.off('newMessage');
        };
        },[socket, messages, setMessage]);
}
export default useGetSocketMessage;