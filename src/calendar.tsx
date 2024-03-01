// import React, { Component } from "react";
import { Component } from "react";
import React, { useRef,FormEvent } from "react";
import './App.css';
import { DayTracker } from "./dates";


export function CalendarGrid()
{
    // handleChange(e) 
    // {
    //     this.setState({value: e.target.value});
    // }
    
    // handleSubmit(e)
    // {
    //     alert('A name was submitted: ' + this.state.value);
    //     e.preventDefault();
    // }



    // const task_data = {
    //     user_name: name.JSON.stringify
    // }

    // function result(){
    //     console.log(task_data.user_name)
    // }
    const task_data = {
        task_name : '',
        task_desc : ''
    };
    const taskname_ref= useRef<HTMLInputElement>(null);
    const taskdescription_ref = useRef<HTMLInputElement>(null);
    const enter_name = (event: FormEvent) => {
        event.preventDefault();
        if(taskname_ref.current !== null)
        {
            task_data.task_name = taskname_ref.current.value
            console.log(task_data.task_name);
        }
        if(taskdescription_ref.current !== null){
            task_data.task_desc = taskdescription_ref.current.value
            console.log(task_data.task_desc)
        }
        
        
    }


    // Event.preventDefault();
    // console.log(enter_name);
    return(
        <>
        {/* onChange={this.handleChange} */}
        {/* onSubmit={this.handleSubmit} */}

        {/* value={JSON.stringify} */}
        <DayTracker />
            <button>Enter task</button>
            <form onSubmit={ (enter_name) }>
                <label>Title
                    <input ref={taskname_ref} id="taskname" type="text" />
                    
                </label>
                <label>Description
                    <input ref={taskdescription_ref} id="taskdescription" type="text" />
                    
                </label>
                <input id="name" type="submit" value="Submit" />
            </form>
            {/* {result()} */}
            <div className="outerBox"> 
                <div className="griditem1 gridPosition">
                    <h1> 01:00</h1>
                </div>
                <div className="griditem2 gridPosition"> 
                    <h1> 02:00</h1>
                </div>
                <div className="griditem3 gridPosition">
                    <h1> 03:00</h1>
                </div>
                <div className="griditem4 gridPosition">
                    <h1> 04:00</h1> 
                </div>
                <div className="griditem5 gridPosition">
                    <h1> 05:00</h1> 
                </div>
                <div className="griditem6 gridPosition">
                    <h1> 06:00</h1>
                </div>
                <div className="griditem7 gridPosition">
                    <h1> 07:00</h1>
                </div>
                <div className="griditem8 gridPosition">
                    <h1> 08:00</h1>
                </div>
                <div className="griditem9 gridPosition">
                    <h1> 09:00</h1>
                </div>
                <div className="griditem10 gridPosition">
                    <h1> 10:00</h1> 
                </div>
                <div className="griditem11 gridPosition">
                    <h1> 11:00</h1>
                </div>
                <div className="griditem12 gridPosition">
                    <h1> 12:00</h1> 
                </div>
                <div className="griditem13 gridPosition"> 
                    <h1> 13:00</h1>
                </div>
                <div className="griditem14 gridPosition">
                    <h1> 14:00</h1>
                </div>
                <div className="griditem15 gridPosition"> 
                    <h1> 15:00</h1>
                </div>  
                <div className="griditem16 gridPosition">
                    <h1> 16:00</h1>
                </div>
                <div className="griditem17 gridPosition">
                    <h1> 17:00</h1>
                </div>
                <div className="griditem18 gridPosition"> 
                    <h1> 18:00</h1>
                </div>
                <div className="griditem19 gridPosition">
                    <h1> 19:00</h1>
                </div>
                <div className="griditem20 gridPosition">
                    <h1> 20:00</h1>
                </div>
                <div className="griditem21 gridPosition">
                    <h1> 21:00</h1>
                </div>
                <div className="griditem22 gridPosition">
                    <h1> 22:00</h1>
                </div>
                <div className="griditem23 gridPosition">
                    <h1> 23:00</h1> 
                </div>
                <div className="griditem24 gridPosition"> 
                    <h1> 00:00</h1>
                </div>
                    
            </div>
        </>
    )
}





export default CalendarGrid;