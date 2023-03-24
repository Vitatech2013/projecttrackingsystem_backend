import employeeModel from '../Common/employeeModel';
import projectModel from '../Common/projectModel';
import moduleModel from '../Common/moduleModel';
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
  employeeModel.find( {$or:[{"role":"Team Leader"}, {"role":"Developer"}]}, (err, result)=> {
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

export const addModule = (req, res) => {
  moduleModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewModule = (req, res) =>
  sendAllModules(req, res);

const sendAllModules = (req, res) => {
  moduleModel.find({"manager":req.query.manager}, 'project module teamleader date status', (err, result) => {
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

export const getModule = (req, res) => {
  moduleModel.findById(req.params.id, (err,result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateModule = (req, res) => {
  moduleModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      sendAllModules(req, res);
    }
  })
}

export const deleteModule = (req, res) => {
  moduleModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      sendAllModules(req, res);
    }
  });
}

export const viewProjects = (req, res) => {
  projectModel.find({"manager":req.query.manager}, 'project technology manager duration date status', (err, projects) => {
    if (!err) {
      res.send(projects);
    } else {
      res.send(err);
    }
  })
}

export const getProject = (req, res) => {
  projectModel.findById(req.params.id, (err,result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateProjectStatus = (req, res) => {
  projectModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const pdownload = (req, res) => {
  projectModel.findById(req.params.id, (err, result) => {
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

