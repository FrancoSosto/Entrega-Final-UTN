import mongoose from 'mongoose'
//const url = 'mongodb://localhost:27017/Mern'
const url = 'mongodb+srv://Francososto:Pepe0101@cluster0.ewcylid.mongodb.net/test'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=>{ console.log("¡Conectado a MongoDB!")} )
db.on('error', ()=>{ console.log("¡Error al conectar a MongoDB!")} )

export default db