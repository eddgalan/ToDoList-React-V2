import { useState } from 'react';

export default function Task({ task, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(task.task);

    function handleSubmit(event) {
      event.preventDefault();
    }

    function handleChange(event) {
      const value = event.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTask(event) {
      onUpdate(task.id, newValue);
      setIsEdit(false);
    }

    return (
      <form className="update-form" onSubmit={ handleSubmit }>
        <input type="text" className="task-input" onChange={ handleChange } value={ newValue } />
        <button className="button" onClick={ handleClickUpdateTask } > Update </button>
      </form>
    );
  }

  function TaskElement() {
    return(
      <div className="taskInfo">
        { task.task }
        <button onClick={ () => setIsEdit(true) } > Edit </button>
        <button onClick={ () => onDelete(task.id) }> Delete </button>
      </div>
    );
  }

  return (
    <div className='task'>
      { isEdit ? <FormEdit /> : <TaskElement /> }
    </div>
  );
}
