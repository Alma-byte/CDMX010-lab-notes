import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { db } from "../firebase";

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

  const saveOrEdit =  (e) => {
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
      .then(() =>{
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
      <div className="note-group">
        <input type="text" className="note-control" placeholder="NOTA" name="name" onChange={Saveinputchange} value={values.name} />
      </div>
      <div className="note-text">
        <textarea name="note" cols="50" rows="10" onChange={Saveinputchange} value={values.note}></textarea>
      </div>
      {status === 'success' && <p>La nota fue actualizada con exito!</p>}
      {status === 'error' && <p>Oops! Hubo un error al intentar ejecutar tu accion</p>}
      <button className="btnsave" type="submit">
        {id ? 'Update' : 'Save'}
        {/* falsy values => false, '', "", null, undefined, 0  */}
        {/* truthy values todos los que no sean falsy values  */}
      </button>
      <button onClick ={() => history.goBack() }>Notas</button>
    </form>
  );
}

export default NoteEdit;