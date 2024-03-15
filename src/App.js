import './App.css';
import { useState } from 'react';
import NavBar from './components/navBarComponent/NavBar';
import  Login  from './components/loginComponent/Login';



function App() {

  const [formValues, setFormValues] = useState({ email: '', password: '', favClass: '1' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setFormValues({ ...formValues, email: newEmail });
    if (newEmail.includes('@')) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormValues({ ...formValues, password: newPassword });
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    if (password.length < 9) {
      setPasswordError('La contraseña debe tener al menos 9 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleSelectChange = ((e) => {
    setFormValues({ ...formValues, favClass: e.target.value })
  });



  const clickSubmit = () => {
    if (!formValues.email.includes('@')) {
      setEmailError('Your email should follow an established format.');
      return;
    }

  };

  return (
    <div>
      <nav><NavBar></NavBar></nav>
      <div>
        <Login> </Login>



      </div>
    </div>
  );
}

export default App;