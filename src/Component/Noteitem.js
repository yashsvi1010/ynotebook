import React from "react";
import { Link } from "react-router-dom";

const Noteitem = (props) => {
  const { note } = props;

  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text text-secondary">{note.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
