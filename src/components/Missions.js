import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions-container">
          {
            missions.map((mission) => {
              const { name, year, country, destination } = mission;
              return (<MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
                key={ name }
              />);
            })
          }
        </div>
      </div>
    );
  }
}

export default Missions;
