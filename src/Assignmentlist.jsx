import React, {useState} from 'react' 
import { useNavigate,} from 'react-router-dom'
import SubmitPopup from './SubmitPopup'
import axios from 'axios'
import {DateTime} from "luxon"
import {string} from "yup"
function Assignmentlist ({users}) {
  const [submitpopup, updatesubmitpopup] = useState(false)
  const [submissionLink, updatesubmissionLink] = useState('')
  const [isvalidurl, setisvalidurl] = useState('')
  const navigate = useNavigate();
  const onInputchange = (event) => {
    updatesubmissionLink(event.target.value)
  } 
  const urlvalidater  = () => {
    const properurl = string().url()
    const finallink = properurl.isValidSync(submissionLink)
    const submissionlinkerror = finallink ? "" : "you entered a unvalid url"
    setisvalidurl(submissionlinkerror)
  }
   
  const submitAssignment = () => {
    axios.put(`http://api.codeyogi.io/${users.id}/submit`, {submissionLink}, {withCredentials:true} )
  urlvalidater()
}


  return(
    <div className=" mb-8 grow shadow-lg">
    <div>
     <div onClick={() => navigate(`/assignment/${users.id}/details`)} >
    <div className="flex flex-row justify-between items-center">
      <div  className="space-y-4">
    <h1 className="font-bold">#{users.id}{users.title}<span className="ml-4 text-gray-500">({DateTime.fromISO(users.created_at).toLocaleString(DateTime.DATETIME_MED)
})</span></h1>
    <h1 className="ml-4 text-red-500">Due Date: {DateTime.fromISO(users.due_date).toLocaleString(DateTime.DATETIME_MED)
}</h1>
    </div>
    <div>
      <h1 className="mt-8 text-green-300 font-bold"></h1>
      </div>
    </div>
    </div>
    <div className="mt-20 flex flex-row justify-between">
     
      <button onClick={() => updatesubmitpopup(true)} className="ml-20 font-bold text-green-400">Submit</button>

       <h1 className="mr-20 font-bold text-indigo-500">See-Your-Submission</h1>
      </div>
    </div>
    {submitpopup && (<div class="fixed top-0 right-0 h-screen w-screen flex justify-center items-center bg-transparent">
<div class="w-9/12 h-80 flex flex-col justify-center items-center">
<SubmitPopup value={submissionLink} onChange={onInputchange} error={isvalidurl} onClick={submitAssignment} type="text"></SubmitPopup>
</div>
</div>)} 
    </div>
    )
} 
export default Assignmentlist;
