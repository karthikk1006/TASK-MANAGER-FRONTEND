import axios from 'axios';
import React, { useState } from 'react';

const EditForm = ({ newName, isCompleted, onNameChange, onCompletedChange, onConfirmChange }) => (
  <div>
    <label htmlFor="newName" style={{ color: 'green' }}>New Name:</label>
    <input
      type="text"
      id="newName"
      value={newName}
      onChange={(e) => onNameChange(e.target.value)}
    />
    <div>
      <label style={{ color: 'green' }}>
        Completed:
        <input
          type="radio"
          value="yes"
          checked={isCompleted}
          onChange={() => onCompletedChange(true)}
        />
        Yes
      </label>
      <label style={{ color: 'green' }}>
        <input
          type="radio"
          value="no"
          checked={!isCompleted}
          onChange={() => onCompletedChange(false)}
        />
        No
      </label>
    </div>
    <button style={{ backgroundColor: 'green', color: 'white' }} onClick={onConfirmChange}>
      Confirm Change
    </button>
  </div>
);
const ChangeBox = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  let tid=new String(window.location.href)
  tid=tid.slice(32)
  let link="http://localhost:3000/api/v1/tasks/"+tid

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleConfirmChange = () => {
    // Implement your logic to handle the changes
    // For example, you can send an API request to update the task
    if(newName){
    axios.patch(link,{
        name:newName,
        completed:isCompleted
    }).then((res)=>{console.log(res.data)}).catch((err)=>console.log(err))
    }
    else{
        axios.patch(link,{
            completed:isCompleted
        }).then((res)=>{console.log(res.data)}).catch((err)=>console.log(err))
    }
    console.log("Updated");
    // After handling the changes, you might want to reset the state
    setIsEditing(false);
    setNewName('');
    setIsCompleted(false);
  };

  const handleBackClick = () => {
    // Navigate to the previous page
    window.history.back();
  };

  const handleDeleteClick = () => {
  
    // logic to delete the task
    console.log('Deleting task...');
    axios.delete(link).then((res)=>{console.log(res.data)}).catch((err)=>console.log(err))
    window.history.back();
  };
  return (
    <div style={{ color:'green', padding: '20px', textAlign: 'center' }}>
      {isEditing && <h1>Your Task</h1>}
      {isEditing ? (
        <EditForm
          newName={newName}
          isCompleted={isCompleted}
          onNameChange={setNewName}
          onCompletedChange={setIsCompleted}
          onConfirmChange={handleConfirmChange}
        />
      ) : (
        <div>
          <button style={{ margin: '0 10px', backgroundColor: 'green', color: 'white' }} onClick={handleDeleteClick}>
            Delete Task
          </button>
          <button style={{ margin: '0 10px', backgroundColor: 'green', color: 'white' }} onClick={handleEditClick}>
            Edit Task
          </button>
          <button style={{ marginTop: '10px', backgroundColor: 'green', color: 'white' }} onClick={handleBackClick}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ChangeBox;
