import React from 'react' 
function Assignmentlist (props) {
  return(
     <div className=" mb-8 grow shadow-lg">
    <div className="flex flex-row justify-between items-center">
      <div  className="space-y-4">
    <h1 className="font-bold">{props.title}<span className="ml-4 text-gray-500">{props.date}</span></h1>
    <h1 className="ml-4 text-red-500">{props.duedate}</h1>
    </div>
    <div>
      <h1 className="mt-8 text-green-300 font-bold">{props.status}</h1>
      </div>
    </div>
    <div className="mt-20 flex flex-row justify-between">
      <h1 className="ml-20 font-bold text-green-400">{props.submit}</h1>
       <h1 className="mr-20 font-bold text-indigo-500">{props.check}</h1>
      </div>
    </div>
    )
} 
export default Assignmentlist;
