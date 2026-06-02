const EmployeeCard = ({
  employee,
  onEdit,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="font-bold text-xl">
        {employee.name}
      </h2>

      <p>
        Role:
        {employee.role}
      </p>

      <p>
        Department:
        {employee.department}
      </p>

      <button
        onClick={() =>
          onEdit(employee)
        }
        className="bg-green-700 text-white px-4 py-2 mt-3 rounded"
      >
        Edit
      </button>
    </div>
  );
};

export default EmployeeCard;