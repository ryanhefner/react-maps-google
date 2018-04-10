import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import GoogleMap, { Marker } from './index';

Enzyme.configure({
  adapter: new Adapter(),
});

let component;

describe('<GoogleMap />', () => {
  test('Map renders', () => {
    component = mount(<GoogleMap apiKey="AIzaSyCBEacHWc_eghLAoeQaK1pgnTlk5vZUl5k" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<div style="height: 100%;"></div>');
    component.unmount();
  });
});
