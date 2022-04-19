import React from 'react' 
function Lecturelist({userss}) {
  return(
     <div class="w-full shadow-lg mb-8">
  <h1>Lecture#{`${userss.id - 2}`}<span class="ml-2"></span></h1>
  <h1>{`Duration:${userss.end_time - userss.start_time}`}<span class="ml-2"></span></h1>
  <h1 class="text-xl font-semibold mt-2">{userss.topic}</h1>
  <div class="h-10 flex mt-8">
    <a class="mx-auto text-md text-gray-500">watch/download recording</a>
    </div>
  </div>
  )
}
export default Lecturelist;
