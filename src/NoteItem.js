import React from "react";
import "./styles.css";

const NoteItem = ({ name, completed, onClick }) => {
  return (
    <li className="note-item" onClick={() => onClick()}>
      <b>{name}</b> - {completed ? "done" : "undone"}
    </li>
  );
};

export default NoteItem;
