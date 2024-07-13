import MongoDBConnect from '@/MongoDB/Connection/Mongodb';
import Blog from '@/MongoDB/Modals/Schema/Blog.Schema'

export default async function(req, resp){
    try{
        await MongoDBConnect();
        const fetchBlog = await Blog.find();
        return resp.send(fetchBlog);
    }catch(error){
        console.log(error);
    }
}
