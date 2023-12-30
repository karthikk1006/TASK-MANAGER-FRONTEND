import {Button,Input,InputGroup,InputRightElement} from "@chakra-ui/react"
import { useState } from "react"
import {AiOutlinePlus} from "react-icons/ai"
import React from "react"
import axios from "axios"


const Taskbar=()=>{
  const [message, setMessage] = useState('');
  function handleClick(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    console.log(message);
    if(message){
    axios.post("http://localhost:3000/api/v1/tasks",{
      name:message,
      completed:false
    }).then((res)=>{console.log(res.data)}).catch((err)=>console.log(err))
    window.location.reload(false)
  }
  //post request    
  }
  function handleChange(e){
    setMessage(e.target.value);
  }
    return(
<InputGroup marginBlockStart={"15%"} marginLeft={"25%"} width="50vw" size='lg'>
<Input
  pr='4.5rem'
  variant="filled"
  placeholder='Enter task'
  onChange={handleChange}
/>
<InputRightElement width='4.5rem'>
  <Button h='1.75rem' size='xs' style={{borderRadius:"50%",backgroundColor:'green'}} onClick={handleClick}>
    <AiOutlinePlus color='white'  style={{borderRadius:"50%"}} />
  </Button>
</InputRightElement>
</InputGroup>
    )
}
export default Taskbar;