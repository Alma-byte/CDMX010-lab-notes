import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { db } from "../firebase";
import './Styles/NoteEdit.css';
import creative from '../Assets/creative.jpg';


const inicialStatateValues = {
  name: "",
  note: "",
};

const NoteEdit = (props) => {
  const [values, setValues] = useState(inicialStatateValues);
  let { id } = useParams();
  const history = useHistory();
  const [status, setStatus] = useState('pending')

  const Saveinputchange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  };

  const saveOrEdit = (e) => {
    e.preventDefault();
    if (id) {
      props.db.collection('notes').doc(id).update(values)
        .then(() => {
          setStatus('success')
        })
        .catch(() => {
          setStatus('error')
        })
    } else {
      props.db.collection('notes').add(values)
        .then(() => {
          history.push("/Note")
        })
        .catch(() => {
          setStatus('error')
        })
    }
  };

  const getNoteById = async (id) => {
    const doc = await db.collection('notes').doc(id).get();
    setValues({ ...doc.data() })
  }

  useEffect(() => {
    if (id) {
      getNoteById(id);
    }
  }, [id]);

  return (
    <form className="note-body" onSubmit={saveOrEdit}>
      <header>
        <img src={creative} width="100%" height="100%" alt="el pinche logo"></img>
      </header>
      <div className="note-group">
        <input type="text" className="note-control" placeholder="CREA" name="name" onChange={Saveinputchange} value={values.name} />
        <textarea name="note" cols="44" rows="25" onChange={Saveinputchange} value={values.note}></textarea>
      </div>
      {status === 'success' && <p>La nota fue actualizada con exito!</p>}
      {status === 'error' && <p>Oops! Hubo un error al intentar ejecutar tu accion</p>}
      <button className="btnsave" type="submit">
        {id ? 'UPDATE' : 'SAVE'}
        {/* falsy values => false, '', "", null, undefined, 0  */}
        {/* truthy values todos los que no sean falsy values  */}
      </button>
      <footer>
        <button className="BtnNotas" onClick={() => history.goBack()}>BACK</button>
      </footer>
    </form>
  );
}

export default NoteEdit;