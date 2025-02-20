import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body ">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title mb-4">{note.title}</h5>
            <div className="noteItem--btns d-flex align-items-center justify-content-between">
              <i
                className="far fa-trash-alt mx-2 mb-4 "
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted successfully", "success");
                }}
              ></i>
              <i
                className="far fa-edit mx-2 mb-4 "
                onClick={() => {
                  updateNote(note);
                  props.showAlert("Updated successfully", "success");
                }}
              ></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
