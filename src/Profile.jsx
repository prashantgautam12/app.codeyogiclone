import React from 'react'
import Name from './Name'
import LastName from './LastName';
import Email from './Email';
import Institute from './Institute';
import YearPass from './YearPass';
import PhoneNumber from './PhoneNumber';
import DateofBirth from './DateofBirth';
import Rollno from './Rollno';
import Branch from './Branch';
function Profile () {
    return(
<div className="flex grow h-screen overflow-y-scroll">
        <div class="w-6 h-screen p-20">
        <h1 class="text-2xl text-gray-500">LECTURES</h1>
        </div>
        <div class="grow mt-40">
            <Name></Name>
            <LastName></LastName>
            <Email></Email>
            <Institute></Institute>
            <YearPass></YearPass>
            <PhoneNumber></PhoneNumber>
            <DateofBirth></DateofBirth>
            <Rollno></Rollno>
            <Branch></Branch>
            <button class="p-2 bg-indigo-500 mt-4 rounded-md mb-4">SUBMIT</button>
       </div>
       <div class="w-6 h-screen"></div>
       </div>
    )
}
export default Profile;