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
                title: "Sample",
                // titleRom: this.title,
                titleRom: "Sample",
                artist: "Lorem Ipsum",
                // artistRom: this.artist,
                artistRom: "Lorem Ipsum",
                updatedDate: {
                    year: 2021,
                    month: 2
                },
                country: 2
            },
            {
                id: 1,
                code: "ff0002",
                title: "サンプル",
                titleRom: "Sample",
                artist: "山田太郎",
                artistRom: "Taro Yamada",
                updatedDate: {
                    year: 2021,
                    month: 2
                },
                country: 81
            },
            {
                id: 2,
                code: "ff0003",
                title: "샘플",
                titleRom: "Sample",
                artist: "홍길동",
                artistRom: "Gil-Dong Hong",
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