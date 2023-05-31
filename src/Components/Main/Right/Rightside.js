import React from 'react'
import './Rightside.css'
import Activitycharts from '../Charts/Activitycharts'
import Piecharts from '../Charts/Piecharts'
import { useAuth0 } from '@auth0/auth0-react'

const Rightside = () => {
    const { logout } = useAuth0();
    return (
        <>
            <div className="right-side">
                <div className="nav">
                    <div className="head-dashboard">Dashboard</div>
                    <div className="search">
                        <div className="search-input">
                            <input type="text" placeholder='Search here' />
                        </div>
                        <div className="icon">
                            <img src="image/Vector4.png" alt="" />
                        </div>
                        <div className="auth">
                            <button className='btn2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>

                <div className="secondnav">
                    <div className="first one">
                        <div className="img">
                            <img src="image/Vector1.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Total Revenues</h4>
                            <h2>$10,00,000</h2>
                        </div>
                    </div>
                    <div className="first two">
                        <div className="img">
                            <img src="image/Vector6.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Total Transactions</h4>
                            <h2>1970</h2>
                        </div>
                    </div>
                    <div className="first three">
                        <div className="img">
                            <img src="image/Vector2.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Total Likes</h4>
                            <h2>260</h2>
                        </div>
                    </div>
                    <div className="first four">
                        <div className="img">
                            <img src="image/Vector3.png" alt="" />
                        </div>
                        <div className="text">
                            <h4>Total Users</h4>
                            <h2>1970</h2>
                        </div>
                    </div>
                </div>

                <div className="chart">
                    <Activitycharts />
                </div>

                <div className="data">
                    <div className="product">
                        <div className="top">
                            <h3>Top uses</h3>
                            <h4>May-2022 - June-2022</h4>
                        </div>
                        <div className="itemdata">
                            <Piecharts />
                        </div>
                    </div>
                    <div className="schedule">
                        <div className="text-schedule">
                            <h4>Today schedule</h4>
                        </div>
                        <div className="today-schedule">
                            <div className="item-first">
                                <h4>Meeting with suppliers from Kuta Bali</h4>
                                <h5>14.00-15.00</h5>
                                <h6>at Sunset Road, Kuta, Bali </h6>
                            </div>
                            <div className="item-second">
                                <h4>Check operation at Giga Factory 1</h4>
                                <h5>18.00-20.00</h5>
                                <h6>at Central Jakarta  </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rightside