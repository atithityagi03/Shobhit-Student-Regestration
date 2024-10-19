import mongoose from 'mongoose';



const Connection = async () => {
    const URL = `mongodb://localhost:27017/Shobhit_University`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully')
    } catch (error) {
        console.log('Error while connecting with mongodb', error)
    }
}

export default Connection;