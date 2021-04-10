import React from 'react';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">HOMEWORKS</h1>
      <hr/> 
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">List of tasks</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <samp className="lead">Tasks name</samp>
                <button className="btn badge-danger btn-sm float-right mx-2" type="">Delete</button>
                <button className="btn badge-warning btn-sm float-right" type="">Edit</button>
              </li>
            </ul> 
          </div>
        <div className="col-4">
          <h4 className="text-center">From</h4>
          <form>
            <input 
            type="text" 
            name="form-task"
            className ="form-control mb-2"
            value=""
            placeholder="Ingrese la tarea.."/>
            <button
             type="submit" 
             className="btn btn-dark btn-block"
             >Agregar</button>
          </form>
        </div>
    </div>    
    </div>
  );
}

export default App;
