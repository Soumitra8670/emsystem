
import React from 'react';
import Header from '../Other/Header';
import TaskListNumber from '../Other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ changeUser, data }) => {
  return (
    <div className="pt-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={changeUser} data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
