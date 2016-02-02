import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Navigation from '../../../../src/components/common/navigation';

function setup() {

  let renderer = TestUtils.createRenderer()
  renderer.render(<Navigation/>)
  const output = renderer.getRenderOutput()

  return {
    output,
    renderer
  }
}

describe('components', () => {

  describe('navigation', () => {

    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).to.equal('nav');
    });

  });

});
