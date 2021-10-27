import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../css/Home.css";
import swal from 'sweetalert';

function Home(){
    const history = useHistory();
    const [detail, getDetail] = useState([]);

    //mengecek izin akses halaman dengan token
    useEffect(() => {
        fetch('http://localhost:3001/cek_token', 
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("accesstoken"),
                },
            }
        ).then(res => res.json()).then(data => {
            if(data.results == "failed"){
                swal("Gagal!", data.pesan, "error");
                history.push("/");
            }
        })
    }, [])

    //menampilkan info akun user
    useEffect(() => {
        fetch('http://localhost:3001/detail?id_user=' + localStorage.getItem("id_user")).
        then(res => res.json()).then(data => {
            if(data.results == "failed"){
                swal("Gagal!", "Anda Harus Login", "error");
                history.push("/");
            }
            else{
                getDetail(data.results);
            }
        });

    }, [])

    //logout dengan hapus token
    function logout(){
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("user");
        localStorage.removeItem("id_user");
        history.push('/');
    }

    //mengatur form info akun 
    function view_profile(){
        if(document.getElementById("form-active")){
            document.getElementById("form-active").style.display ="block";
            document.getElementById("form-active").id ="form-nonactive"
        }
        else{
            document.getElementById("form-nonactive").style.display ="none";
            document.getElementById("form-nonactive").id = "form-active";
        }
    }

    return(
        <div>
                {/* navbar  */}
                <nav class="navbar navbar-expand-lg navbar-home">
                    <div class="container">
                        <a class="navbar-brand" href="#">Sparveon</a>
                        <div class="d-flex">
                            <button class="btn nav-link active" aria-current="page" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </nav>

                {/* content */}
                <div className="d-flex row home-page justify-content-center">
                    <div className="title-home-page">Hallo {localStorage.getItem("user")}</div>
                    <div className="text-home-page">"Have a nice day!"</div>
                    <button className="btn-view btn" onClick={view_profile}>Info Account</button>
                </div>

             
                <div className="d-flex justify-content-center">
                    <form className="form-detail-user" id="form-active">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input disabled value={detail[0]?.email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input disabled value={detail[0]?.username}  type="text" class="form-control" id="username"></input>
                        </div>
                    </form>
                </div>
                
        </div>
    );
}

export default Home;