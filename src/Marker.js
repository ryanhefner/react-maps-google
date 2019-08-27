import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CALLBACK_MAP = {
  'animation_changed': 'onAnimationChange',
  'click': 'onClick',
  'clickable_changed': 'onClickableChange',
  'cursor_changed': 'onCursorChange',
  'dblclick': 'onDoubleClick',
  'drag': 'onDrag',
  'dragend': 'onDragEnd',
  'draggable_changed': 'onDraggableChange',
  'dragstart': 'onDragStart',
  'flat_changed': 'onFlatChange',
  'icon_changed': 'onIconChange',
  'mousedown': 'onMouseDown',
  'mouseout': 'onMouseOut',
  'mouseover': 'onMouseOver',
  'mouseup': 'onMouseUp',
  'position_changed': 'onPositionChange',
  'rightclick': 'onRightClick',
  'shape_changed': 'onShapeChange',
  'title_changed': 'onTitleChange',
  'visible_changed': 'onVisibleChange',
  'zindex_changed': 'onZIndexChange',
};

class Marker extends Component {
  componentDidMount() {
    if (this.props.map) {
      this.renderMarker(this.props);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      map,
      position,
      options,
    } = this.props;

    let renderMarker = false;

    if (map !== prevProps.map) {
      renderMarker = true;
    }

    if (!Object.is(position, prevProps.position)) {
      renderMarker = true;
    }

    if (!Object.is(options, prevProps.options)) {
      renderMarker = true;
    }

    if (renderMarker) {
      this.renderMarker(this.props);
    }
  }

  componentWillUnmount() {
    if (!this.marker) {
      return;
    }

    google.maps.event.clearInstanceListeners(this.marker);
    this.marker.setMap(null);
  }

  onMarkerCallback(callback, event) {
    if (this.props[callback]) {
      this.props[callback](this.marker, event);
    }
  }

  renderMarker(props) {
    const {
      map,
      options,
      position,
      width,
      height,
    } = props;

    if (!map) {
      return;
    }

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        ...options,
        map,
        position,
      });

      Object.keys(CALLBACK_MAP).forEach(key => {
        google.maps.event.addListener(
          this.marker,
          key,
          this.onMarkerCallback.bind(this, CALLBACK_MAP[key])
        );
      });
      return;
    }

    this.marker.setOptions({
      ...options,
      map,
      position,
    });
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  map: PropTypes.object,
  options: PropTypes.object,
  position: PropTypes.object.isRequired,
  onAnimationChange: PropTypes.func,
  onClick: PropTypes.func,
  onClickableChange: PropTypes.func,
  onCursorChange: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDraggableChange: PropTypes.func,
  onDragStart: PropTypes.func,
  onFlatChange: PropTypes.func,
  onIconChange: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseUp: PropTypes.func,
  onPositionChange: PropTypes.func,
  onRightClick: PropTypes.func,
  onShapeChange: PropTypes.func,
  onTitleChange: PropTypes.func,
  onVisibleChange: PropTypes.func,
  onZIndexChange: PropTypes.func,
};

Marker.defaultProps = {
  options: {},
  onAnimationChange: (marker) => {},
  onClick: (marker, event) => {},
  onClickableChange: (marker) => {},
  onCursorChange: (marker) => {},
  onDoubleClick: (marker, event) => {},
  onDrag: (marker, event) => {},
  onDragEnd: (marker, event) => {},
  onDraggableChange: (marker) => {},
  onDragStart: (marker, event) => {},
  onFlatChange: (marker) => {},
  onIconChange: (marker) => {},
  onMouseDown: (marker, event) => {},
  onMouseOut: (marker, event) => {},
  onMouseOver: (marker, event) => {},
  onMouseUp: (marker, event) => {},
  onPositionChange: (marker) => {},
  onRightClick: (marker, event) => {},
  onShapeChange: (marker) => {},
  onTitleChange: (marker) => {},
  onVisibleChange: (marker) => {},
  onZIndexChange: (marker) => {},
};

export default Marker;
