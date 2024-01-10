import { useState } from 'react';
import {useAppContext} from "@/components/AppProvider";
import {useRouter} from "next/router";
import AuthForm from "@/components/form/AuthForm";

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const {handleLogin} = useAppContext();

    const router = useRouter();

    async function loginUser() {
        setLoginError(false);

        const url = 'http://localhost:8080/api/users/auth';
        const data = {login: login, password: password};

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                const state = result.state;

                if (state === 1) {
                    console.log('Login successful: ', result);
                    handleLogin({id: result.user_id, token: result.auth_token});
                    router.push('/pool/profile');
                }
                else if (state === 2) console.log('Login failed: ', result);
                else console.log('Error: ', result);
            } else {
                console.error('Response failed');
                setLoginError(true);
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    const clickLogin = (e) => {
        e.preventDefault();
        loginUser();
    };

    return (
        <div>
            <AuthForm></AuthForm>
            <form onSubmit={clickLogin}>
                <input type={'text'} placeholder={'login'} onChange={(e) => setLogin(e.target.value)} required/>
                <input type={'password'} placeholder={'password'} onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Войти</button>
            </form>
            {loginError && <p>Ошибка аутентификации</p>}
        </div>
    );
}

export default Login;
