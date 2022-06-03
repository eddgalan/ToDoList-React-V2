import { useState } from 'react';
import Task from './task';

export default function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setTask(value);
  }

  function handleSubmit(event) {
    event.preventDefault();   // Evita la carga de la página al enviar el formulario
    const newTask = {
      id: crypto.randomUUID(),
      task: task,
      completed: false,
    };
    setTasks([newTask, ... tasks]);
    setTask('');
    /* Other way to UPDATE state */
    // const temp = [... tasks];
    // temp.unshift(newTask);
    // setTasks(temp);
  }

  function handleUpdate(id, value) {
    const temp = [... tasks];
    const task_ = temp.find((item) => item.id === id);
    task_.task = value;
    setTasks(temp);
  }

  function handleDelete(id) {
    const temp = tasks.filter( (item) => item.id !== id );
    setTasks(temp);
  }

  return (
    <div className="todo-container">
      <form className="todo-create-form" onSubmit={ handleSubmit }>
        <input type="text" className="todo-input" value={ task } onChange={ handleChange } />
        <input type="submit" className="button-create" value="Create Task" />
      </form>
      <div className="todo-container">
        {
          tasks.map( (task) => (
            <Task key={ task.id } task={ task } onUpdate={ handleUpdate } onDelete={ handleDelete } />
          ))
        }
      </div>
    </div>
  );
}
