import React from 'react';

function UserPopup(props) {
    return (
        <div className="popup-user">
            <div className="userPopup">
                <span className="close-icon-user" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    )
}

export default UserPopup;