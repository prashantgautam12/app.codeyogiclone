import React from 'react'
import Assignmentlist from "./Assignmentlist";
import FakeDataA from "./FakeDataA";
function AssignmentRow () {
  return(
    <div>
      
      {FakeDataA.map(eachObj => {
        return (
          <Assignmentlist
          title={eachObj.title}
          check={eachObj.check}
          status={eachObj.status}
          submit={eachObj.submit}
          date={eachObj.date}
          duedate={eachObj.duedate} >
         </Assignmentlist>
        )
      })
      }
     </div> 
  )
} 
export default AssignmentRow;