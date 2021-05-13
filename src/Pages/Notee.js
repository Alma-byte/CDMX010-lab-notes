import React, { useEffect, useState } from "react";
import { db } from "../firebase"
import { useHistory } from "react-router";
import './Styles/Notee.css';
import creative from '../Assets/creative.jpg';



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
       <header>
        <img src={creative} width="100%" height="100%" alt="el pinche logo"></img>
      </header>
      <div className="Notas">
        {Notes.map(nota => (
          <div className="CardBody" key={nota.id}>
               <div className="Card">
              <h2>{nota.name} <i className="material-icons"
                onClick={() => noteDelete(nota.id)}>delete</i>
                <i className="material-icons" onClick={() => {
                  history.push(`/NoteEdit/${nota.id}`)
                }}>created</i></h2>
                
              <p>{nota.note}</p>
            </div>
            </div>
        ))}
       </div>
      <footer>
      <div className="Crear">
        <button className="Btncrear" type="submit" onClick={historyWindow}>CREAR</button>
        </div>
      </footer>
    </div>
  );
};

export default Note;