
// import React, { useState } from 'react';

// const CreateTask = () => {
//   const [taskTitle, setTaskTitle] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskDate, setTaskDate] = useState('');
//   const [asignTo, setAsignTo] = useState('');
//   const [category, setCategory] = useState('');

//   const resetForm = () => {
//     setTaskTitle('');
//     setTaskDescription('');
//     setTaskDate('');
//     setAsignTo('');
//     setCategory('');
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const newTask = {
//       taskTitle,
//       taskDescription,
//       taskDate,
//       category,
//       active: false,
//       newTask: true,
//       failed: false,
//       completed: false,
//     };

//     const data = JSON.parse(localStorage.getItem('employees')) || [];

    

//     if (data.length === 0) {
//       console.error('No employees found in localStorage');
//       return;
//     }

//     // Clone and update the employee data
//     const updatedData = data.map((employee) => {
//       if (employee.firstName === asignTo) {
//         return {
//           ...employee,
//           tasks: [...employee.tasks, newTask],
//         };
//       }
//       return employee;
//     });

//     localStorage.setItem('employees', JSON.stringify(updatedData));
//     resetForm();
//   };

//   return (
//     <div>
//       <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
//         <form onSubmit={submitHandler} className="flex flex-wrap -mx-4">
//           {/* Left Column */}
//           <div className="w-full md:w-1/2 px-4 mb-6">
//             <div className="mb-4">
//               <label htmlFor="taskTitle" className="block text-gray-700 font-medium mb-1">
//                 Task Title
//               </label>
//               <input
//                 value={taskTitle}
//                 onChange={(e) => setTaskTitle(e.target.value)}
//                 type="text"
//                 id="taskTitle"
//                 placeholder="Make a design"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
//                 Date
//               </label>
//               <input
//                 value={taskDate}
//                 onChange={(e) => setTaskDate(e.target.value)}
//                 type="date"
//                 id="date"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="assignTo" className="block text-gray-700 font-medium mb-1">
//                 Assign to
//               </label>
//               <input
//                 value={asignTo}
//                 onChange={(e) => setAsignTo(e.target.value)}
//                 type="text"
//                 id="assignTo"
//                 placeholder="Employee name"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="category" className="block text-gray-700 font-medium mb-1">
//                 Category
//               </label>
//               <input
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 type="text"
//                 id="category"
//                 placeholder="e.g., design, dev"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="w-full md:w-1/2 px-4 mb-6">
//             <div>
//               <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
//                 Description
//               </label>
//               <textarea
//                 value={taskDescription}
//                 onChange={(e) => setTaskDescription(e.target.value)}
//                 id="description"
//                 cols={30}
//                 rows={10}
//                 placeholder="Enter task description"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               ></textarea>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="w-full px-4">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
//             >
//               Create Task
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateTask;



import React, { useState } from 'react';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const resetForm = () => {
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = JSON.parse(localStorage.getItem('employees')) || [];

    

    if (data.length === 0) {
      console.error('No employees found in localStorage');
      return;
    }

    // Clone and update the employee data
    const updatedData = data.map((employee) => {
      if (employee.firstName === asignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
        };
      }
      return employee;
    });

     localStorage.setItem('employees', JSON.stringify(updatedData));
     resetForm();

   
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
        <form onSubmit={submitHandler} className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4 mb-6">
            <div className="mb-4">
              <label htmlFor="taskTitle" className="block text-gray-700 font-medium mb-1">
                Task Title
              </label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                id="taskTitle"
                placeholder="Make a design"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
                Date
              </label>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                id="date"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="assignTo" className="block text-gray-700 font-medium mb-1">
                Assign to
              </label>
              <input
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
                type="text"
                id="assignTo"
                placeholder="Employee name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                id="category"
                placeholder="e.g., design, dev"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 px-4 mb-6">
            <div>
              <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                id="description"
                cols={30}
                rows={10}
                placeholder="Enter task description"
                className="w-full border border-gray-300 rounded-md p-2"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full px-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
