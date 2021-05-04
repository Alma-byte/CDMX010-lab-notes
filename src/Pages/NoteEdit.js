import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { db } from "../firebase";

const NoteEdit = (props) => {

  const history = useHistory();

  const inicialStatateValues = {
    name: "",
    note: "",
  };

  const [values, setValues] = useState(inicialStatateValues);

  const Saveinputchange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  };

  const savefarebase = async (e) => {
    e.preventDefault();
    //props.db.collection('notes').add(values);
    await props.addNotes(values);
    setValues({ ...inicialStatateValues })
    // history.push("/Note")
  };

  const getNoteById = async (id) => {
    const doc = await db.collection('notes').doc(id).get();
    setValues({ ...doc.data() })
  }

  useEffect(() => {
    if (props.editId === '') {
      setValues({ ...inicialStatateValues })
    } else {
      getNoteById(props.editId);
    }

  }, [props.editId]);

  return (
    <form className="note-body" onSubmit={savefarebase}>
      <div className="note-group">
        <input type="text" className="note-control" placeholder="NOTA" name="name" onChange={Saveinputchange} value={values.name} />
      </div>
      <div className="note-text">
        <textarea name="note" cols="20" rows="10" onChange={Saveinputchange} value={values.note}></textarea>
      </div>
      <button className="btnsave" type="submit">
        {props.editId === '' ? 'Save' : 'Update'}
      </button>
    </form>
  );
}

export default NoteEdit;

