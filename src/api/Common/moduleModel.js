import mongoose from 'mongoose'

const moduleSchema = new mongoose.Schema({
    manager: {
        type: String
    },
    project: {
        type: String
    },
    module: {
        type: String
    },
    teamleader: {
        type: String
    },
    date: {
        type: String
    },
    file: {
        type: String
    },
    status: {
        type: String
    }
},
    {
        timestamps: true
    });

const moduleModel = mongoose.model('modules', moduleSchema)

export default moduleModel