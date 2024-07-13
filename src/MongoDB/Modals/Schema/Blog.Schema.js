import mongoose, {Schema} from 'mongoose'

const BlogContent = new mongoose.Schema([
    {
        title: {type: String, required: true},
        Content: {type: String, required: true},
        thumbnail: [],
        Date: {type: String, required: true},
    }
])

const Blog = mongoose.models.BlogContent || mongoose.model('BlogContent', BlogContent);

export default Blog;