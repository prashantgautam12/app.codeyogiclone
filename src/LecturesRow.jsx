import React from 'react'
import Lecturelist from "./Lecturelist";
import FakeDataL from "./FakeDataL";
function LecturesRow () {
  return(
    <div>
      
      {FakeDataL.map(eachObj => {
        return (
          <Lecturelist title={eachObj.title}
           duration={eachObj.duration}
           purpose={eachObj.purpose}
           topic={eachObj.topic} 
           date={eachObj.date}>
          </Lecturelist>
        )
      }
      )
      }
     </div> 
  )
} 
export default LecturesRow;