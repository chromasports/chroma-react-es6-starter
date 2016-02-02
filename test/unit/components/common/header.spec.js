import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Header from '../../../../src/components/common/header'

function setup() {

  let renderer = TestUtils.createRenderer()
  renderer.render(<Header/>)
  const output = renderer.getRenderOutput()

  return {
    output,
    renderer
  }
}

describe('components', () => {

  describe('headers', () => {

    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).to.equal('header');
    });

  });

});
