import adminModel from './adminModel';
import employeeModel from '../Common/employeeModel';
import projectModel from '../Common/projectModel';
import {sendEmail} from '../Common/email';

export const login = (req, res) =>{
  adminModel.findOne( {"username":req.query.username, "password":req.query.password}, (err,result)=> {
    res.send(result);
  })
}

export const count = (req, res) => {
  employeeModel.count({}, (err,result)=> {
    res.send([result]);
  })
}

export const getSuperiors = (req, res) => {
  employeeModel.find({"role":req.query.role}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
    }
  })
}

export const addEmployee = (req, res) => {
  employeeModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are successfully registered in Project Tracking System<br><br>UserName: ${req.body.username}<br>Password: ${req.body.password}<br>Designation: ${req.body.role}<br>Thank You.`;
      sendEmail(req.body.emailid, subject, body);
      res.send(result);
    }
  })
}

export const viewEmployees = (req, res) =>
  sendAllEmployees(res);

const sendAllEmployees = (res) => {
  employeeModel.find((err, emp) => {
    if (!err) {
      res.send(emp);
    } else {
      res.send(err);
    }
  })
}

export const getEmployee = (req, res) => {
  employeeModel.findById(req.params.id, (err,result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateEmployee = (req, res) => {
  employeeModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      sendAllEmployees(res);
    }
  })
}

export const deleteEmployee = (req, res) => {
  employeeModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      sendAllEmployees(res);
    }
  });
}

export const addProject = (req, res) => {
  projectModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewProjects = (req, res) => {
  projectModel.find({},'project technology manager duration date status', (err, projects) => {
    if (!err) {
      res.send(projects);
    } else {
      res.send(err);
    }
  })
}

export const download = (req, res) => {
  projectModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updatePassword = (req, res) =>{
  adminModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  adminModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
        const subject = 'Credentials Recived';
        const body = `UserName: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.emailid, subject, body);
      })      
      res.send(result);
    }
  })
}
