import React from "react";
import "./style.css";
import { addNewTask } from "../Task";

function CreateNewTask({ addNewTask }) {
  return (
    <div className="newTask-container">
      <input type="text" />
    </div>
  );
}

export default CreateNewTask;
