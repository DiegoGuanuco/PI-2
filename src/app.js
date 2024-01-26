const express = require("express")
const morgan = require("morgan")
const app = express()

const usersRoutes = require("./routes/usersRoutes")
const posteosRouter = require("./routes/posteosRoutes")

app.use(express.json())
app.use(morgan("dev"))

app.use("/users", usersRoutes)
app.use("/posteos", posteosRouter)


module.exports = app



