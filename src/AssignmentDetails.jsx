import React,  {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import MDEditor from '@uiw/react-md-editor';
function AssignmentDetails () {
  const data = useParams();
  const [details, setdetails] = useState([])
  useEffect(() => {
          const token = axios.get(`https://api.codeyogi.io/assignments/${data.id}`, {withCredentials:true})
          token.then((response) => {
              setdetails(response.data)
          })
      }, []
  )
    return(
        <div className="flex grow h-screen overflow-y-scroll">
        <div class="w-40 h-screen p-20">
        <h1 class="text-2xl text-gray-500">ASSIGNMENT DETAILS</h1>
        </div>
        <div class=" flex flex-col grow mt-40">
        <div>
<div class="border-y-2 h-20">
  <div class="flex space-x-52">
  <h1 class="mt-6">Title</h1>
  <h3 class="mt-6">{details.title}</h3>
  </div>
  </div>
  <div class="border-y-2 h-20">
  <div class="flex space-x-44">
  <h1 class="mt-6">Due date</h1>
  <h3 class="mt-6">{details.due_date}</h3>
  </div>
  </div>
  <div class="border-y-2 ">
  <div class="flex space-x-40">
  <h1 class="mt-6">Description</h1>
  <MDEditor.Markdown class="mt-6" source={details.description}/>
  </div>
  </div>
  <button class="p-2 mb-20 mt-4 bg-indigo-500 rounded-md">Submit</button>
  <div></div>
  </div>  
        <div></div>
       </div>
       <div class="w-40 h-screen"></div>
       </div>
    )
}
export default AssignmentDetails;