import express from "express"; 
import { Regis, Detail, validasiToken, Login} from "../controllers/controllers.js";


const router = express.Router();
 

router.get('/cek_token', validasiToken);
router.post('/regis', Regis);
router.post('/login', Login);
router.get('/detail', Detail);
 

export default router;
