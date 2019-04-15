import React from 'react';
import './Planets.scss';


const planets = (props)  => {
    
    return(
        <div className="Planets">
                <div className="col-md-3 col-lg-3 mb-3">
                    <div className="planet-card">
                       <div className="planet-card-inner">
                            <div className="planet-front">
                                <div className="card-body">
                                    <h4 className="card-title">{props.name}</h4>
                                    <p className="card-text">
                                        <strong>{props.name} Climate: </strong> 
                                        <span className="text-capitalize">{props.temp}
                                        </span>
                                    </p>
                                    <p className="card-text">{props.pop}</p>
                                </div>
                            </div>
                            <div className="planet-back">
                                <h1 className="text-center">{props.name}</h1> 
                                <p>Temperature: {props.temp}</p> 
                                <p>diameter: {props.diameter}</p>
                                <p>Gravity: {props.gravity}</p>
                                <p>Orbital Period{props.orbit}</p>
                                <p>population: {props.pop}</p>
                                <p>Rotation Period: {props.rotate}</p>
                                <p>Surface Water: {props.surface}</p>
                                <p>terrain: {props.terrain}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
    );
}

export default planets;