import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { AppContainer } from '../../../../src/client/containers/app-container'

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
    });

  });

});
