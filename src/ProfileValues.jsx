import  {useState, useEffect} from 'react'
import axios from 'axios'

export const useForm = () => {

    const [inputValue, setinputValue] = useState({})
    
                const OninputChange = (event) => {
                    const changeItems = event.target.name;
                    const Data = {...inputValue, [changeItems]: event.target.value}
                    setinputValue(Data)
                }
                const Onsubmit = () => {
              
                console.log(inputValue)
               
                }
               
                    return {inputValue, OninputChange, Onsubmit}
                    
}