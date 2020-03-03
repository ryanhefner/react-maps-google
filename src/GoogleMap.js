import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import cleanProps from 'clean-react-props';

const EXCLUDE_PROPS = [
  'async',
  'defer',
  'onClick',
  'onDoubleClick',
  'onDrag',
  'onDragEnd',
  'onDragStart',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
];

const CALLBACK_MAP = {
  'bounds_changed': 'onBoundsChange',
  'center_changed': 'onCenterChange',
  'click': 'onClick',
  'dblclick': 'onDoubleClick',
  'drag': 'onDrag',
  'dragend': 'onDragEnd',
  'dragstart': 'onDragStart',
  'heading_changed': 'onHeadingChange',
  'idle': 'onIdle',
  'maptypeid_change': 'onMapTypeIdChange',
  'mousemove': 'onMouseMove',
  'mouseout': 'onMouseOut',
  'mouseover': 'onMouseOver',
  'projection_changed': 'onProjectionChange',
  'rightclick': 'onRightClick',
  'tilesloaded': 'onTilesLoad',
  'tilt_changed': 'onTiltChange',
  'zoom_changed': 'onZoomChange',
};

if (typeof window !== 'undefined') {
  window['reactMapsGoogleInstances'] = [];
  window['reactMapsGoogleInit'] = () => {
    window['reactMapsGoogleInstances'].forEach(instance => instance());
  };
}

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    const scriptLoaded = typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.Map
      ? true
      : false;

    this.state = {
      map: null,
      scriptLoaded,
    };

    this.onScriptLoad = this.onScriptLoad.bind(this);
    this.onScriptInit = this.onScriptInit.bind(this);

    if (typeof window !== 'undefined') {
      window['reactMapsGoogleInstances'].push(this.onScriptInit);
    }
  }

  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate() {
    this.refreshMapSettings(this.props);
  }

  componentWillUnmount() {
    const {
      map,
    } = this.state;

    if (!map) {
      return;
    }

    google.maps.event.clearInstanceListeners(map);
  }

  refreshMapSettings(props) {
    const {
      map,
    } = this.state;

    if (!map) {
      return;
    }

    const {
      options,
    } = props;

    map.setOptions(options);
  }

  onScriptLoad() {
    this.setState({
      scriptLoaded: true,
    });
  }

  onScriptInit() {
    this.renderMap();
  }

  onMapCallback(callback, event) {
    const {
      map,
    } = this.state;

    this.props[callback](map, event);
  }

  renderMap() {
    if (this.state.map) {
      return false;
    }

    if (!window.google || !window.google.maps || !window.google.maps.Map) {
      return false;
    }

    const {
      options,
      onReady,
    } = this.props;

    const mapElement = ReactDOM.findDOMNode(this.mapRef);

    if (!mapElement) {
      return false;
    }

    const map = new google.maps.Map(mapElement, options);

    Object.keys(CALLBACK_MAP).forEach(key => {
      google.maps.event.addListener(
        map,
        key,
        this.onMapCallback.bind(this, CALLBACK_MAP[key])
      );
    });

    this.setState({
      map,
    });

    onReady(map);
    return true;
  }

  render() {
    const {
      apiKey,
      children,
    } = this.props;

    const {
      map,
      scriptLoaded,
    } = this.state;

    const clonedChildren = React.Children.toArray(children).map(child => {
      return React.cloneElement(child, {
        map,
      });
    });

    return (
      <React.Fragment>
        {scriptLoaded === false && (
          <Script
            url={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=reactMapsGoogleInit`}
            onLoad={this.onScriptLoad}
            async={this.props.async ? `async` : false}
            defer={this.props.defer ? `defer` : false}
          />
        )}
        <div
          {...cleanProps(this.props, EXCLUDE_PROPS)}
          ref={element => this.mapRef = element}
          style={{height: '100%'}}
        />
        {clonedChildren}
      </React.Fragment>
    );
  }
}

GoogleMap.propTypes = {
  apiKey: PropTypes.string.isRequired,
  async: PropTypes.bool,
  options: PropTypes.object,
  onBoundsChange: PropTypes.func,
  onCenterChange: PropTypes.func,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  onHeadingChange: PropTypes.func,
  onIdle: PropTypes.func,
  onMapTypeIdChange: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onProjectionChange: PropTypes.func,
  onRightClick: PropTypes.func,
  onTilesLoad: PropTypes.func,
  onTiltChange: PropTypes.func,
  onZoomChange: PropTypes.func,
  onReady: PropTypes.func,
};

GoogleMap.defaultProps = {
  options: {
    center: {
      lat: 40.730610,
      lng: -73.935242,
    },
    zoom: 12,
  },
  async: true,
  onBoundsChange: () => {},
  onCenterChange: () => {},
  onClick: () => {},
  onDoubleClick: () => {},
  onDrag: () => {},
  onDragEnd: () => {},
  onDragStart: () => {},
  onHeadingChange: () => {},
  onIdle: () => {},
  onMapTypeIdChange: () => {},
  onMouseMove: () => {},
  onMouseOut: () => {},
  onMouseOver: () => {},
  onProjectionChange: () => {},
  onRightClick: () => {},
  onTilesLoad: () => {},
  onTiltChange: () => {},
  onZoomChange: () => {},
  onReady: () => {},
};

export default GoogleMap;
