require("dotenv/config")
const express = require("express")
const route = require("./src/routes")
const conn = require("./src/config/conn")

const servicePort = process.env.PORT

conn.redisCheck()
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

const app = express()
app.use(route)

app.listen(servicePort, () => {
    console.log(`Service Run On Port ${servicePort}`)
})
