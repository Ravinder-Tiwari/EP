import Employee from "../model/employeeModel.js";

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json({
            message:"Employees fetched successfully",
            data:employees,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);

        res.status(201).json({
            message:"Employee created successfully",
            data:employee,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found",
            });
        }

        res.status(200).json({
            message: "Employee updated successfully",
            data:employee,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};