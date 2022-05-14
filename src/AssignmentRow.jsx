import React,  {useEffect, useState} from 'react'
import Assignmentlist from './Assignmentlist'
import axios from 'axios'
function AssignmentRow() {
    const [users, setusers] = useState([])
    useEffect(() => {
            const token = axios.get("https://api.codeyogi.io/batches/1/assignments", {withCredentials:true})
            token.then((response) => {
                setusers(response.data)
            })
        }, []
    )
    return(
        <div>
            {users.map(e => {
                return(
                    < Assignmentlist users={e} key={users.id} />
                )
            } )}
        </div>
    )

}
export default AssignmentRow;