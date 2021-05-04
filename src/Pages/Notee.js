import React, { useEffect, useState } from "react";
import { db } from "../firebase"
import { useHistory } from "react-router";
import NoteEdit from "./NoteEdit";


const Note = () => {

  let history = useHistory();

  function historyWindow() {
    history.push("/NoteEdit");
  }

  const [Notes, setNotes] = useState([]);
  const [editId, setEditId] = useState('');

  const noteDelete = async (id) => {
    if (window.confirm("¿deveda quieres borrar la notiux?")) {
      await db.collection('notes').doc(id).delete();
      console.log('task deleted')
    }
  };

  const getnotes = async () => {
    db.collection('notes').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setNotes(docs);
    });
  };

  useEffect(() => {
    getnotes();
    console.log(' getting data ...')
  }, []);

  const addNotes = async (noteObject) => {
    console.log({ editId, noteObject })
    if (editId === '') {
      await db.collection('notes').doc().set(noteObject);
    }
    else {
      await db.collection(`notes`).doc(editId).update(noteObject);
    }
    setEditId('');
  };

  return (
    <div>
      <NoteEdit {...{ addNotes, editId, Notes, db }} />
      <div className="col-md-8">
        {Notes.map(nota => (
          <div className="card" key={nota.id}>
            <div className="card-body">
              <h2>{nota.name} <i className="material-icons"
                onClick={() => noteDelete(nota.id)}>delete</i>
                <i className="material-icons" onClick={() => setEditId(nota.id)}>created</i></h2>
              <p>{nota.note}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="NOTAS">
        <button className="btncrear" type="submit" onClick={historyWindow}>+</button>
      </div>
    </div>
  );
};

export default Note;



