import {useRef, useState} from"react";

const Inputdata=(props)=>{
    const emailref=useRef();
    const passref=useRef();
    const nameref=useRef();
    const ageref=useRef();
    const dateref=useRef();
    const genderref=useRef();
    const stateref=useRef();
    const clickevent=(event)=>{
        event.preventDefault();
        const emaill=emailref.current.value;
        const pass=passref.current.value;
        const namee=nameref.current.value;
        const agee=ageref.current.value;
        const datee=dateref.current.value;
        const genderr=genderref.current.value;
        const statee=stateref.current.value;

        if(emaill.length===0)
        {
            alert("Email should not be empty")
        }
        if(pass.length===0)
        {
            alert("Password should not be empty")
        }
const data={
    email:emaill,
    pass:pass,
    name:namee,
    age:agee,
    date:datee,
    gender:genderr,
    state:statee
}
props.onAdditem(data);
    }
    return(
        <diV className="wrapper">
            {/*<form> */}
            <label>Email</label>
            <input type="email" ref={emailref}/><br/>
            <label>Password</label>
            <input type="password" ref={passref}/><br/>
            <label>Name</label>
            <input type="name" ref={nameref}/><br/>
            <label>Age</label>
            <input type="number" ref={ageref}/><br/>
            <lable>date</lable>
            <input type="date" ref={dateref}/><br/>
            <lable>Gender</lable>
            <input type="radio" name="gen" value="male" ref={genderref}/>male<br/>
            <input type="radio" name="gen" value="female" ref={genderref}/>female<br/>
            <input type="radio" name="gen" value="transgender" ref={genderref}/>transgender<br/>
            <lable>State</lable>
            <select ref={stateref}>
                <option>Maharashta</option>
                <option>Rajasthan</option>
                <option>Gujarat</option>
                <option>Madhypradesh</option>
                <option>kerla</option>
                <option>uttrakand</option>
                <option>jamu and kashmir</option>
            </select><br/>
            <button onClick={clickevent}>Ragister</button>
            {/*</form>*/}
        </diV>
        
    );
}
export default Inputdata;