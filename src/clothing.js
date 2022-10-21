import dbConnect from "./dbConnect.js"

export function createClothing(req, res){
    //connect to fire-store
    const db = dbConnect()
    //add a new doc to coffees collection
    db.collection('clothing').add(req.body)
    //send back a response (err/not)
.then(doc=> res.status(201).send({success: true, message: 'Created clothing' + doc.id}))
.catch(err => res.status(500).send({sucess : false, message: err}))
}

