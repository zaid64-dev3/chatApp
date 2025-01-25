import React from 'react';
import Search from './Search';
import User from './User'
import Logout from './Logout';

function Left() {
  return <div className='w-full   bg-black text-gray-300'>
    <Search />
    <div className=" flex-1 overflow-y-auto"
    style={{ minHeight:"calc(84vh - 10vh)"}}>
    <User />
  </div>
   
    <Logout />
  </div>
  
}

export default Left;