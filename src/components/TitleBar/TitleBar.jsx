import React from 'react';
import './TitleBar.css';
import logo from '../../Images/youtube-logo.jpg'; 


function TitleBar () {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td align="left"><img className="logo" src={logo} alt="YouTube" /></td>
                    <td align="center">
                        
                    </td>
                    <td align="right">
                        <h4>Profile</h4>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TitleBar;