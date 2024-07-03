import React from "react";
import NavBar from "./NavBar";
import {useParams} from 'react-router-dom'


const Profile = () => {
    const params = useParams()
    return (
        <>
            <NavBar/>
            <h1 className="display-6">Profile Page</h1>
        </>
    )
}

export default Profile