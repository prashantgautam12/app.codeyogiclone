import React from 'react'
import ProfileDatarow from './ProfileDatarow';

function Profile () {
    return(
<div className="flex grow h-screen overflow-y-scroll">
        <div class="w-6 h-screen p-20">
        <h1 class="text-2xl text-gray-500">PROFILE</h1>
        </div>
        <div class="grow mt-40">
    <ProfileDatarow />
            
       </div>
       <div class="w-6 h-screen mb-4"></div>
       </div>
    )
}
export default Profile;