import React, { useState } from "react";

const Form = (props) => {
    let {firstName, setFirstName} = props;
    let {lastName, SetLastName} = props;
    let {email, SetEmail} = props;
    let {password, SetPassword} = props;
    let {passwordConfirm, SetPasswordConfirm} = props;

    const [inputFirstName, SetInputFirstName] = useState("");
    const [inputLastName, SetInputLastName] = useState("");
    const [inputEmail, SetInputEmail] = useState("");
    const [inputPassword, SetInputPassword] = useState("");
    const [inputPasswordConfirm, SetInputPasswordConfirm] = useState("");
    const [error, setError] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        if(inputFirstName.length <3 || inputLastName.length <3 || inputEmail<11){
            setError("Too Short")
        }else if(inputFirstName.length > 13 || inputLastName.length > 13 || inputEmail > 35){
            setError("Too long")
        }else{
            setError("Accepted");
            setFirstName(inputFirstName);
            SetLastName(inputLastName);
            SetEmail(inputEmail);
            SetInputFirstName("");
            SetInputLastName("");
            SetInputEmail("");
        }

        // if(!password.equals(passwordConfirm)){
        //     setError(setError+" Passwords didn't match")
        // }else{
        //     setError(setError+ " ")
        //     SetPassword(inputPassword);
        //     SetPasswordConfirm(inputPasswordConfirm);
        //     SetInputPassword("");
        //     SetInputPasswordConfirm("");
        // }
    }
    return(
        <div>
            <p>{error}</p>
            <form onSubmit={submitHandler} >
                <h1>{inputFirstName},{inputLastName}</h1>
                <h3>{inputEmail}</h3>
                <input type="text" value={inputFirstName} onChange={e => SetInputFirstName(e.target.value)} />
                <input type="text" value={inputLastName} onChange={e => SetInputLastName(e.target.value)} />
                <input type="text" value={inputEmail} onChange={e => SetInputEmail(e.target.value)} />
                {/* <input type="text" value={inputPassword} onChange={e => SetInputPassword(e.target.value)} />
                <input type="text" value={inputPasswordConfirm} onChange={e => SetInputPasswordConfirm(e.target.value)} /> */}
                <input type="submit" value="submit"/>
            </form>
        </div>
    )

}

export default Form;