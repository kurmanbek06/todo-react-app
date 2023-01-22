import React, {useEffect, useState} from 'react';
import TodoItem from "./TodoItem";
import CompletedTodo from "./CompletedTodo";
import axios from "axios";
import Loader from "../loader";




const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(true)



    const handleChange = (e) => {
        setName(e.target.value)
    }



    /** GET **/
    const getAllTasks = async () => {
        // try {
        //     const response = await fetch(`https://63a9afd4594f75dc1dbd3f52.mockapi.io/tasks`)
        //     const result = await response.json()
        //     setTasks(result)
        // } catch (e){
        //     console.log(e)
        // }

        try {
            const response = await axios(`https://63a9afd4594f75dc1dbd3f52.mockapi.io/tasks`)
            const {data} = response
            setTimeout(() => {
                setTasks(data)
                setLoading(false)
            }, 1500)
        } catch (e){
            console.log(e)
        }
    }

    /** delete **/
    const deleteTask = async (id) => {
        // const items = [...tasks]
        // items.splice(idx, 1)
        // setTasks(items)
        // setTasks(tasks.filter((el, i) => {
        //     return idx !== i
        // }))
        setTasks(tasks.filter((el, i) => {
            return el.id !== id
        }))

        // try {
        //     await fetch(`https://63a9afd4594f75dc1dbd3f52.mockapi.io/tasks/` + id, {
        //         method: "DELETE"
        //     })
        //     getAllTasks()
        // } catch (e){
        //
        // }

        try {
            await axios.delete(`https://63a9afd4594f75dc1dbd3f52.mockapi.io/tasks/` + id)
            getAllTasks()
        } catch (e){
            console.log(e)
        }
    }
    /** post **/
    const addTasks = async () => {
        // const newTask = {
        //     // id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        //     id: uniqid(),
        //     title: name,
        //     isCompleted: false
        // }
        //
        // setTasks([...tasks, newTask])

        const newTask = {
            title: name
        }

        try {
            //  const response = await fetch(`https://63a9afd4594f75dc1dbd3f52.mockapi.io/tasks`, {
            //      method: "POST",
            //      headers: {
            //        'Content-Type': 'application/json'
            //      },
            //      body: JSON.stringify(newTask)
            //  })
            //
            // console.log(response)

            await axios.post(`https://63a9afd4594f75dc1dbd3f52.mockapi.io/tasks`, {
                title: name
            })

            getAllTasks()
        } catch (e){
            console.log(e)
        }
    }

    /** put/patch **/
    const updateTodo = async (id, newTitle) => {
        // setTasks(tasks.map(el => {
        //     if (el.id === id){
        //         return {...el, title: newTitle}
        //     }
        //     return el
        // }))
        const updatedTask = {
            title: newTitle
        }

        try {
            // const response = await fetch(`https://63a9afd4594f75dc1dbd3f52.mockapi.io/tasks/` + id, {
            //     method: "PUT",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(updatedTask)
            // })
            //
            // console.log(response)

            await axios.put(`https://63a9afd4594f75dc1dbd3f52.mockapi.io/tasks/` + id, {
                title: newTitle
            })

            getAllTasks()
        } catch (e){
            console.log(e)
        }
    }

    /** check **/
    const updateStatus = async (id) => {
        // setTasks(tasks.map(el => {
        //     if (el.id === id){
        //         //     el.title = newTitle
        //         //     return el
        //         return {...el, isCompleted: !el.isCompleted}
        //     }
        //     return el
        // }))
        const updatedTask = tasks.find(el => el.id === id)

        const result = {
            isCompleted: !updatedTask.isCompleted
        }

        try {
            // const response = await fetch(`https://63a9afd4594f75dc1dbd3f52.mockapi.io/tasks/` + id, {
            //     method: "PUT",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(result)
            // })
            //
            // console.log(response)

            await axios.put(`https://63a9afd4594f75dc1dbd3f52.mockapi.io/tasks/` + id, {
                isCompleted: !updatedTask.isCompleted
            })

            getAllTasks()
        } catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        getAllTasks()
    }, [])
    return (
        <div className="container">


            <h2 className="text-center mt-5">TODO APPLICATION</h2>
            <div className="row">
                <div className="col-4 offset-4 mt-5">
                    {/*{*/}
                    {/*    tasks.length ? <div>*/}
                    {/*        <div className="d-flex">*/}
                    {/*            <input onChange={handleChange} type="text" className="form-control"/>*/}
                    {/*            <button*/}
                    {/*                onClick={addTasks}*/}
                    {/*                className="btn btn-primary mx-2">Add</button>*/}
                    {/*        </div>*/}
                    {/*        <ul className="list-group mt-3">*/}
                    {/*            {*/}
                    {/*                tasks.filter(el => !el.isCompleted).map((el, idx) => <TodoItem el={el}*/}
                    {/*                                                                               key={el.id}*/}
                    {/*                                                                               deleteTask={deleteTask}*/}
                    {/*                                                                               updateTodo={updateTodo}*/}
                    {/*                                                                               updateStatus={updateStatus}*/}
                    {/*                />)*/}
                    {/*            }*/}
                    {/*        </ul>*/}
                    {/*        <hr/>*/}
                    {/*        <hr/>*/}
                    {/*        <hr/>*/}
                    {/*        <hr/>*/}
                    {/*        <ul className="list-group mt-3">*/}
                    {/*            {*/}
                    {/*                tasks.filter(el => el.isCompleted).map((el, idx) => <CompletedTodo el={el}*/}
                    {/*                                                                                   key={el.id}*/}
                    {/*                                                                                   deleteTask={deleteTask}*/}
                    {/*                                                                                   updateTodo={updateTodo}*/}
                    {/*                                                                                   updateStatus={updateStatus}*/}
                    {/*                />)*/}
                    {/*            }*/}
                    {/*        </ul>*/}
                    {/*    </div> : <Loader/>*/}
                    {/*}*/}

                    {
                        loading ? <Loader/> :
                            <div>
                                        <div className="d-flex">
                                            <input onChange={handleChange} type="text" className="form-control"/>
                                            <button
                                                onClick={addTasks}
                                                className="btn btn-primary mx-2">Add</button>
                                        </div>
                                        <ul className="list-group mt-3">
                                            {
                                                tasks.filter(el => !el.isCompleted).map((el, idx) => <TodoItem el={el}
                                                                                                               key={el.id}
                                                                                                               deleteTask={deleteTask}
                                                                                                               updateTodo={updateTodo}
                                                                                                               updateStatus={updateStatus}
                                                />)}

                                        </ul>
                                        <hr/>
                                        <hr/>
                                        <hr/>
                                        <hr/>
                                        <ul className="list-group mt-3">
                                            {
                                                tasks.filter(el => el.isCompleted).map((el, idx) => <CompletedTodo
                                                    el={el}
                                                    key={el.id}
                                                    deleteTask={deleteTask}
                                                    updateTodo={updateTodo}
                                                    updateStatus={updateStatus}
                                                />)
                                            }
                                        </ul>
                                    </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Todo;