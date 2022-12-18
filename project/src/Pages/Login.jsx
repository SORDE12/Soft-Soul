import { Button, HStack, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import l from "./Login.module.css"

import {ArrowRightIcon,ArrowBackIcon} from "@chakra-ui/icons"

import { AuthContext } from "../Context/AuthContextProvider"



export default function Login() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const navigate = useNavigate()
    const [email,setEmail]= useState("")
    const [pass,setPass]= useState("")
    
    const {Login} = useContext(AuthContext);
   
    const HandleSubmit =  (e)=>{
     e.preventDefault()
        
      fetch("https://reqres.in/api/login",{
       method:"POST",
       headers:{
         "Content-Type": "application/json"
       },
       body: JSON.stringify({email:email,password:pass})
      }).then((res)=>res.json())
      .then ((res)=>{
       
        console.log(res)
   
       if(res.token) {
         Login(res.token)
         navigate("/")
       }else{
        alert("Please Enter valid Data")
       }
       
       
   
      }).catch((err)=>{
       console.log(err)
 
      })
    
   
    }
    return (
        <>
            <div className={l.container}>
                
                <h1 style={{fontSize:"40px"}}>Soft Soul</h1>
                <div className={l.signup}><span>Don't have an account</span><span style={{ textDecoration: "underline", color: "blue" }}>SignUp</span></div>
                <p className={l.label}>Email address</p>



                <Input value={email} onChange= {(e)=>setEmail(e.target.value)} type="email" className={l.input} variant='filled' placeholder='Enter Your Email' />

                <p className={l.label}>Password</p>
                <div><InputGroup size='md'>
            <Input value={pass} onChange = {(e)=>setPass(e.target.value)}
              
             
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup></div>

                <Button onClick={HandleSubmit} width="100%" marginTop="30px" colorScheme='blue'>Login</Button>


                <HStack marginTop="30px" marginLeft="80px">
                    <Button colorScheme='facebook' >
                        Facebook
                    </Button>
                    <Button colorScheme='twitter'>
                         Twitter
                    </Button>
                </HStack>

                <br /><br />
                <h2>use this reqres email and password for login</h2>
                <div style={{margin:"auto", textAlign:"left", width:"85%"}}>
                <h2>{<ArrowRightIcon boxSize={2}/>}  Email id: eve.holt@reqres.in</h2>
                <h2>{<ArrowRightIcon boxSize={2}/>}  Password: pistol</h2>
                </div>
              
                <br /><br />

                <Link to="/"><ArrowBackIcon/>back to home</Link>
            </div>
            
        </>
    )
}



