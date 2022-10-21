import express from 'express'
import {createClothing, getClothing} from './src/clothing.js'


const app = express ()


app.use(express.json())
app.post('/clothing', createClothing )
app.get('/clothing', getClothing )



app.listen(3030, () => console.log('listening on http://localhost:3030...'))