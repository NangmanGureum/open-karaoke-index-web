import React from 'react';

import './Home.css';

function Home() {
    return (
        <div className="about">
            <h1>Welcome To OpenKaraoke</h1>
            <p>This Project is to implement Korean karaoke system.(and this system called "No-rae-bang")</p>
            <p>
                These days, it is difficult to go to karaoke due to COVID-19, and it is a project to create such a system or a content providing system for it.<br />
                Contents (songs) in the server are planned to be negotiated with companies or organizations that have the corresponding copyright. 
            </p>
            <p>
                In this regard, the open source distribution is limited to the program that plays the provided content or the server that distributes it, and the content in the server is not distributed. 
            </p>
        </div>
    )
}

export default Home;