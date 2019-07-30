import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';

class MarkerClusterer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scriptLoaded: false,
    };

    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  componentDidUpdate() {
    this.renderMarkerClusterer(this.props);
  }

  componentWillUnmount() {
    if (!this.markerClusterer) {
      return;
    }

    this.markerClusterer.clearMarkers();
  }

  onScriptLoad() {
    this.setState({
      scriptLoaded: true,
    });

    this.renderMarkerClusterer(this.props);
  }

  renderMarkerClusterer(props) {
    const {
      map,
      markers,
    } = props;

    if (!map) {
      return;
    }

    if (!this.markerClusterer) {
      this.markerClusterer = new MarkerClusterer(map, markers);
      return;
    }

    /**
     * @todo Review props and apply updates to this.markerClusterer. - Ryan
     */
  }

  render() {
    return (
      <Script
        url="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"
        onLoad={this.onScriptLoad}
      />
    );
  }
}

MarkerClusterer.propTypes = {
  map: PropTypes.object,
  markers: PropTypes.array,
  options: PropTypes.object,
  onReady: PropTypes.func,
};

MarkerClusterer.defaultProps = {
  markers: [],
  options: {},
  onReady: (markerClusterer) => {},
};

export default MarkerClusterer;
