import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Consultei o PR da Laís Nametala para resolver o requisito 3 - onde colocar a propriedade 'headline'. link: https://github.com/tryber/sd-019-a-project-solar-system/pull/5/commits/552cc9aead40fe4dcd5972962a41d45ab02903f7

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="h2-container">
        <h2>{ headline }</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
