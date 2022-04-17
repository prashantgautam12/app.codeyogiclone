import React from 'react'
import StudentData from './StudentData'
function StudentInfo (){
    return (
      <div className="flex mb-8 grow h-screen overflow-y-scroll justify center">
          <div class="w-40 h-screen p-20">
          <h1 class="text-2xl text-gray-500">Students Info</h1>
          </div>
          <div class="flex flex-col grow mt-40 ">
           <div>
          <StudentData></StudentData>
         </div>
         <div></div>
         </div>
         <div class="w-40 h-screen"></div>
         </div>
    );
  }
  export default StudentInfo;