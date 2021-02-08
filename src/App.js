import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import CreateNote from './Component/CreateNote';
import Note from './Component/Note';
import { useState } from 'react';
function App() {
  const[AddItem,setAddItem] = useState([]);

  const addNote = (Note) =>{
    setAddItem((prevData)=>{
      return [...prevData,Note];
    });
    console.log(Note)
  };

  const onDelete = (id) =>{
    setAddItem((oldData) => 
    oldData.filter((currdata,index) =>{
      return index !==id;
    })
    )
  }


  return (
    <div className="App">
      <Header/>
      <CreateNote 
        passNote={addNote}
      />

      {
      AddItem.map((val,index)=>{
        return <Note 
        key={index} 
        id={index} 
        title={val.title} 
        content={val.content}
        deleteItem={onDelete}
        />
      })
      }

      <Footer/>
      
    </div>
  );
}

export default App;
