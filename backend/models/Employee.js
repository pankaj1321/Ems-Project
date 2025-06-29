const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    role: String,
    salary: Number

})
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;