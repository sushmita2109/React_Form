import React, { useState } from "react";

function Forms()
{
    const [userRegistration,setUserRegistration]=useState(
        {
            firstname:'',
            lastname:'',
            email:'',
            subject:'react'
        }
    );
    const [records,setRecord]=useState([]);
    const handleInput =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setUserRegistration({...userRegistration,[name]:value})
    }
   const handleSubmit=(e)=>{
    e.preventDefault();
    const newRecord={...userRegistration,id:new Date().getTime().toString()}
    setRecord([...records,newRecord])
   }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div>
            <label>First Name</label>
            <input type="text" name="firstname" value={userRegistration.firstname} onChange={handleInput}/>
            </div>
            <div>
            <label>Last Name</label>
            <input type="text" name="lastname" value={userRegistration.lastname} onChange={handleInput} />
            </div>
            <div>
            <label>Email</label>
            <input type="text" name='email' value={userRegistration.email} onChange={handleInput}/>
            <label>Subject</label>
            </div>
            <div>
            <select name='subject' value={userRegistration.subject} onChange={handleInput}>
                <option value='react'>React</option>
                <option value='datamining'>Data Mining</option>
            </select>
            </div>
            <button type="submit">submit</button>
        </form>
        </>
    )
}
export default Forms;