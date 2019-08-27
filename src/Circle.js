import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CALLBACK_MAP = {
  'center_changed': 'onCenterChanged',
  'click': 'onClick',
  'dblclick': 'onDoubleClick',
  'drag': 'onDrag',
  'dragend': 'onDragEnd',
  'dragstart': 'onDragStart',
  'mousedown': 'onMouseDown',
  'mousemove': 'onMouseMove',
  'mouseout': 'onMouseOut',
  'mouseover': 'onMouseOver',
  'mouseup': 'onMouseUp',
  'radius_changed': 'onRadiusChanged',
  'rightclick': 'onRightClick',
  'visible_changed': 'onVisibleChanged',
  'zindex_changed': 'onZIndexChanged',
};

export const defaultOptions = {
  fillColor: '#1774ff',
  fillOpacity: 0.2,
  strokeColor: '#1774ff',
  strokeWeight: 2,
};

class Circle extends Component {
  componentDidMount() {
    if (this.props.map) {
      this.renderCircle(this.props);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      map,
      center,
      radius,
      options,
    } = this.props;

    let renderCircle = false;

    if (map !== prevProps.map) {
      renderCircle = true;
    }

    if (!Object.is(center, prevProps.center)) {
      renderCircle = true;
    }

    if (radius !== prevProps.radius) {
      renderCircle = true;
    }

    if (!Object.is(options, prevProps.options)) {
      renderCircle = true;
    }

    if (renderCircle) {
      this.renderCircle(this.props);
    }
  }

  componentWillUnmount() {
    if (!this.circle) {
      return;
    }

    google.maps.event.clearInstanceListeners(this.circle);
    this.circle.setMap(null);
  }

  onCircleCallback(callback, event) {
    if (this.props[callback]) {
      this.props[callback](this.circle, event);
    }
  }

  renderCircle(props) {
    const {
      map,
      options,
      center,
      radius,
    } = props;

    if (!map) {
      return;
    }

    if (!this.circle) {
      this.circle = new google.maps.Circle({
        ...Object.assign({}, defaultOptions, options),
        map,
        center,
        radius,
      });

      Object.keys(CALLBACK_MAP).forEach(key => {
        google.maps.event.addListener(
          this.circle,
          key,
          this.onCircleCallback.bind(this, CALLBACK_MAP[key])
        );
      });
      return;
    }

    this.circle.setOptions({
      ...Object.assign({}, defaultOptions, options),
      map,
      center,
      radius,
    });
  }

  render() {
    return null;
  }
}

Circle.propTypes = {
  map: PropTypes.object,
  center: PropTypes.object.isRequired,
  radius: PropTypes.number,
  options: PropTypes.object,
  onCenterChanged: PropTypes.func,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseUp: PropTypes.func,
  onRadiusChanged: PropTypes.func,
  onRightClick: PropTypes.func,
  onVisibleChange: PropTypes.func,
  onZIndexChange: PropTypes.func,
};

Circle.defaultProps = {
  options: defaultOptions,
  radius: 1000,
  onCenterChanged: (circle) => {},
  onClick: (circle) => {},
  onDoubleClick: (circle) => {},
  onDrag: (circle) => {},
  onDragEnd: (circle) => {},
  onDragStart: (circle) => {},
  onMouseDown: (circle) => {},
  onMouseMove: (circle) => {},
  onMouseOut: (circle) => {},
  onMouseOver: (circle) =>  {},
  onMouseUp: (circle) => {},
  onRadiusChanged: (circle) => {},
  onRightClick: (circle) => {},
  onVisibleChanged: (circle) => {},
  onZIndexChanged: (circle) => {},
};

export default Circle;
