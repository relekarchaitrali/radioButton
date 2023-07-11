import React from 'react'
import { useState } from 'react'

function Form2() {
const [input,setInput]=useState({
        Fname:'',
        Lname:'',        
        phone:'',
        email:''
})

const [contact,setContact]=useState({})

const handlechange =(e)=>{
    console.log(e.target.value)
    const {name,value}=e.target
    setInput((prev)=>({...prev,[name]:value}))
    console.log(input)
}
const handleContact=(e)=>{
        const x=e.target.value   
        setContact(x)
        console.log(contact)
}

    


  return (
    <div style={{textAlign:'center'}}>
        <form>
          <h3 style={{marginLeft:'10px',color:'Red' }}>REGISTRATION</h3>
            
            <input  value={input.Fname} onChange={handlechange} placeholder='First Name' name='Fname' style={{margin:'20px' , color:'Grey' , textAlign:'center'} }/>
              
            <input onChange={handlechange} value={input.Lname} placeholder='Last Name' name='Lname'  style={{margin:'20px' , color:'Grey' , textAlign:'center'}}/>

                <br></br>
                <h6 style={{marginLeft:'20px', color:'Red'}}>How should we contact you?</h6>
            <label>
               <input  type='radio' name='g' onClick={handleContact} value='phone'  style={{marginLeft:'30px' , color:'Grey'}}/>
                Phone                
            </label>    
            <label >
               <input name='g' type='radio'value='email' onClick={handleContact}  style={{marginLeft:'20px' , color:'Grey'}}/>
                Email                
            </label>
            <br></br>

            {contact === 'phone' ?<>

                <lable style={{marginRight:'40px'}}>Mobile Number</lable>
                <input value={input.phone} type='number' onChange={handlechange} name='phone' style={{marginRight:'20px'}} />    
            
            </>:null}
            
            {contact === 'email' ? 
            <>
            <lable style={{marginRight:'40px'}}>Email</lable>
            <input value={input.email} type='email' onChange={handlechange} name='email' />
            </>
            :null}
            
            <br></br>
           
        </form>

    </div>
  )
}

export default Form2;