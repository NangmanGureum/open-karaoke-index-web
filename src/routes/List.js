import React from 'react';
// import axios from "axios";
import Song from "../components/Song";
import './List.css';

class List extends React.Component  {
    state = {
        isLoading: true,
        songs: [],
        thisCountry: 82
    };

    getSongs = async () => {
        // const {data: {data: {asdf}}} = await axios.get("{backendUrl}");
        
        // Sample Data
        const songs = [
            {
                id: 0,
                code: "ff0001",
                title: "Never Gonna Give Up",
                // titleRom: this.title,
                titleRom: "Never Gonna Give Up",
                artist: "Rick Astley",
                // artistRom: this.artist,
                artistRom: "Rick Astley",
                updatedDate: {
                    year: 2021,
                    month: 2
                },
                country: 44
            },
            {
                id: 1,
                code: "ff0002",
                title: "Pretender",
                titleRom: "Pretender",
                artist: "Official髭男dism",
                artistRom: "Official HIGE DANdism",
                updatedDate: {
                    year: 2021,
                    month: 2
                },
                country: 81
            },
            {
                id: 2,
                code: "ff0003",
                title: "Dynamite",
                titleRom: "Dynamite",
                artist: "방탄소년단",
                artistRom: "BTS",
                updatedDate: {
                    year: 2021,
                    month: 2
                },
                country: 82
            }
        ]
        this.setState({
            isLoading: false,
            songs
        });
    }
    componentDidMount() {
        this.getSongs()
    }
    render() {
        const {isLoading, songs, thisCountry} = this.state;

        return (
            <section className="container">
                {isLoading ?(
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) :(
                    <div className="songs">
                        {
                            songs.map(song => {
                                console.log(thisCountry);
                                return(
                                    <Song
                                    key={song.id}
                                    id={song.id}
                                    code={song.code}
                                    title={song.title}
                                    titleRom={song.titleRom}
                                    artist={song.artist}
                                    artistRom={song.artistRom}
                                    updatedDate={song.updatedDate}
                                    songCountry={song.country}
                                    thisCountry={thisCountry} />
                                )
                            } 
                            )

                        }
                    </div>
                )}
            </section>
        )
    }
}

export default List;