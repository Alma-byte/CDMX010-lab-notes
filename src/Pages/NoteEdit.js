import React, {useState} from "react";

const NoteEdit = (props) =>{  
  console.log(props)
  const inicialStatateValues = {
    id:"",
    note:"",
  };

  const [values, setValues] = useState(inicialStatateValues);
  
  const Saveinputchange = (e) =>{
    const { id, value} = e.target;
    setValues({ ...values, [id]: value });
  };

  const savefarebase = (e) => {
    e.preventDefault();
    console.log (values);
    props.db.collection('notes').add(values)
  };

    return (
          <form className="note-body" onSubmit={savefarebase}>
            <div className= "note-group">
            <input type="text" className= "note-control" placeholder="NOTA" id="boxnote" onChange= {Saveinputchange} />
            </div>
            <div className= "note-text">
              <textarea id="description" cols="20" rows="10" onChange= {Saveinputchange}></textarea>
            </div>
            <button className="btnsave">
              CREAR NOTA
            </button>
          </form>
    );
  }

export default NoteEdit;