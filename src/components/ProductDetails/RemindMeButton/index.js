import React from "react";
import { Link } from 'react-router-dom';

import "./style.css"

function RemindMeButton (props) {

    if(props.isActive) {
        return (
            <Link to="/" className="active remind-btn">{props.text ? props.text : "Me prévenir"}</Link>
        );
    }

    return (
        <Link to="/" className="remind-btn">{props.text ? props.text : "Me prévenir"}</Link>
    );
}

RemindMeButton.defaultProps = {
    isActive: true
};

export default RemindMeButton;