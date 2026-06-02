import express from "express";
import cors from "cors";

import employeeRoutes from "./routes/employeeRoutes.js";

const app = express();

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: [ "GET", "POST", "PUT", "DELETE" ],
}))

app.use(express.json());

app.use(
  "/api/employees",
  employeeRoutes
);

export default app; 