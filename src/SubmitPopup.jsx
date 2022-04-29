import React from 'react'
import { useNavigate,} from 'react-router-dom'
function SubmitPopup(props) {
    const navigate = useNavigate();
    return(
        <div>
<div class="rounded-md bg-gray-300 flex flex-col h-56 w-96">
  <div className="flex flex-row-reverse"> <button onClick={() => navigate("/")} className="p-1 bg-indigo-300 rounded-md ">back</button> </div>
  <div class=" h-20 flex justify-between  mt-10 border-y-2">
   <h1 class="my-auto">Submission link</h1>
   <input class="h-10 my-auto rounded-md border-2 border-indigo-500" placeholder="submission link" onChange={props.onChange}
   value={props.value} type={props.type}></input>
</div>
<div class="mt-4 ml-4">
<button class="h-8 w-20 rounded-md bg-indigo-500" onClick={props.onClick}>Submit</button>
</div>
</div>
{props.error && <div className="text-red-500">{props.error}</div>}
</div>
    )
}
export default SubmitPopup;