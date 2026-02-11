import express from 'express'

const app = express()

// Config ejs
app.set('view engine', 'ejs')
app.set('views', 'views')

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: "Welcome to my Website",
        Message: "Hello,How are you?",
        peoples: ["Pankaj", "Rushi", "Shashank"]
    })
})

app.listen(8000, () => {
    console.log("Server running on PORT 8000");

})