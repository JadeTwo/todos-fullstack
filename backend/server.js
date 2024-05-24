import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import mongoConfig from './config.js'
import todoRoutes from './routes/todoRoutes.js'
import firebaseConfig from "./firebaseConfig.js"
import admin from "firebase-admin"
const app = express()

const port = 8080

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig)
})

app.use(cors())
app.use(express.json())

const checkAuth = async(req, res, next) => { 
    try{
       let token= req.headers.authorization.split(" ")[1]

    //    token = token.replace("a","n")
        let result = await admin.auth().verifyIdToken(token)
        console.log("🚀 ~ checkAuth ~ result:", result)
        req.user = result
        next()
   }catch(err){
    console.log("🚀 ~ auth failed:", err)
    res.status(401).json({message:"you need to sign in"})
   }
}
app.use('/api/todos', checkAuth,todoRoutes)

http://localhost:8080/api/todos/lhmZBC2Di2XO1Kmdrg8W6T9YsiT2
app.get('/', (req, res) => {
    res.json('Hello! (from Server)')
})

app.listen(port, () => {
    console.log('Listening on port: ' + port)
    mongoConfig()
})