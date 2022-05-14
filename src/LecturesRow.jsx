import React,  {useEffect, useState} from 'react'
import Lecturelist from './Lecturelist'
import axios from 'axios'
function LecturesRow() {
    const [userss, setuserss] = useState([])
    useEffect(() => {
            const token = axios.get("https://api.codeyogi.io/batches/1/sessions", {withCredentials:true})
            token.then((response) => {
                setuserss(response.data)
            })
        }, []
    )
    return(
        <div>
            {userss.map(e => {
                return(
                    < Lecturelist userss={e} key={userss.id}/>
                )
            } )}
        </div>
    )

}
export default LecturesRow;