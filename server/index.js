//import express
import express from "express";
import Router from "./routes/routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(Router);

// listen on port
app.listen(3001, () => console.log('Server Running at http://localhost:3001'));