import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ClubInfo from '../ClubInfo/ClubInfo';

const ClubData = () => {
    
    
        const {idLeague} = useParams()
        const [club, setClub] = useState([])

        useEffect(() => {
            const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
            fetch(url)
            .then(res => res.json())
            .then(data => setClub(data.leagues))
        },[idLeague])

    return (
        <div>
            {
                club.map(club => <ClubInfo club={club}></ClubInfo>)
            }
        </div>
    );
};

export default ClubData;