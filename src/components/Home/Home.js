import React, { useEffect, useState } from 'react';
import BgImage from '../BgImage/BgImage';
import League from '../League/League';


const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0, 12)))
    }, []);
    
    return (
        <div>
            <header>
                <BgImage></BgImage>
            </header>
            <br/> 
            <div style={{backgroundColor:"DarkSlateBlue"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            {
                                leagues.map(league => <League league = {league}></League>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;