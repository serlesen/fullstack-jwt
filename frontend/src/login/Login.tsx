import { useState } from "react";

import { setAuthHeader } from "../services/BackendService";

export function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({login: login, password: password})
        }).then(response => {
            if (response.status == 200) {
                return response.json();

            } else {
                return null;
            }
        }).then(data => {
            if (data !== null) {
                setAuthHeader(data["token"]);
            } else {
                setAuthHeader(null);
            }
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="login">Login</label>
                <input name="login" onChange={(event) => setLogin(event.target.value)}/>
            </div>

            <div>
                <label htmlFor="password">password</label>
                <input name="password" type="password" onChange={(event) => setPassword(event.target.value)}/>
            </div>

            <button type="submit">SignIn</button>
        </form>
    );
}

export default Login;