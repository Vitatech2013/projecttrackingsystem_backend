import employeeModel from '../Common/employeeModel';
import taskModel from '../Common/taskModel';
import {sendEmail} from '../Common/email';

export const login = (req, res) =>{
    employeeModel.findOne( {"username":req.query.username, "password":req.query.password, "role":req.query.role}, (err,result)=> {
        res.send(result);
    })
}

export const profile = (req, res) => {
    employeeModel.findById( {"_id":req.query._id}, (err, result)=> {
        res.send(result);
    })
}

export const viewTask = (req, res) => {
    taskModel.find({"developer":req.query.developer}, (err, result) => {
        if (!err) {
        res.send(result);
        } else {
        res.send(err);
        }
    })
}

export const getTask = (req, res) => {
    taskModel.findById(req.params.id, (err,result)=> {
        if (err) {
        res.send(err);
        } else {
        res.send(result);
        }
    })
}

export const updateTaskStatus = (req, res) => {
    taskModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (!err) {
        res.send(result);
        } else {
        res.send(err);
        }
    })
}

export const updatePassword = (req, res) =>{
    employeeModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
        res.send(result);
        }
    })
}

export const forgotPassword = (req, res) => {
    employeeModel.find({"emailid":req.query.emailid}, (err, result) => {
        if (err) {
        res.send(err);
        }
        else {
        result.map(results => {
            const subject = 'Credentials Recived';
            const body = `User Name: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
            sendEmail(req.query.emailid, subject, body);
        })      
        res.send(result);
        }
    })
}
