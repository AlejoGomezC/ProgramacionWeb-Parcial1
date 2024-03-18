import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './Login.css'; // Asegúrate de importar tu archivo CSS si es necesario

const translations = {
    en: {
        title: 'Log in',
        usernameLabel: 'Username',
        passwordLabel: 'Password',
        loginButton: 'Log in',
        cancelButton: 'Cancel',
        invalidCredentials: 'Invalid credentials. Please try again.',
        loginError: 'An error occurred while logging in. Please try again.'
    },
    es: {
        title: 'Inicio de sesión',
        usernameLabel: 'Nombre de usuario',
        passwordLabel: 'Contraseña',
        loginButton: 'Iniciar sesión',
        cancelButton: 'Cancelar',
        invalidCredentials: 'Credenciales inválidas. Por favor, inténtelo de nuevo.',
        loginError: 'Ha ocurrido un error al iniciar sesión. Por favor, inténtelo de nuevo.'
    }
};

function Login() {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('es'); // Establecer el idioma predeterminado

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const { username, password } = inputs;

    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async e => {
        e.preventDefault();

        try {
            const body = { login: username, password };
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const parseRes = await response.json();

            if (parseRes.status === "success") {
                navigate("/vehicleList");
            } else {
                alert(translations[language].invalidCredentials);
            }
        } catch (err) {
            console.error(err.message);
            alert(translations[language].loginError);
        }
    };

    return (
        <div className="login-form-container">
            <h2>{translations[language].title}</h2>
            <Form onSubmit={onSubmitForm}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>{translations[language].usernameLabel}</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>{translations[language].passwordLabel}</Form.Label>
                    <br></br>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </Form.Group>

                <div className="btn-container">
                    <Button variant="primary" type="submit">
                        {translations[language].loginButton}
                    </Button>
                    <Button variant="secondary">
                        {translations[language].cancelButton}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Login;
