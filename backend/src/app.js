import express from 'express'
import routes from "./routes.js";
import cors from 'cors'

const app = express();
app.use(cors({
  origin: "https://gestao-hardware.vercel.app/",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.use(express.json())
app.use(routes)


export default app