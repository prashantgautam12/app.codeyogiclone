import  {useState, useEffect} from 'react'
import axios from 'axios'
//const [information, setinformation] = useState({})
    //useEffect(() => {
      //const token = axios.get("https://api.codeyogi.io/me", {withCredentials:true})
       // token.then((response) => {
        //   setinformation(response.data)
      //  })
    //}, []
   //)
export const useForm = () => {
    const [inputValue, setinputValue] = useState({})
    
                const OninputChange = (event) => {
                    const changeItems = event.target.name;
                    const Data = {...inputValue, [changeItems]: event.target.value}
                    setinputValue(Data)
                }
                const Onsubmit = ({inputValue}) => {
              
                console.log(inputValue)
                }
               
                    return {inputValue, OninputChange, Onsubmit}
                    
}