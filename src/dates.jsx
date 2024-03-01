import React from "react";
import { useEffect, useState } from "react";


    export function ApplyDay()
    {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const today = new Date();
        var todayDay = today.getDay();
        var todaySeconds = today.getSeconds();
        var DayOfWeek = days[todayDay];

        const [stringday, setstringday] = useState([]);
        const [stringseconds, setstringseconds] = useState([]);
        // useEffect(() => { // hooks only work inside function components
        //     async function fetchday(){
        //         setInterval() => 
        //         {
        //             setstringday(todayDay);
        //         }, 1000);
            
                
        //     }
        //     fetchday();
        // }, []);

        useEffect(() => {
            const intervalId = setInterval(() => {
                setstringday(DayOfWeek);
            }, 1000);
            return () => {
                clearInterval(intervalId)
            }
        })

        useEffect(() => {
            const secondsInterval = setInterval(() => {
                setstringseconds(todaySeconds);
            }, 1000);
            return () => {
                clearInterval(secondsInterval)
            }
        });
        
        
        // useEffect(() => {
        //     async function fetchtimeseconds(){
        //         setstringseconds(todaySeconds)
        //     }
        //     fetchtimeseconds();
        // }, []);

        
        var todayDate = today.getDate();
        var todayMonth = today.getMonth();
        var todayYear = today.getFullYear();
        var todayHour = today.getHours();
        var todayMinute = today.getMinutes();
        
        var stringmonth = month[todayMonth];
        
        //var ans = <h1>{daystring}</h1>
    
        // var currentDiv = document.createElement("Current");
        var currentDiv = document.createElement("current");
        currentDiv.style.width = "20px";
        currentDiv.style.height = "20px";
        currentDiv.style.backgroundColor = "red";
        //document.getElementsByClassName("current").appendChild(div);
        return(
            <>
                
                <div>
                    
                    <h1>{stringday} {todayDate}th {stringmonth} {todayYear} {todayHour}:{todayMinute}:{stringseconds}</h1>
                    {/* <h1>{todayDate}th {stringmonth} {todayYear} {todayHour}:{todayMinute}</h1> */}
                </div>
            </>
            
            
                
        )
            
            
    }


    export function DayTracker()
    {
            
        
        return(
            <>
                <div>
                    <div className="dayContainer">
                        <div className="rowContainer">
                            <div className="Monday">Mon</div>
                            <div>|</div>
                            <div className="Tuesday">Tue</div>
                            <div>|</div>
                            <div className="Wednesday">Wed</div>
                            <div>|</div>
                            <div className="Thursday">Thur</div>
                            <div>|</div>
                            <div className="Friday">Fri</div>
                            <div>|</div>
                            <div className="Saturday">Sat</div>
                            <div>|</div>
                            <div className="Sunday">Sun</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }



