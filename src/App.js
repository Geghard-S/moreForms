import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';

function App() {

  const [firstName, setFirstName] = useState("Unicorns");
  const [lastName, SetLastName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [passwordConfirm, SetPasswordConfirm] = useState("");

  return (
    <div className="App">
      <h1>Hello {firstName}, {lastName}</h1>
      <h3>{email}</h3>
      <Form firstName={firstName} setFirstName={setFirstName}
            lastName={lastName} SetLastName={SetLastName}
            email={email} SetEmail={SetEmail}
            password={password} SetPassword={SetPassword}
            passwordConfirm={passwordConfirm} SetPasswordConfirm={SetPasswordConfirm}/>
    </div>
  );
}

export default App;