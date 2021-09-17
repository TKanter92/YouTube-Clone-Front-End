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
                        <input className="input" placeholder="Search"></input>
                        <button className="button"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
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