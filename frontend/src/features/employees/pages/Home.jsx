import {
  useEffect,
  useState,
} from "react";

import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";

import {
  getEmployees,
  addEmployee,
  updateEmployee,
} from "../services/Employee.Service";

const Home = () => {
  // Stores all employees received from the API
  const [employees, setEmployees] =
    useState([]);

  // Search input value
  const [searchTerm, setSearchTerm] =
    useState("");

  // Employee currently being edited
  const [
    selectedEmployee,
    setSelectedEmployee,
  ] = useState(null);

  // Controls form visibility
  const [isFormOpen, setIsFormOpen] =
    useState(false);

  // Page loader while fetching data
  const [loading, setLoading] =
    useState(true);

  // Fetch employee list from backend
  const fetchEmployees =
    async () => {
      const res =
        await getEmployees();

      console.log(res);

      setEmployees(res.data);
      setLoading(false);
    };

  // Load employees when page mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handles both add and update actions
  const handleSave =
    async (data) => {
      if (
        selectedEmployee
      ) {
        await updateEmployee(
          selectedEmployee._id,
          data
        );
      } else {
        await addEmployee(data);
      }

      // Refresh list after successful save
      fetchEmployees();

      // Reset form state
      setSelectedEmployee(
        null
      );

      setIsFormOpen(false);
    };

  // Filter employees by name or department
  const filteredEmployees =
    employees.filter(
      (employee) =>
        employee.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        employee.department
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  if (loading)
    return (
      <p>
        Loading employees...
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-4xl font-bold mb-5">
        Employee Directory
      </h1>

      <div className="flex flex-col md:flex-row gap-3 mb-5">
        <SearchBar
          searchTerm={
            searchTerm
          }
          setSearchTerm={
            setSearchTerm
          }
        />

        <button
          onClick={() => {
            // Open empty form for new employee
            setSelectedEmployee(
              null
            );

            setIsFormOpen(
              true
            );
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Add Employee
        </button>
      </div>

      {isFormOpen && (
        <EmployeeForm
          employee={
            selectedEmployee
          }
          onSave={handleSave}
          onCancel={() =>
            setIsFormOpen(
              false
            )
          }
        />
      )}

      <EmployeeList
        employees={
          filteredEmployees
        }
        onEdit={(employee) => {
          // Open form with existing employee data
          setSelectedEmployee(
            employee
          );

          setIsFormOpen(
            true
          );
        }}
      />
    </div>
  );
};

export default Home;