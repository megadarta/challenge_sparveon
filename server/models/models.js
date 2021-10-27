import connection from "../config/config.js";
import * as bcrypt from 'bcrypt';
import pkg from "jsonwebtoken";
const  { verify } =pkg;
const {sign} = pkg;

// input data registrasi
export const postRegis = (req, res) => {
    if(req.body.password == req.body.confirmpassword){
        if(req.body.password.length <= 8){
            let pass = bcrypt.hashSync(req.body.password, 10);
            let data = { email: req.body.email, username: req.body.username, password: pass};
            let sql = "INSERT INTO akun_user SET ? ";
            connection.query(sql, data, (err, results) => {
                if (err) throw err;
                const accessToken = sign({username: data.username, id_akun_user: results.insertId}, "importantsecret");
                res.json({token : accessToken, results: "success", user: data.username, id_user: results.insertId});
            });
        }
        else{
            res.json({results: "Password hanya menanpung maksimal 8 karakter"});
        }
    }
    else{
        res.json({results: "Masukkan password yang sama"});
    }
}

// pengecekan login 
export const postLogin = (req, res) => {
    let sql = "SELECT * FROM akun_user WHERE username = '" + req.body.username + "'";
    connection.query(sql, (err, results) => {
        
        if (results.length > 0) {
            let pass = bcrypt.compareSync(req.body.password, results[0].password);
            if(pass==true){
                const accessToken = sign({username: results[0].username, id_akun_user: results[0].id_akun_user}, "importantsecret");
                res.json({token : accessToken, results: "success", user: results[0].username, id_user: results[0].id_akun_user});
            }
            else{
                res.json({results: "Password salah"});
            }
        }
        
        else {
                res.json({ results: "Username belum terdaftar" });
        }
    })

}

// mendapat info akun user 
export const getDetail = (req, res) => {
    let data = req.query.id_user;
    if(data==null){
        res.json({results: "failed"});
    }
    else{
        let sql = "SELECT * FROM akun_user where id_akun_user = " + data;
        connection.query(sql, (err, results) => {
            if (err) throw err;
            res.json({ results: results });
        });
    }
}

// pengecekan token 
export const getToken = (req, res) => {
    const accessToken = req.header('Authorization').split(' ')[1];

    if(!accessToken) return res.json({results: "failed", pesan: "Terdapat error"})

    try{
        const validToken = verify(accessToken, "importantsecret");
        
        if(validToken){
            return res.json({results: "success"});
        }
        else
        {
            return res.json({results: "failed", pesan: "Terdapat error"})
        }
    } catch(err){
        return res.json({results: "failed", pesan: "Anda Harus Login"})
    }
};

