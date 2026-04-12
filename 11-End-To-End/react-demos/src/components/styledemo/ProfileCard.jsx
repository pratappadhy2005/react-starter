import React from 'react'
import { FaBeer } from "react-icons/fa";

const ProfileCard = () => {
    const style = {
        color: "red",
        backgroundColor: "lightgreen",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px",
    }
    return (
        <div style={style}>
            <h1>Profile Card</h1>
            <p>Some content</p>
            <FaBeer size={30} />
        </div>
    )
}

export default ProfileCard
