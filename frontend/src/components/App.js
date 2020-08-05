import React, {Component} from "react";
import {render} from "react-dom";

class App extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>LankanBuyer.COM</h1>
                    <p>Resize this responsive page to see the effect!</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Column 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Column 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
const container = document.getElementById("app");

render(<App/>, container);