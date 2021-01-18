import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <React.Fragment>
            <h1>This is header</h1>
            <Link to="/content">go to content</Link>
        </React.Fragment>
    );
    
}
