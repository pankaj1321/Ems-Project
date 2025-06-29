const Employee = require('../models/Employee');

//  create employee

const CreateEmployee = async (req , res )=>{
    try {
        const {name,email,role,salary} = req.body;
        const newEmployee = new Employee({
            name,
            email,
            role,
            salary
        })
        await newEmployee.save();
        res.status(201).json({
            success: true,
            message: 'Employee created successfully',
            employee: newEmployee
        
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create employee',
            error: error.message
        })
        
    }
}
//  read all employees

const GetAllEmployees = async (req,res)=>{
    try {
        const GetEmployee = await Employee.find();
        res.status(200).json({
            success: true,
            message: 'Employees fetched successfully',
            employees: GetEmployee
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch employees',
            error: error.message
        })
    }
}

//  update employee

const updateEmployee = async (req , res)=>{
    try {
        const {id} = req.params;
        const {name,email,role,salary} = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, {
            name,
            email,
            role,
            salary
        },
        {new: true}
    );
    res.status(200).json({
        success: true,
        message: 'Employee updated successfully',
        employee: updatedEmployee
    });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update employee',
            error: error.message
        });
    }
}
//  delete employee

const DeleteEmployee = async (req, res)=>{
    try {
        const {id} = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Employee deleted successfully',
            employee: deletedEmployee
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete employee',
            error: error.message
        })
        
    }
}
module.exports = {CreateEmployee,GetAllEmployees,updateEmployee,DeleteEmployee};
