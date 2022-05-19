import React, {useState} from 'react'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
function SubmitPopup() {
    
  const data = useParams()
  const [error, seterror] = useState('')
  
  //const onInputchange = (event) => {
    //updatesubmissionLink(event.target.value)
  //} 
  const urlvalidater  = () => {
    const properurl = yup.string().url()
    const finallink = properurl.isValidSync(values)
    const submissionlinkerror = finallink ? "" : "you entered a unvalid url"
    seterror(submissionlinkerror)
    console.log(values)
    console.log(finallink)
  }
   
  const onSubmit = () => {
    //urlvalidater()
   // axios.put(`http://api.codeyogi.io/${data.id}/submit`, {values}, {withCredentials:true} )
   console.log(values)
  }
const { handleSubmit, handleChange, values, errors} = useFormik({initialValues:{submissionlink: ''},validationSchema: yup.object().shape({
  submissionlink: yup.string().url().required(),
})
, onSubmit
})
console.log(errors)


    return(
        <div>
            <form onSubmit={handleSubmit}>
<div class="rounded-md bg-gray-300 flex flex-col h-56 w-96">

  {errors.url && <div className="text-red-500 h-6 w-80 rounded-md bg-white">{errors.url}</div>}
  <div class=" h-20 flex justify-between  mt-10 border-y-2">
   <h1 class="my-auto">Submission link</h1>
  
   <input class="h-10 my-auto rounded-md border-2 border-indigo-500" required placeholder="submission link" name="submissionlink" onChange={handleChange}
   value={values.submissionlink} ></input>

</div>
<div class="mt-4 ml-4">
<button class="h-8 w-20 rounded-md bg-indigo-500" type="submit" >Submit</button>

</div>
</div>
</form>
</div>
    )
}
export default SubmitPopup;