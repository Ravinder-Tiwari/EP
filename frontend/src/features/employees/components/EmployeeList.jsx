import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({
  employees,
  onEdit,
}) => {
  if (!employees.length) {
    return (
      <p>No employees found</p>
    );
  }

  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-4"
    >
      {employees.map(
        (employee) => (
          <EmployeeCard
            key={employee._id}
            employee={employee}
            onEdit={onEdit}
          />
        )
      )}
    </div>
  );
};

export default EmployeeList;