import React, {useState, useEffect} from 'react'
import ProfileData from './ProfileData'
import FakeDataA from './FakeDataA';
import {useForm} from './ProfileValues'
import axios from 'axios';
function ProfileDatarow () {
//     const [information, setinformation] = useState()
//     const [newObj, setNewObj] = useState(
//         {
//             Name:""
//         }
//     )
//     useEffect(() => {
//       const token = axios.get("https://api.codeyogi.io/me", {withCredentials:true})
//         token.then((response) => {
//            setinformation(response.data)
//         })
//     }, []
//    )
//    console.log("ye aya response",information,newObj)

//    useEffect(() => {
//        if(information){
//     let newObjCopy = {...newObj}
//     newObjCopy.Name = information.data.first_name
//     setNewObj(newObjCopy)
//        }

// }, [information])
// const {inputValue, OninputChange, Onsubmit} = useForm()
                    

    return(
    <div>
        <div>
            {FakeDataA.map(e => {
                
                return(
                    <ProfileData name={e.name} onChange={OninputChange} value={inputValue[e.name]} data={e} />
                    
                )
            })}
        </div>
        <button onClick={Onsubmit}  class="p-2 mb-4 bg-indigo-500 mt-4 rounded-md ">SUBMIT</button>
        <div></div>
        </div>
    )
}
export default ProfileDatarow;