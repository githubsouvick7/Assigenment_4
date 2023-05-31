import React from 'react'
import './Leftside.css'

const Leftside = () => {
    return (
        <>
            <div className="left-side">
                <div className="head">
                    <h1>Board.</h1>
                </div>
                <div className="header">
                    <div className="item">
                        <ul>
                            <li>
                                <img src="image/dashboard_icon.png" alt="" />
                                Dashboard
                            </li>
                            <li>
                                <img src="image/Vector.png" alt="" />
                                Transactions
                            </li>
                            <li>
                                <img src="image/schedule_icon.png" alt="" />
                                Schedules
                            </li>
                            <li>
                                <img src="image/user_icon.png" alt="" />
                                Users
                            </li>
                            <li>
                                <img src="image/setting_icon.png" alt="" />
                                Settings
                            </li>
                        </ul>
                    </div>
                    <div className="support">
                        <div className="sup">Help</div>
                        <div className="sup">Contact Us</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leftside