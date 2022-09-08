import React, { useState , useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Interview = () => {

    const [interview, setInterview] = useState([])

    useEffect(() => {
        getAllInterview()
    }, [])
    
    async function getAllInterview() {
        try {
            const r = await axios.get(`https://job-hunters-point.herokuapp.com/users/1/interviews/`)
            setInterview(r.data)
        } 
        catch (e) {
            console.error(e)
        }}

    const interviews = interview.map(item => {
        
        return (
            <div key={`${item.title}${item.date}`}>
                <h3>{item.title}</h3>
                <h5>{item.date}</h5>
                <p>{item.comment ? `Notes: ${item.comment}` : null}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>Interviews</h2>
            {interviews}
        </div>
    )
}

export default Interview