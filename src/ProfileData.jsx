import React, {useState, useEffect} from 'react'

function ProfileData ({data,value,onChange,name}) {
   
return (
        <div class="border-y-2 h-28 grow flex flex-row justify-between">
  <h1 class="my-auto font bold text-xl text-gray-500 w-40">{data.title}<span class="text-red-500"> *</span></h1>
  <input name={name} value={value} onChange={onChange}  class="border-gray-300 my-auto border-2 rounded-md grow h-10 text-xl mr-6 ml-60"></input>
  </div>
    )
  
}
export default ProfileData;
