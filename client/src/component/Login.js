import React, {useState} from "react";
import '../css/Login.css';
import { useHistory } from 'react-router';
import swal from 'sweetalert';

function Login(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    // pengecekan user login 
    function login_user(e){
        e.preventDefault();

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password})
        }).then(res => res.json()).then(data => {
                console.log(data);
               
                if(data.results!="success"){
                    swal("Gagal!", data.results, "error");
                }
                else{
                    localStorage.setItem("accesstoken", data.token);
                    localStorage.setItem("user", data.user);
                    localStorage.setItem("id_user", data.id_user);
                    history.push("/home");
                }
            }
        );
    }
    return(
    <div className="container loginclass">
        <div className="log-res d-flex row justify-content-center">
            {/* button atas  */}
            <div className="button-atas d-flex justify-content-center">
                <a className="active-button btn" href="/">Login</a>
                <a className="nonactive-button btn" href="/register">Register</a>
            </div>

            {/* form login  */}
            <div className="form-login p-4">
            <form method="post" onSubmit={login_user}>
                <div class="mb-3">
                    <label for="exampleInputUsername" class="form-label">Username</label>
                    <input onChange={e => setUsername(e.target.value)} type="text" class="form-control" id="exampleInputUsername" placeholder="Input Username" aria-describedby="username"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Input Password"></input>
                </div>
                
                <button type="submit" class="btn btn-login">Login</button>
            </form>
            </div>
        </div>
    </div>
    );
}

export default Login;