import React from "react";
import NoteEdit from "./NoteEdit"
import {db} from "../firebase"

const Note = () => {

    return (
      <div>
        <NoteEdit db={db} />
        <h1>Nota</h1>
      </div>
    );
};

export default Note;