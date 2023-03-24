import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    teamleader: {
        type: String
    },
    project: {
        type: String
    },
    module: {
        type: String
    },
    task: {
        type: String
    },
    developer: {
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

const taskModel = mongoose.model('tasks', taskSchema)

export default taskModel