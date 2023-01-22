import React from 'react';
import {useState} from "react";

const TodoItem = ({el, deleteTask, updateTodo, updateStatus}) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(el.title)


    const openInput = () => {
        setEdit(true)

    }

    const closeInput = (id, title) => {
        setEdit(false)
        updateTodo(id, title)
    }

    const changeStatus = (id) => {
        updateStatus(id)
    }



    const handleChange = (e) => setNewTitle(e.target.value)
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">

            {
                edit ?  <input type="text"
                               onChange={handleChange}
                               value={newTitle}
                               className="form-control w-50"/> :
                    <span className={el.isCompleted ? "text-decoration-line-through" : ""}>{el.title}</span>
            }
            <div className="d-flex">
                <input type="checkbox" onChange={() => changeStatus(el.id)}/>
                <button
                    onClick={() => edit ? closeInput(el.id, newTitle) : openInput()}
                    className={`btn ${edit ? "btn-success" : "btn-warning"} mx-2`}>
                    {
                        edit ? <>&#x2714;</> : <>&#9997;</>
                    }
                </button>

                <button
                    onClick={() => deleteTask(el.id)}
                    className="btn btn-danger">&times;</button>
            </div>
        </li>
    );
};

export default TodoItem;