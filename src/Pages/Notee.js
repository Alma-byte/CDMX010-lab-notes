import React, {useEffect, useState} from "react";
import {db} from "../firebase"

const Note = () => {

  const [Notes, setNotes] = useState([]);

  const getnotes = async () => {
     db.collection('notes').onSnapshot ((querySnapshot)=> {
      const docs = [];
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(),id: doc.id});
       });
       setNotes(docs);
      });
  };

  useEffect(() => {
    getnotes();
    console.log(' getting data ...')
  },[]);

    return (
      <div>
        <div className="col-md-8">
          {Notes.map(nota =>(
            <div className="card">
              <div className="card-body">
                <h2>{nota.name} </h2>
                <p>{nota.note} </p>
        </div>
      </div>
          ))}
    </div>
  </div>
    );
  };

export default Note;