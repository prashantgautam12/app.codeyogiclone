import React from 'react'
import LecturesRow from './LecturesRow';
function Lectures () {
  return (
  
    <div className=" flex grow h-screen overflow-y-scroll">
      <div class="w-40 h-screen p-20">
        <h1 class="text-2xl text-gray-500">LECTURES</h1>
        </div>
        <div class="grow mt-40">
        <LecturesRow></LecturesRow>
       </div>
       <div class="w-40 h-screen"></div>
       </div>
      
  );
}
export default Lectures;