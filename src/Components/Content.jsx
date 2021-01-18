import React from 'react';
import {Link} from 'react-router-dom';
export default function Content(){
    return(
        <React.Fragment>
            <h1>This is Contant</h1>
            <Link to="/">go to Header</Link>
        </React.Fragment>
    );
    
}