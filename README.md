# 🗺 react-maps-google

![npm](https://img.shields.io/npm/v/react-maps-google?style=flat-square)
![NPM](https://img.shields.io/npm/l/react-maps-google?style=flat-square)
![npm](https://img.shields.io/npm/dt/react-maps-google?style=flat-square)
![Coveralls github](https://img.shields.io/coveralls/github/ryanhefner/react-maps-google?style=flat-square)
![CircleCI](https://img.shields.io/circleci/build/github/ryanhefner/react-maps-google?style=flat-square)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/ryanhefner/react-maps-google?style=flat-square)


React components that make it easy to add Google maps and markers to your React projects.

## Install

Via [npm](https://npmjs.com/package/react-maps-google)

```sh
npm install --save react-maps-google
```

Via [Yarn](https://yarn.fyi/react-maps-google)

```sh
yarn add react-maps-google
```

## How to use

This package includes the core `GoogleMap` component that renders a Google Map
into your React project. Along with `Marker` and `MarkerClusterer` components that
make it easy to compose markers into your map instances.

### `<GoogleMap />` Component

#### Properties

* `apiKey:String` **Required** - Google Maps Javascript API key. [Guide to get an API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
* `async:Bool` - True loads Google Maps script asynchronously. Defaults to true.
* `options:Object` - Options for customizing/styling the map. [MapOptions Interface](https://google-developers.appspot.com/maps/documentation/javascript/reference/3.exp/map#MapOptions)
* `onReady:Function` - Called when the Google Maps script has initialized `(map) => {}`
* `onBoundsChange:Function` - Called when the `bounds_changed` event is fired from the map. `(map) => {}`
* `onCenterChange:Function` - Called when the `change_changed` event is fired from the map. `(map) => {}`
* `onClick:Function` - Called when the `click` event is fired from the map. `(map, event) => {}`
* `onDoubleClick:Function` - Called when the `dblclick` event is fired from the map. `(map, event) => {}`
* `onDrag:Function` - Called when the `drag` event is fired from the map. `(map) => {}`
* `onDragEnd:Function` - Called when the `dragend` event is fired from the map. `(map) => {}`
* `onDragStart:Function` - Called when the `dragstart` event is fired from the map. `(map) => {}`
* `onHeadingChange:Function` - Called when the `heading_changed` event is fired from the map. `(map) => {}`
* `onIdle:Function` - Called when the `idle` event is fired from the map. `(map) => {}`
* `onMapTypeIdChange:Function` - Called when the `maptypeid_changed` event is fired from the map. `(map) => {}`
* `onMouseMove:Function` - Called when the `mousemove` event is fired from the map. `(map, event) => {}`
* `onMouseOut:Function` - Called when the `mouseout` event is fired from the map. `(map, event) => {}`
* `onMouseOver:Function` - Called when the `mouseover` event is fired from the map. `(map, event) => {}`
* `onProjectionChange:Function` - Called when the `projection_changed` event is fired from the map. `(map) => {}`
* `onRightClick:Function` - Called when the `rightclick` event is fired from the map. `(map, event) => {}`
* `onTilesLoad:Function` - Called when the `tilesloaded` event is fired from the map. `(map) => {}`
* `onTiltChange:Function` - Called when the `tilt_changed` event is fired from the map. `(map) => {}`
* `onZoomChange:Function` - Called when the `zoom_changed` event is fired from the map. `(map) => {}`

All callbacks return a reference to the `google.maps.Map` instance rendered within the
component and the associated `Event` (where supported).

#### Example

```js
import React from 'react';
import GoogleMap, { Marker } from 'react-maps-google';

const ExampleMap = (props) => {
  return (
    <GoogleMap apiKey="[insert your api key here]">
      <Marker position={{lat: 40.7174343, lng: -73.9930319}} />
    </GoogleMap>
  );
}
```

### `<Marker />` Component

#### Properties

* `position:Object` **Required** - The latitude and longitude coordinates to render the marker. `{{lat: 0, lng: 0}}`
* `map:Object` - Reference the to the `google.maps.Map` instance, passed to the component within `GoogleMap`.
* `options:Object` - Options for customizing/styling the marker. [MarkerOptions Interface](https://developers.google.com/maps/documentation/javascript/reference/3.exp/marker?authuser=0#MarkerOptions)
* `onAnimationChange:Function` - Called when the `animation_changed` event is fired from the marker. `(marker) => {}`
* `onClick:Function` - Called when the `click` event is fired from the marker. `(marker, event) => {}`
* `onClickkableChange:Function` - Called when the `clickable_changed` event is fired from the marker. `(marker) => {}`
* `onCursorChange:Function` - Called when the `cursor_changed` event is fired from the marker. `(marker) => {}`
* `onDoubleClick:Function` - Called when the `dblclick` event is fired from the marker. `(marker, event) => {}`
* `onDrag:Function` - Called when the `drag` event is fired from the marker. `(marker, event) => {}`
* `onDragEnd:Function` - Called when the `dragend` event is fired from the marker. `(marker, event) => {}`
* `onDraggableChange:Function` - Called when the `draggable_changed` event is fired from the marker. `(marker) => {}`
* `onDragStart:Function` - Called when the `dragstart` event is fired from the marker. `(marker, event) => {}`
* `onFlatChange:Function` - Called when the `flat_changed` event is fired from the marker. `(marker) => {}`
* `onIconChange:Function` - Called when the `icon_changed` event is fired from the marker. `(marker) => {}`
* `onMouseDown:Function` - Called when the `mousedown` event is fired from the marker. `(marker, event) => {}`
* `onMouseOut:Function` - Called when the `mouseout` event is fired from the marker. `(marker, event) => {}`
* `onMouseOver:Function` - Called when the `mouseover` event is fired from the marker. `(marker, event) => {}`
* `onMouseUp:Function` - Called when the `mouseup` event is fired from the marker. `(marker, event) => {}`
* `onPositionChange:Function` - Called when the `position_changed` event is fired from the marker. `(marker) => {}`
* `onRightClick:Function` - Called when the `rightclick` event is fired from the marker. `(marker, event) => {}`
* `onShapeChange:Function` - Called when the `shape_changed` event is fired from the marker. `(marker) => {}`
* `onTitleChange:Function` - Called when the `title_changed` event is fired from the marker. `(marker) => {}`
* `onVisibleChange:Function` - Called when the `visible_changed` event is fired from the marker. `(marker) => {}`
* `onZIndexChange:Function` - Called when the `zindex_changed` event is fired from the marker. `(marker) => {}`

#### Example

```js
import React, { Component } from 'react';
import GoogleMap, { Marker } from 'react-maps-google';

class ExampleMap extends Component {
  constructor(props) {
    super(props);

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(marker, event) {

  }

  render() {
    return (
      <GoogleMap apiKey="[insert your api key here]">
        <Marker
          position={{lat: 40.7174343, lng: -73.9930319}}
          onClick={this.onMarkerClick}
        />
      </GoogleMap>
    );
  }
}

```

### `<MarkerClusterer />` Component

_[in development]_

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
