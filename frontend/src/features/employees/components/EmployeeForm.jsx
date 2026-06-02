import { useState } from "react";

const EmployeeForm = ({
  employee,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] =
    useState(
      employee || {
        name: "",
        role: "",
        department: "",
      }
    );

  const [errors, setErrors] =
    useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name)
      newErrors.name =
        "Name is required";

    if (!formData.role)
      newErrors.role =
        "Role is required";

    if (!formData.department)
      newErrors.department =
        "Department is required";

    if (
      Object.keys(newErrors)
        .length > 0
    ) {
      setErrors(newErrors);
      return;
    }

    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 border p-4 rounded"
    >
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        className="border p-2 w-full"
      />

      {errors.name && (
        <p>{errors.name}</p>
      )}

      <input
        placeholder="Role"
        value={formData.role}
        onChange={(e) =>
          setFormData({
            ...formData,
            role: e.target.value,
          })
        }
        className="border p-2 w-full"
      />

      <input
        placeholder="Department"
        value={formData.department}
        onChange={(e) =>
          setFormData({
            ...formData,
            department:
              e.target.value,
          })
        }
        className="border p-2 w-full"
      />

      <div className="flex gap-3">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;