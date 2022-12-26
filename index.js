const { response } = require('express')
const  express = require('express')
const mongoose = require('mongoose')
const BrandName = require('./model')
const app = express()
app.use(express.json())
const port =process.env.PORT || 3000
mongoose.connect('mongodb+srv://NandaKumar:Nanda7328@cluster0.9j7nchf.mongodb.net/?retryWrites=true&w=majority').then(
    () => console.log("DB Connected..")
    ).catch(err => console.log(err,"me"))


app.post('/addbrand',async(request,response) => {
    const {brandname} = request.body
    try{
       const newData = new BrandName({brandname})
       await newData.save()
       return response.json(await BrandName.find())
    } 
    catch(err){
        console.log(err.message)
    }
})


app.get('/',async(request,response) => {
    
    try{
       return response.json(await BrandName.find())
    } 
    catch(err){
        console.log(err.message)
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))