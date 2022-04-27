import React from 'react' 
import MDEditor from "@uiw/react-md-editor"
function Lecturelist({userss}) {
  console.log(userss)
  return(
     <div class="w-full shadow-lg mb-8">
  <h1>Lecture#{`${userss.id - 2}`}<span class="ml-2"></span></h1>
  <h1>{`Duration:${userss.end_time - userss.start_time}`}<span class="ml-2"></span></h1>
  <div>
  <MDEditor.Markdown source={userss.topic} className={`flex-shrink-0 inline-block mt-3 p-1 py-2 text-sm font-medium`} />


</div>
<div class="h-10 flex mt-8">
    <a class="mx-auto text-md text-gray-500">watch/download recording</a>
    </div>
  </div>
  )
}
export default Lecturelist;
