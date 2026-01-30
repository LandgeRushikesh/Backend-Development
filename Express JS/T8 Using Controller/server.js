import express from 'express'

const PORT = process.env.PORT

const app = express()

app.listen(() => {
    console.log(`Server Running on PORT ${PORT}`);

})