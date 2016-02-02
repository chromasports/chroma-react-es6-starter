import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Dashboard from '../../../../src/components/pages/dashboard'

function setup() {

  let renderer = TestUtils.createRenderer()
  renderer.render(<Dashboard/>)
  const output = renderer.getRenderOutput()

  return {
    output,
    renderer
  }
}

describe('components', () => {

  describe('dashboard', () => {

    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).to.equal('section');
      expect(output.props.className).to.equal('dashboard');
    });

  });

});
