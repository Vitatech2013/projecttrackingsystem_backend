import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
    empid: {
        type: String
    },
    role: {
        type: String
    },
    superior: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    mobileno: {
        type: String
    },
    emailid: {
        type: String
    },
    qualification: {
        type: String
    },
    address: {
        type: String
    }
},
    {
        timestamps: true
    });

const employeeModel = mongoose.model('employees', employeeSchema)

export default employeeModel