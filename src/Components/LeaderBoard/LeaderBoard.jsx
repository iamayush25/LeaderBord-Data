import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BgImage from '../Image/LeaderBoardBackground.png';
import mainImage from '../Image/mainImage.png';

const Leaderboard = () => {
    const leaderboardData = [
        { name: 'Ayush Sharma', reward: 'f1 Collectable', time: '1:10:30:000' },
        { name: 'Shivam Kumar', reward: 'f2 Collectable', time: '1:10:45:000' },
        { name: 'Manoj', reward: 'f3 Collectable', time: '1:11:00:000' },
        { name: 'Akash Gupta', time: '1:11:30:000' },
        { name: 'Ravinder', time: '1:11:45:000' },
        { name: 'Yash', time: '1:12:15:000' },
        { name: 'Hamid Ansari', time: '1:12:30:000' },
        { name: 'Sonpal', time: '1:12:45:000' },
        { name: 'Rohit Verma', time: '1:13:00:000' },
        { name: 'Akash Haldar', time: '1:13:15:000' },
        { name: 'Krishna Baghel', time: '1:13:30:000' },
        { name: 'Shri Krishna', time: '1:13:45:000' },
        { name: 'Ravendra Sigh', time: '1:14:00:000' },
        { name: 'Anjane', time: '1:14:15:000' },
        { name: 'Neeraj', time: '1:14:30:000' },
        { name: 'Durgesh', time: '1:14:45:000' },
        { name: 'Vishal Gupta', time: '1:15:00:000' },
        { name: 'Waseem Raza', time: '1:15:15:000' },
        { name: 'Vishal Rathore', time: '1:15:30:000' },
        { name: 'Amit Kumar', time: '1:15:45:000' },
        { name: 'Rohit Goupale', time: '1:16:00:000' },
        { name: 'Sujit Kumar (E)', time: '1:16:15:000' },
        { name: 'Banshi', time: '1:16:30:000' },
        { name: 'Suleman', time: '1:16:45:000' },
        { name: 'Ravinder', time: '1:17:00:000' },
        { name: 'Vikas', time: '1:17:15:000' },
        { name: 'Yash', time: '1:17:30:000' },
        { name: 'Hamid Ansari', time: '1:17:45:000' },
        { name: 'Sonpal', time: '1:18:00:000' },
        { name: 'Rohit Verma', time: '1:18:15:000' },
        { name: 'Akash Haldar', time: '1:18:30:000' },
        { name: 'Krishna Baghel', time: '1:18:45:000' },
        { name: 'Shri Krishna', time: '1:19:00:000' },
        { name: 'Ravendra Sigh', time: '1:19:15:000' },
        { name: 'Anjane', time: '1:19:30:000' },
        { name: 'Neeraj', time: '1:19:45:000' },
        { name: 'Durgesh', time: '1:20:00:000' },
        { name: 'Vishal Gupta', time: '1:20:15:000' },
        { name: 'Waseem Raza', time: '1:20:30:000' },
        { name: 'Vishal Rathore', time: '1:20:45:000' },
        { name: 'Amit Kumar', time: '1:21:00:000' },
    ];

    const getBackgroundColor = (index) => {
        switch (index) {
            case 0:
                return 'rgba(255, 223, 186, 0.8)';
            case 1:
                return 'rgba(192, 192, 192, 0.8)';
            case 2:
                return 'rgba(205, 127, 50, 0.8)';
            default:
                return 'rgba(0, 0, 0, 0.5)';
        }
    };

    return (
        <div className="container d-flex flex-column justify-content-between align-items-center">
            <div className="w-50" style={{ backgroundColor: "black" }}>
                <header className="text-center my-4" style={{ color: 'white' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '2px', fontFamily: 'Arial, sans-serif', zIndex: 1 }}>
                        Leaderboard
                    </h1>
                </header>
                <div className="leaderboard mb-0" style={{
                    backgroundImage: `url(${BgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '20px',
                }}>
                    <div className="card-body">
                        
                        <ul className="list-group" style={{
                            maxHeight: '400px',
                            overflowY: 'scroll',
                            backgroundColor: 'transparent'
                        }}>
                            <li className="list-group-item d-flex justify-content-between align-items-center" style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                border: 'none',
                                color: 'white',
                                fontWeight: 'bold',
                                backdropFilter: 'blur(10px)',
                            }}>
                                <span style={{}}>Name</span>
                                <span style={{}}>Time</span>
                            </li>
                            {leaderboardData.map((entry, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center mt-1" style={{
                                    backgroundColor: getBackgroundColor(index),
                                    border: 'none',
                                    color: 'white',
                                    backdropFilter: index >= 3 ? 'blur(10px)' : 'none',
                                }}>
                                    <span style={{}}>
                                        <span className="badge" style={{ marginRight: '10px', backgroundColor: 'white', color: 'black' }}>
                                            {index + 1}
                                        </span>
                                        {entry.name}
                                    </span>
                                    <span style={{}} className="badge badge-primary badge-pill">
                                        {entry.reward} <span style={{ marginLeft: '10px' }}>{entry.time}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div id="myCarousel" className="carousel slide w-50" data-bs-ride="carousel" style={{
                height: "30vh"
            }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={mainImage} className="d-block w-100" alt="Slide" style={{ height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
