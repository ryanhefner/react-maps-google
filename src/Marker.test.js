import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import GoogleMap, { Marker } from './index';

Enzyme.configure({
  adapter: new Adapter(),
});

let component;

describe('<Marker />', () => {
  test('Marker renders', () => {
    component = mount((
      <GoogleMap
        apiKey="AIzaSyCBEacHWc_eghLAoeQaK1pgnTlk5vZUl5k"
      >
        <Marker position={{lat: 40.7174343, lng: -73.9930319}} />
      </GoogleMap>
    ), {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<div style="height: 100%;"></div>');
    component.unmount();
  });
});
