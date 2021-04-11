import React,{useState} from 'react';
import {isEmpty, size} from 'lodash';
import shortid from 'shortid';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([])
  //edit
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  
//start add task
  const addTask = (e) => {
    e.preventDefault()

    if (isEmpty(task)) {
      console.log("task empty")
      return
    }
    const newTask ={
      id: shortid.generate(),
      name: task
    }
    setTasks([...tasks, newTask])
    setTask("")
  };
  //end add task

  //start delete task
  const deleteTask = (id) => {
      const filterTasks = tasks.filter(task => task.id !== id)
      setTasks(filterTasks)
    }
  //end delete task

  //start edit task
   const editTask = (theTask) => {
    setTask(theTask.name)
    setEditMode(true)
    setId(theTask.id)
  }
  //end edit tasks

  //start save task
  const saveTask = (e) => {
    e.preventDefault()

    if (isEmpty(task)) {
      console.log("task empty")
      return
    }

    const editedTask = tasks.map(item => item.id === id ? {id, name: task} : item)
    setTasks(editedTask)
    setEditMode(false)
    setTask("")
    setId("")
  };
  //end save task

  return (
    <div className="container mt-5">
      <h1 className="text-center">HOMEWORKS</h1>
      <hr/> 
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">List of tasks</h4>
            {   
              size(tasks) === 0 ?
               (
                  <h5 className="text-center">no scheduled tasks</h5>
                ) : (
                      <ul className="list-group">
                        {
                          tasks.map((task) => (
                          <li className="list-group-item" key={task.id}>
                            <samp className="lead">{task.name}</samp>
                            <button 
                              className="btn badge-danger btn-sm float-right mx-2" 
                              type=""
                              onClick ={() => deleteTask(task.id)}
                              >
                                Delete
                            </button>
                            <button 
                              className="btn badge-warning btn-sm float-right" 
                              type=""
                              onClick ={() => editTask(task)}
                            >
                              Edit
                            </button>
                          </li>
                        ) )
                        }
                      </ul>
                    )
               }
          </div>
        <div className="col-4">
          <h4 className="text-center">
            {editMode ? "Edit task" : "Add Task"}
          </h4>
          <form onSubmit={editMode ? saveTask : addTask}>
            <input 
            type="text" 
            name="form-task"
            className ="form-control mb-2"
            placeholder="Ingrese la tarea.."
            onChange={(text) => setTask(text.target.value)}
            value={task}/>
            
            <button
             type="submit" 
             className={editMode ? "btn btn-success btn-block" : "btn btn-secondary btn-block"}
             >
               {editMode ? "Save" : "Add"}
              </button>
          </form>
        </div>
    </div>    
    </div>
  );
}

export default App;
