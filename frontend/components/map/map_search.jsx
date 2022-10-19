import React from 'react';
import AllRestaurant from './all_restaurants'
import MarkerManager from "../../util/marker_manager";

const CITY = [
    "Makati",
    "Manila",
    "Pasig",
    "Quezon",
    "Mandaluyong",
    "Taguig"
]

const COORD = [
  { city: "Makati", center: { lat: 14.6091, lng: 121.0223} },
  { city: "Manila", center: { lat: 14.5995, lng: 120.9842} },
  { city: "Pasig", center: { lat: 14.5764, lng: 121.0851} },
  { city: "Quezon", center: { lat: 14.6759, lng: 121.0415} },
  { city: "Mandaluyong", center: { lat: 14.5794, lng: 121.0359} },
  { city: "Taguig", center: { lat:14.5176, lng:121.0509} },
]

class MapSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: "Makati",
      center: { lat: 14.6091, lng: 121.0223 }
    }

    this.searchCity = this.searchCity.bind(this)
    this.searchOptionCity = this.searchOptionCity.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.searchCity();

    const mapOptions = {
      center: this.state.center, // this is SF
      zoom: 12
    };
    
    this.map = new google.maps.Map(this.SearchMapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.restaurants);

    this.map.addListener('idle', () => {
      const bounds = this.map.getBounds();
      const southWest = bounds.getSouthWest();
      const northEast = bounds.getNorthEast();
      this.sendBounds(southWest, northEast);
    });
  }

  searchCity(){
    this.props.searchRestaurants({
      city: this.state.city
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/restaurants");
  }

  handleChange(e){
    e.preventDefault();
    
    let newCity = e.target.value.split("_").join(" ")
    let newCenter 
    for (let i = 0; i < COORD.length; i++){
      let cityCoord = COORD[i]

      if (cityCoord.city === newCity) {
        newCenter = cityCoord.center
      }
    }
    
    
    this.setState(
      { city: newCity, center: newCenter }, () => this.searchCity()
    )

    //re-render map
    const newMapOptions = {
      center: newCenter,
      zoom: 12,
    };


    this.map = new google.maps.Map(this.SearchMapNode, newMapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.restaurants);
  }

  searchOptionCity(){
    let cityOption = CITY.map((city, i) => (
      <option key={i} value={city}>{city}</option>
    ))
    return cityOption
  }


  sendBounds(sw, ne) {
    const bounds = {
      "northEast": { "lat": ne.lat(), "lng": ne.lng() },
      "southWest": { "lat": sw.lat(), "lng": sw.lng() }
    }
    this.props.searchRestaurants({ bounds })
  }


  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.restaurants);
  }

  render() {
    const { restaurants, fetchRestaurants, searchRestaurants } = this.props;
    
    return (
      <div id="search-map-page">
        <div className="search-map-container">
          <div className="search-map">
            <div id="search-map-container" ref={map => this.SearchMapNode = map}>
              <h1>the map</h1>
            </div>
          
          </div>
          <div className="search-rest-container">
            <div id="list-header">
              <p> {restaurants.length} restaurants </p>
              <div>
              <select onChange={this.handleChange}>
                <option value="Makati">Makati</option>
                <option value="Manila">Manila</option>
                <option value="Pasig">Pasig</option>
                <option value="Pateros">Pateros</option>
                <option value="Mandaluyong">Mandaluyong</option>
                <option value="Taguig">Taguig</option>
              </select>

              </div>
              <div className="list-icon" onClick={this.handleClick.bind(this)}>
                <button className="list-icon-btn"><i className="fas fa-list"></i> List View</button>
              </div>
            </div>
            <AllRestaurant restaurants={restaurants} searchRestaurants={searchRestaurants} />
          </div>
        </div>
      </div>
    )
  }

}

export default MapSearch; 