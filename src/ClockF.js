import React,{useState} from "react";

function ClockF(){

    const time = new Date().toLocaleTimeString();

    const [clockTime , setClockTime] = useState(time);

    const UpdateTime = () => {
        const time = new Date().toLocaleTimeString();
        setClockTime(time);
    }
    setInterval(UpdateTime , 1000);
    return (
        <div >
            <form>
            <h2>Hello Magicians</h2>
            <h2>Function Component</h2>
            <h1>{clockTime}</h1>
            </form>
        </div>
    );
}

export default ClockF;
