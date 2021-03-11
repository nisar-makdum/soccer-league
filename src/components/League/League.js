import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

const League = (props) => {
    const {strLeague, strSport, idLeague} = props.league
    const leagueStyle = {
        boxShadow: '6px 6px 3px gray',
        margin: '10px',
        float: 'left',
        padding: '10px',
        borderRadius: '10px',
        height: '200px',
        width: '300px',
        }
        const history = useHistory();

    const details = idLeague => {
            const url = `league/${idLeague}`
            history.push(url);
        }

    return (
        <div style={leagueStyle} className="card bg-white text-dark">
           <h3>{strLeague}</h3>
           <p>Sports Type: {strSport}</p>
           <button onClick={() => details(idLeague)} class="btn btn-dark" style={{ height:"40px", width:"150px"}}>Explore  <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
          </div>
    );
};

export default League;