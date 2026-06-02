import express from "express";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

/**
 * @route GET /
 * @description Fetch all employees
 * @access Public
 */
router.get("/", getEmployees);

/**
 * @route POST /
 * @description Create a new employee
 * @access Public
 */
router.post("/", createEmployee);

/**
 * @route PUT /:id
 * @description Update an existing employee
 * @access Public
 */
router.put("/:id", updateEmployee);

export default router;