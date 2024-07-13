import mongoose, {Schema} from 'mongoose';

const InsertMaps = new mongoose.Schema([
    {
        title: {type: String, required: true},
        Thumbnail: [],
        pdf: [],
        Logo: [] 
    }
])

const MapsData = mongoose.models.InsertMaps || mongoose.model('InsertMaps', InsertMaps);

export default MapsData;