import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

// Consultei o PR da Laís Nametala para resolver o requisito 3 - onde colocar a propriedade 'headline'. link: https://github.com/tryber/sd-019-a-project-solar-system/pull/5/commits/552cc9aead40fe4dcd5972962a41d45ab02903f7

class SolarSystem extends Component {
  render() {
    return (
      <div className="solar-system-container" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets-container">
          {
            planets.map((planet) => {
              const { name, image } = planet;
              return (<PlanetCard
                planetName={ name }
                planetImage={ image }
                key={ name }
              />);
            })
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
