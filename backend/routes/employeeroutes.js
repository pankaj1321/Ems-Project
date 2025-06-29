const express = require('express');
const router = express.Router();
const { CreateEmployee,GetAllEmployees,updateEmployee,DeleteEmployee} = require('../controllers/employeecontroller');

router.post('/',CreateEmployee);  // create employee
router.get('/',GetAllEmployees);  // read all employees
router.put('/:id',updateEmployee);  // update employee
router.delete('/:id',DeleteEmployee);  // delete employee

module.exports = router;