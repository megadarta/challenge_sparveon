import { postLogin, getDetail, getToken, postRegis } from "../models/models.js";

 
export const Regis = (req, res) => {
    postRegis(req, res);
}

export const Login = (req, res) => {
    postLogin(req, res);
}

export const Detail = (req, res) => {
    getDetail(req, res);
}

export const validasiToken = (req, res) => {
    getToken(req, res);
}