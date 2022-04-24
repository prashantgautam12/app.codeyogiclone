import React from 'react' 
import { useNavigate} from 'react-router-dom'
function Assignmentlist ({users}) {
  const navigate = useNavigate();

  return(
     <div onClick={() => navigate(`/assignment/${users.id}/details`)} className=" mb-8 grow shadow-lg">
    <div className="flex flex-row justify-between items-center">
      <div  className="space-y-4">
    <h1 className="font-bold">#{users.id}{users.title}<span className="ml-4 text-gray-500">({users.created_at})</span></h1>
    <h1 className="ml-4 text-red-500">{users.due_date}</h1>
    </div>
    <div>
      <h1 className="mt-8 text-green-300 font-bold"></h1>
      </div>
    </div>
    <div className="mt-20 flex flex-row justify-between">
      <h1 className="ml-20 font-bold text-green-400">Submit</h1>
       <h1 className="mr-20 font-bold text-indigo-500">See-Your-Submission</h1>
      </div>
    </div>
    )
} 
export default Assignmentlist;
