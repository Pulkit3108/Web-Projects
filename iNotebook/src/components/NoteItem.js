import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa fa-trash mx-3"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Note deleted", "success");
              }}
            ></i>
            <i
              className="fas fa-edit mx-3"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
          <p className="card-text" style={{background: "aliceblue"}}>{note.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
