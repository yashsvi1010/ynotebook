import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "669fdc874dbffbab259e37c5",
      user: "669ca8da57909a698b706731",
      title: "My Route",
      description: "Please use slip route",
      tag: "work",
      date: "2024-07-23T16:38:31.046Z",
      __v: 0,
    },
    {
      _id: "669fdca04dbffbab259e37c7",
      user: "669ca8da57909a698b706731",
      title: "My New Route",
      description: "Please use highway",
      tag: "work",
      date: "2024-07-23T16:38:56.752Z",
      __v: 0,
    },
    {
      _id: "669fdca04dbffbab259e37c7",
      user: "669ca8da57909a698b706731",
      title: "My New Route",
      description: "Please use highway",
      tag: "work",
      date: "2024-07-23T16:38:56.752Z",
      __v: 0,
    },
    {
      _id: "669fdca04dbffbab259e37c7",
      user: "669ca8da57909a698b706731",
      title: "My New Route",
      description: "Please use highway",
      tag: "work",
      date: "2024-07-23T16:38:56.752Z",
      __v: 0,
    },
    {
      _id: "669fdca04dbffbab259e37c7",
      user: "669ca8da57909a698b706731",
      title: "My New Route",
      description: "Please use highway",
      tag: "work",
      date: "2024-07-23T16:38:56.752Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
// console.log(props.children);
export default NoteState;
