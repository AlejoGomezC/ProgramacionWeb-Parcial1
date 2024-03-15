import { useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {

    const [formValues, setFormValues] = useState({ username: '', password: '' });
    const [passwordError, setPasswordError] = useState('');


    const handleUsernameChange = (e) => {
        const newUsername = e.target.value;
        setFormValues({ ...formValues, username: newUsername });

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



    return (
        <div className="login-form-container">
            <h2>Iniciar Sesión</h2>
            <Form>
                <Form.Group className="mb-6" controlId="formBasicUsername">
                    <Form.Label >Nombre de Usuario</Form.Label>
                    <Form.Control
                        type="username"
                
                        onChange={handleUsernameChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <br></br>
                    <Form.Control
                        type="password"
                        onChange={handlePasswordChange}
                        isInvalid={!!passwordError}
                    />
                </Form.Group>

                <Button type = "button" variant="primary">
                    Submit
                </Button>
            </Form>
        </div>


    );
}

export default Login;
