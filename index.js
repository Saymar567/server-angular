console.log('desde index.js');
const express = require("express")
const connectDB = require('./config/db')
const cors = require("cors")
const app = express();

connectDB()
app.use(cors({origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }))

app.use(express.json())

app.use('/api/productos', require('./routes/product'));

app.get('/', (req, res) => {
    res.send('Hola, Mundo')
})

app.listen(4000, () => {

})