import React from "react";
import './PageHeader.css';


const PageHeader = (props) => {

    const {headertext, icon} = props;

    return(
        <div className="pagecont">
            <h2>{headertext}</h2>
            <span>{icon}</span>
        </div>
    )
}

export default PageHeader;