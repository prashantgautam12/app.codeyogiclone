import React from 'react'
import AssignmentRow from './AssignmentRow'
function Assignment (){
  return (
    <div className="flex mb-8 grow h-screen overflow-y-scroll">
        <div class="w-40 h-screen p-20">
        <h1 class="text-2xl text-gray-500">ASSIGNMENTS</h1>
        </div>
        <div class="grow mt-40">
        <AssignmentRow></AssignmentRow>
       </div>
       <div class="w-40 h-screen"></div>
       </div>
  );
}
export default Assignment;