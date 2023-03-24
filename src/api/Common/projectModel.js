import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    project: {
        type: String
    },
    technology: {
        type: String
    },
    manager: {
        type: String
    },
    duration: {
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

const projectModel = mongoose.model('projects', projectSchema)

export default projectModel