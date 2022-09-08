import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Application = () => {

    const [application, setApplication] = useState([])

    useEffect(() => {
        getAllUser()
    }, [])
    
    async function getAllUser() {
        try {
            const r = await axios.get(`https://job-hunters-point.herokuapp.com/users/1/applications/`)
            setApplication(r.data)
        } 
        catch (e) {
            console.error(e)
        }}

    const applications = application.map(item => {
        return (
            <div key={`${item.title}${item.date}`}>
                <h3>{item.title}</h3>
                <h5>{item.date}</h5>
                <h5>
                    {item.counter ? `Counter: ${item.counter}` : null}
                </h5>
            </div>
        )
    })

    return (
        <div>
            this is working
            {applications}
        </div>
    )
}

export default Application