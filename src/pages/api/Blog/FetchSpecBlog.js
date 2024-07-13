import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import Blog from '@/MongoDB/Modals/Schema/Blog.Schema';
import {ObjectId} from 'mongodb';

export default async function(req, resp){
    try{
        const {id} = req.query;
        console.log(id)
        await MongoDBConnect();
        console.log(id)
        const specifiBlog = await Blog.findOne({_id: new ObjectId(id)})
        if(!specifiBlog){
            console.log("Collection Not found")
        }
        return resp.send(specifiBlog);
    }
    catch(error){
        console.log(error);
    }
    
}
