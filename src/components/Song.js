import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Song.css";

/*
Elements in a song

id - Song id
code - Song Number(in HEX) ()

title - The title of song
titleRom - Romanized version of 'title'

artistIds - Array of artist's ID(s)
artistStr (|| artist) - Artist name as string
artistRom - Romanized version of 'artistStr'

updatedDate

songCountry - Country number for the song (for example - U. S. : 1, Republic of Korea : 82)
thisCountry - Country number for what you are

*/

function Song(
    {id,
     code,
     title,
     titleRom,
     artist, 
     artistRom,
     updatedDate,
     songCountry,
     thisCountry}
) {
    const {year, month} = updatedDate
    return (
        <Link to={{
            pathname:"./songmeta",
            state: {
                code
            }
        }}>
            <div className="song">
                <div className="song__code">
                    {code}
                </div>
                <div className="song__content">
                    <div className="song__content__title">
                        {songCountry === thisCountry? title : titleRom}
                    </div>
                    <div className="song__content__artist">
                        {songCountry === thisCountry? artist : artistRom}
                    </div>
                </div>
                <div className="song__date">
                    {month}. {year}.
                </div>
            </div>
        </Link>
    ) 
}

Song.propTypes = {
    id: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleRom: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    artistRom: PropTypes.string.isRequired,
    updatedDate: PropTypes.object.isRequired,
    songCountry: PropTypes.number.isRequired,
    thisCountry: PropTypes.number.isRequired
}

export default Song;