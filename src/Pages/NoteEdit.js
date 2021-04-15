import React, {useState} from "react";

const NoteEdit = () =>{  

  const inicialStatateValues = {
    nota:''
  };

  const [values, setValues] = useState(inicialStatateValues);
  
  const Saveinputchange = e =>{
    const {name, value} = e.target;
    setValues({...values,[name]:value})
  }

  const savefarebase = e => {
    e.preventDefault();
    console.log (values);
  }
    return (
          <form className="note-body" onSubmit={savefarebase}>
            <div className= "note-group">
            <input type="text" className= "note-control" placeholder="NOTA" name="boxnote" onChange= {Saveinputchange} />
            </div>
            <button className="btnsave">
              CREAR NOTA
            </button>
          </form>
    );
  }

export default NoteEdit;