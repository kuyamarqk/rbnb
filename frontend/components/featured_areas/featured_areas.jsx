import React from 'react';
import { Redirect, withRouter } from "react-router-dom";
import RestaurantIndexContainer from "../restaurants/restaurant_index_container";


class FeaturedAreas extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     search: ""
        // }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e){
        e.preventDefault();

        let cityValue = e.target.id.split("_").map(i => i[0].toUpperCase() + i.slice(1)).join(' ');
        this.props.history.push({
          pathname: "/restaurants",
          state: { city: cityValue },
        });
    }

    render( ) {
        return (
            <div className="areas">
                <h1>Featured Areas</h1>
                <div className="area-list">
                    <div className="fcity" id="makati" onClick={this.handleClick}>
                        Makati City
                    </div>
                    <div className="fcity" id="manila" onClick={this.handleClick}>
                        Manila City
                    </div>
                    <div className="fcity" id="pasig" onClick={this.handleClick}>
                        Pasig City
                    </div>
                    <div className="fcity" id="quezon" onClick={this.handleClick}>
                        Quezon City
                    </div>
                    <div className="fcity" id="mandaluyong" onClick={this.handleClick}>
                        Mandaluyong
                    </div>
                    <div className="fcity" id="taguig" onClick={this.handleClick}>
                        Taguig City
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(FeaturedAreas);