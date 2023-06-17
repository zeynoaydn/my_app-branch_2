// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
// export default App;

import { useState } from 'react';
import './App.css';
import TaskCreate from './components/bolum6_formlar/TaskCreate';
import TaskList from './components/bolum6_formlar/TaskList';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask =(title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
