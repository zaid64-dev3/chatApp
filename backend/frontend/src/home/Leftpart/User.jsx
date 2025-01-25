import React from 'react'
import Users from './Users'
import useGetAllUser from '../../context/useGetAllUser.jsx';

function User() {
  const [allUsers,loading]=useGetAllUser()
  console.log(allUsers)
    return (
      <>
        <div>
            <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>
                Massage</h1>
          <div className='flex-1 overflow-y-auto' style={{maxHeight:"calc(84vh - 10vh)"}}>
            {allUsers.map((user,index)=>(
              <Users key={index} user={user}/>
            ))}
            
         
          </div>
        </div>
        </>
    )
}

export default User;