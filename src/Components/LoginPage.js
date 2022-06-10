import { Button, Card, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

export default function LoginPage() {

    
    const navigate = useNavigate()

    const [LoginDetails, setLogInDetails] = useState({
        username:'',
        password:''
    })

    const handleLogin = () => {
        axios.post('http://localhost:3030/api/login' , LoginDetails).then(result => {
            var res = result.data
            console.log(res);
        })
    }

  return (
    <div>
       <Card
       sx={{
           width:'50%',
           display:'flex',
           flexDirection:'column',
            padding:'20px',
            margin:'20px'
       }}
       >

       <Typography sx={{textAlign:'center' , fontWeight:'bold' , fontSize:'30px'}}> Login Page </Typography>

       <br/>
       <TextField 
        placeholder='UserName'
        value={LoginDetails.username}
        onChange={(e) => setLogInDetails({...LoginDetails , username:e.target.value})}
        size='small'
        />

        <br/>

        <TextField 
        placeholder='PassWord'
        value={LoginDetails.password}
        onChange={(e) => setLogInDetails({...LoginDetails , password:e.target.value})}
        size='small'
        />
        <br/>


        <Button variant='contained' onClick={() => handleLogin()}>
            Login
        </Button>

       </Card>
    </div>
  )
}
