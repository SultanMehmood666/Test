import mongoose from 'mongoose';
const uri = "mongodb+srv://sultanmehmood9009:sultanmehmood9009@cluster0.7c3vyr7.mongodb.net/Micasa_DB?retryWrites=true&w=majority"


async function MongoDBConnect(req, res){
  try {
    await mongoose.connect(uri)    
    }catch(error){
    console.log(error)
  }
}
export default MongoDBConnect;