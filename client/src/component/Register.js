import React, {useState} from "react";
import swal from 'sweetalert';
import { useHistory } from 'react-router';

function Register(){
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const history = useHistory();

    function regis_user(e){
        e.preventDefault();
        
        //input data regis
        fetch('http://localhost:3001/regis', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password, confirmpassword})
        }).then(res => res.json()).then(data => {
                console.log(data);
               
                if(data.results=="success"){
                    localStorage.setItem("accesstoken", data.token);
                    localStorage.setItem("user", data.user);
                    localStorage.setItem("id_user", data.id_user);
                     history.push("/home");
                }
                else{
                    swal("Gagal!", data.results, "error");
    
                }
            }
        );

    }

    return(
    <div className="container loginclass">
        <div className="log-res d-flex row justify-content-center">
            {/* button atas  */}
            <div className="d-flex justify-content-center">
                <a className="nonactive-button btn" href="/">Login</a>
                <a className="active-button btn" href="/register">Register</a>
            </div>

            {/* form register  */}
            <div className="form-login p-4">
            <form method="post" onSubmit={regis_user}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Input Email"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputUser" class="form-label">Username</label>
                    <input onChange={e => setUsername(e.target.value)} type="text" class="form-control" id="exampleInputUser" aria-describedby="userHelp" placeholder="Input USername"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Input Password"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input onChange={e => setConfirmpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Input Confirm Password"></input>
                </div>
               
                <button type="submit" class="btn btn-login">Register</button>
            </form>
            </div>
        </div>
    </div>
    );
}

export default Register;