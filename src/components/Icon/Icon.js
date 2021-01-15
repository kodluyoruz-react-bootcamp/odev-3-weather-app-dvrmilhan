/* eslint-disable no-unreachable */
import React from 'react'
import "./Icon.css"
import Cloudy from "../../assets/cloudy2.svg";
import Rain from "../../assets/rain2.svg";
import Snowing from "../../assets/snowing2.svg";
import Sun from "../../assets/sun2.svg";
import Thermometer from "../../assets/thermometer.svg";

const Icon = (props) => {
    switch (props.icon) {
        case 801:
            return <img src={Cloudy} alt={Cloudy} className="icon" />
            break;
        case 802:
            return <img src={Cloudy} alt={Cloudy} className="icon" />
            break;
        case 803:
            return <img src={Cloudy} alt={Cloudy} className="icon" />
            break;
        case 200:
            return <img src={Rain} alt={Rain} className="icon" />
            break;
        case 201:
            return <img src={Rain} alt={Rain} className="icon" />
            break;
        case 202:
            return <img src={Rain} alt={Rain} className="icon" />
            break;
        case 600:
            return <img src={Snowing} alt={Snowing} className="icon" />
            break;
        case 601:
            return <img src={Snowing} alt={Snowing} className="icon" />
            break;
        case 602:
            return <img src={Snowing} alt={Snowing} className="icon" />
            break;
        case 610:
            return <img src={Snowing} alt={Snowing} className="icon" />
            break;
        case 'Sun':
            return <img src={Sun} alt={Sun} className="icon" />
            break;
        default:
            return <React.Fragment>
                <img src={Thermometer} alt={Thermometer} className="icon" />
                <h5>{props.descriptions}</h5>
            </React.Fragment>
            break;
    }
}

export default Icon
