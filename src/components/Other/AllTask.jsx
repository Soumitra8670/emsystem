import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';


const AllTask = (data) => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded h-80 bg--600">
      {/* Table Headers */}
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 bg-black-400">Employee Name</h2>
        <h2 className="text-lg font-medium w-1/5 bg-black-400">New Task</h2>
        <h3 className="text-lg font-medium w-1/5 bg-black-400">Active Task</h3>
        <h5 className="text-lg font-medium w-1/5 bg-black-400">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 bg-black-400">Failed</h5>
      </div>

      {/* Employee Data */}
      <div className="h-[80%] overflow-auto">
        {authData.employees.map((elem, index) => (
          <div
            key={index}
            className="border-2 border-emerald-500 py-2 px-4 mb-2 flex justify-between rounded"
          >
            <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
            <h2 className="text-lg font-medium w-1/5 text-blue-600 ">
              {elem.taskNumbers.newTask}
            </h2>
            <h3 className="text-lg font-medium w-1/5 text-yellow-400 ">
              {elem.taskNumbers.active}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-green-600 ">
              {elem.taskNumbers.completed}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600 ">
              {elem.taskNumbers.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;

