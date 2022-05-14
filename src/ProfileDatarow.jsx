import React, {useState} from 'react'
import ProfileData from './ProfileData'
import FakeDataA from './FakeDataA';
import {useForm} from './ProfileValues'
function ProfileDatarow () {
    
const {inputValue, OninputChange} = useForm()
                    

    return(
        <div>
            {FakeDataA.map(e => {
                
                return(
                    <ProfileData onChange={OninputChange} value={inputValue[e.name]} data={e} />
                    
                )
            })}
        </div>
    )
}
export default ProfileDatarow;