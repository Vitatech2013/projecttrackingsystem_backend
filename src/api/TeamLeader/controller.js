import employeeModel from '../Common/employeeModel';
import moduleModel from '../Common/moduleModel';
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

export const viewEmployees = (req, res) => {
    employeeModel.find({"role":"Developer"}, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
        res.send(err);
        }
    })
}

export const getEmps = (req, res) => {
    employeeModel.find({"superior":req.query.superior}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            res.send(err);
        }
    })
}

export const addTask = (req, res) => {
    taskModel.create(req.body, (err, result) => {
        if (err) {
        res.send(err);
        } else {
        res.send(result);
        }
    })
}

export const viewTask = (req, res) =>
    sendAllTasks(req, res);

const sendAllTasks = (req, res) => {
    taskModel.find({"manager":req.query.manager}, 'project module task developer date status', (err, emp) => {
        if (!err) {
        res.send(emp);
        } else {
        res.send(err);
        }
    })
}

export const tdownload = (req, res) => {
  taskModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
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

export const updateTask = (req, res) => {
    taskModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
        if (err) {
        res.send(err);
        } else {
            sendAllTasks(req, res);
        }
    })
}

export const deleteTask = (req, res) => {
    taskModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
        res.send(err);
        }
        else {
            sendAllTasks(req, res);
        }
    });
}

export const viewProjects = (req, res) => {
    moduleModel.find({"teamleader":req.query.teamleader}, 'project', (err, result) => {
        if (!err) {
        res.send(result);
        } else {
        res.send(err);
        }
    })
}

export const viewModules = (req, res) => {
    moduleModel.find({"teamleader":req.query.teamleader}, 'project module teamleader date status', (err, result) => {
        if (!err) {
        res.send(result);
        } else {
        res.send(err);
        }
    })
}

export const getModules = (req, res) => {
    moduleModel.find({"teamleader":req.query.teamleader, "project":req.query.project}, 'module', (err, result) => {
        if (!err) {
        res.send(result);
        } else {
        res.send(err);
        }
    })
}

export const getModule = (req, res) => {
    moduleModel.findById(req.params.id, (err,result)=> {
        if (err) {
        res.send(err);
        } else {
        res.send(result);
        }
    })
}

export const updateModuleStatus = (req, res) => {
    moduleModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (!err) {
        res.send(result);
        } else {
        res.send(err);
        }
    })
}

export const mdownload = (req, res) => {
  moduleModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
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
