import React from 'react' 
function Lecturelist(props) {
  return(
     <div class="w-full shadow-lg mb-8">
  <h1>{props.title}<span class="ml-2">{props.date}</span></h1>
  <h1>Duration<span class="ml-2">{props.duration}</span></h1>
  <h1 class="text-xl font-semibold mt-2">{props.topic}</h1>
  <div class="h-10 flex mt-8">
    <a class="mx-auto text-md text-gray-500">{props.purpose}</a>
    </div>
  </div>
  )
}
export default Lecturelist;
