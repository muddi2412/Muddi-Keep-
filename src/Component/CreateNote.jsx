import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [expand,setExpand] = useState(false);
    const [Note,setNote] = useState({
        title:'',
        content:'',
    });

    const InputEvent = (event) =>{
        const {name,value} = event.target;
        setNote((prevData) =>{
            return{
                ...prevData,
                [name] : value,
            };
        });
        console.log(Note);
    }
    const addEvent = () => {
        props.passNote(Note);

        setNote({
            title: "",
            content: "",
        })
    };

    const expandIt = () =>{
        setExpand(true);
    };

    const unExpand = () =>{
        setExpand(false);
    };
    return (
        <>
        <div className="main_note" onDoubleClick={unExpand}>
            <form>
                {expand?
                <input type="text" name="title" value={Note.title} onChange={InputEvent} placeholder='Title'/> : null}
                <textarea name="content" id="" cols="" rows="" value={Note.content} onChange={InputEvent} placeholder="Write A note..." onClick={expandIt}></textarea>
                {expand?
                <Button onClick={addEvent}>
                    <AddIcon className="plus_sign"/>
                </Button>: null }
            </form>
        </div>
        </>
    )
};

export default CreateNote;