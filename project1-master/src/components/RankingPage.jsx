import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/Ranking.css";
import Navbar from "./Navbar";

const RankingPage = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/comments"
            );
            const dataWithPoints = response.data.map(item => ({
                ...item,
                points: Math.floor(Math.random() * 100)
            }));
            setData(dataWithPoints);
            setSortedData(dataWithPoints.sort((a, b) => b.points - a.points));
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    return (
        <div className="ranked-list">
            <Navbar/>
            <div className="head">
                <h1>Ranking</h1>
                <hr />
            </div>
            <div className="container">
                <div className="your-rank">
                    <div className="head2">
                        <h4>Your Rank</h4></div>
                    <div className="pr"><p>{Math.floor(Math.random() * 100)}</p>
                    </div><div className="pr"><p>{Math.floor(Math.random() * 100)}<span>pts</span></p>
                    </div></div>
                <div className="mt-3 table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="ee top-left">Name</th>
                                <th>Email</th>
                                <th>Points</th>
                                <th className="top-right">Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((item, index) => (
                                <tr key={item.id} className={`ranked-item rank-${index + 1}`}>

                                    <td className="name">{item.name}</td>
                                    <td className="email">{item.email}</td>
                                    <td className="points">{item.points}</td>
                                    <td className="rank">{index + 1}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RankingPage;
