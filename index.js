require('dotenv').config()
const express = require('express')
const rateLimit = require('express-rate-limit')
const cors = require('cors')
const indexRouter = require('./routes/index')

const PORT = process.env.PORT || 6000

const app = express()

// Rate Limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 
  max: 20
})
app.use(limiter)
app.set('trust proxy', 1)


// Enable cors
app.use(cors())

// Resister routes 
app.use('/api', indexRouter)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))