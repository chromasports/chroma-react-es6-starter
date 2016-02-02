import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { AppContainer } from '../../../src/containers/app-container'

function setup() {

  let renderer = TestUtils.createRenderer()
  renderer.render(<AppContainer/>)
  const output = renderer.getRenderOutput()

  return {
    output,
    renderer
  }
}

describe('containers', () => {

  describe('app-container', () => {

    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).to.equal('section');
      expect(output.props.className).to.equal('app');

      let [ Header ] = output.props.children;

      expect(Header.type).to.be.a('function');
    });

  });

});
