import React from 'react';
import WeatherBody from "./components/WeatherBody/WeatherBody"
import weather from "./api/api"
import "./App.css"
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: [],
      city: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  // componentDidUpdate() {
  //   WeatherBody.length(`hourly?city=${this.state.city}&key=c7b059eea9f04655a1398fbdabbb1aa2`);
  // }

  searchCity = async (city) => {
    await weather.get(`daily?city=${city}&key=c7b059eea9f04655a1398fbdabbb1aa2`)
      .then(res => {
        const temp = res.data.data;
        const city = res.data.city_name;

        this.state({
          temp,
          city,
          isLoaded: true
        });
      }
      )
  }

  render() {

    const minTemp = this.state.temp.map(el => {
      return parseInt(el.min_temp);
    })
    const maxTemp = this.state.temp.map(el => {
      return parseInt(el.max_temp)
    })

    const icon = this.state.temp.map(el => {
      return el.weather.code;
    })
    const description = this.state.temp.map(el => {
      return el.weather.description;
    })

    //Loader
    if (!this.state.isLoaded) {
      return <Loader msg={"Loading....."} />
    }

    return (
      <div className="App">
        <React.Fragment>
          <SearchBar city={this.state.city_name} searchCity={this.state.searchCity} />
        </React.Fragment>
        <div className="weatherContainer pt-3 pb-3">
          <WeatherBody day={"Mon"} icon={icon[0]} minTemp={minTemp[0]} maxTemp={maxTemp[0]} />
          <WeatherBody day={"Tue"} icon={icon[1]} minTemp={minTemp[1]} maxTemp={maxTemp[1]} />
          <WeatherBody day={"Wed"} icon={icon[2]} minTemp={minTemp[2]} maxTemp={maxTemp[2]} />
          <WeatherBody day={"Thu"} icon={icon[3]} minTemp={minTemp[3]} maxTemp={maxTemp[3]} />
          <WeatherBody day={"Fri"} icon={icon[0]} minTemp={minTemp[0]} maxTemp={maxTemp[0]} />
        </div>
      </div>
    );
  }
}

export default App;

