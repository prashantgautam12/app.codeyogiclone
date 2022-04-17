import React,  {useEffect, useState} from 'react'

import StudentName from './StudentName'
import axios from 'axios'
function StudentData() {
    const [user, setuser] = useState([])
    useEffect(() => {
            const token = axios.get("https://randomuser.me/api/?results=5")
            token.then((response) => {
                setuser(response.data.results)
            })
        }, []
    )
    return(
        <div class="flex flex-wrap space-x-2 space-y-2 mb-20">
            {user.map(e => {
                return(
                    < StudentName user={e} />
                )
            } )}
        </div>
    )

}
export default StudentData;