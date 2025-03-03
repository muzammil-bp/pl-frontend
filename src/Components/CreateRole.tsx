import { useState } from "react";

type PermissionType = "Read" | "Write" | "Create";

interface Permissions {
  [category: string]: {
    Read: boolean;
    Write: boolean;
    Create: boolean;
  };
}

const permissions = [
  "User Management",
  "Content Management",
  "Disputes Management",
  "Database Management",
  "Financial Management",
  "Reporting",
  "API Control",
  "Repository Management",
  "Payroll",
];

export default function CreateRole() {
  const [selectedPermissions, setSelectedPermissions] = useState<Permissions>(
    {}
  );
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (category: string, type: PermissionType) => {
    setSelectedPermissions((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [type]: !prev[category]?.[type],
      },
    }));
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedPermissions = permissions.reduce(
      (acc: Permissions, category) => {
        acc[category] = {
          Read: !selectAll,
          Write: !selectAll,
          Create: !selectAll,
        };
        return acc;
      },
      {}
    );
    setSelectedPermissions(updatedPermissions);
  };

  const handleAdminAccess = () => {
    setIsAdmin(!isAdmin);
    setSelectAll(!isAdmin);
    const updatedPermissions = permissions.reduce(
      (acc: Permissions, category) => {
        acc[category] = { Read: !isAdmin, Write: !isAdmin, Create: !isAdmin };
        return acc;
      },
      {}
    );
    setSelectedPermissions(updatedPermissions);
  };

  return (
    <div className="w-auto max-w-4xl mx-auto p-6 bg-white  rounded-lg">
      <label className="block text-black  font-normal mb-2">Role Name</label>
      <input
        type="text"
        placeholder="Role Name"
        className="w-full px-3 py-2 border border-gray-400 rounded-lg h-12 focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4 placeholder:text-sm "
      />
      <div className="border p-7 border-gray-300 rounded-lg mt-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg tracking-tighter font-semibold">
            Role Permissions
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-2 ">
          <div className="flex items-center justify-between border-b border-gray-300 py-2">
            <label className="mr-4 flex items-center">
              Administrator Access
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="mr-2 w-5 h-5 cursor-pointer appearance-none border border-gray-800  rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-gray-800 checked:bg-gray-400"
              />
              Select All
            </label>
          </div>
          {permissions.map((category) => (
            <div
              key={category}
              className="flex justify-between items-center border-b border-gray-300 last:border-b-0 py-2"
            >
              <span>{category}</span>
              <div className="flex gap-18">
                {(["Read", "Write", "Create"] as PermissionType[]).map(
                  (type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedPermissions[category]?.[type] || false}
                        onChange={() => handleCheckboxChange(category, type)}
                        className="mr-2 w-5 h-5 cursor-pointer appearance-none border border-gray-800  rounded-md mr-2 hover:border-gray-500 hover:bg-gray-100 checked:bg-no-repeat checked:bg-center checked:border-gray-800 checked:bg-gray-400"
                      />
                      {type}
                    </label>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
