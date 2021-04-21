import React, {useState} from "react";

const NoteEdit = (props) =>{  
  const inicialStatateValues = {
    name:"",
    note:"",
  };

  const [values, setValues] = useState(inicialStatateValues);
  
  const Saveinputchange = (e) =>{
    const { name, value} = e.target;
    setValues({ ...values, [name]: value });
  };

  const savefarebase = (e) => {
    e.preventDefault();
    props.db.collection('notes').add(values);
    
  };

    return (
          <form className="note-body" onSubmit={savefarebase}>
            <div className= "note-group">
            <input type="text" className= "note-control" placeholder="NOTA"  name="name" onChange= {Saveinputchange} />
            </div>
            <div className= "note-text">
              <textarea name="note" cols="20" rows="10" onChange= {Saveinputchange} ></textarea>
            </div>
            <button className="btnsave">
              CREAR NOTA
            </button>
          </form>
    );
  }

export default NoteEdit;