import React, { useEffect, useState } from "react";
import axios  from "axios";
import Tasks from "./Task"
function Gettasks(){
    let [tasklist,setTasklist]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/tasks").then((res)=>{
            setTasklist(res.data.tasks)
        })
    },[])
    

    return(
        <>
        <Tasks arr={tasklist}/>
        </>
    );
}
export default Gettasks;