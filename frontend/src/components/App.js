import React, {Component} from "react";
import {render} from "react-dom";

class App extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>LankanBuyer.COM</h1>
                    <p>The best classified website so far. Coming soon!</p>
                </div>
                <div className="container">
                    <div className="row">
                        <p>We bring you number of categories</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Buy/Sell Subscriptions</h3>
                            <p>Sell your Spotify/HULU subscriptions.</p>
                            <p>We offer you the standard rates</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Web Application Development</h3>
                            <p>If you want to sell your service for web development work. Try here!</p>
                            <p>Not like Rs. 500 pages, we offer you standard rates</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Social Marketing</h3>
                            <p>Sell your marketing services, such as youtube watch times, facebook pages</p>
                            <p>We bring you the best customers for you</p>
                        </div>
                    </div>
                    <div className="row">
                        <p>The other best thing here is -- Registration is free!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
const container = document.getElementById("app");

render(<App/>, container);