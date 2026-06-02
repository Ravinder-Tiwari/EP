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
  const [employees, setEmployees] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedEmployee,
    setSelectedEmployee,
  ] = useState(null);

  const [isFormOpen, setIsFormOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const fetchEmployees =
    async () => {
      const res =
        await getEmployees();

      setEmployees(res.data);

      setLoading(false);
    };

  useEffect(() => {
    fetchEmployees();
  }, []);

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

      fetchEmployees();

      setSelectedEmployee(
        null
      );

      setIsFormOpen(false);
    };

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