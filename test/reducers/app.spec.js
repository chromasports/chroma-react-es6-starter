import reducer, { initialState } from  '../../src/reducers/app';
import { APP_LOADING, APP_LOADED } from '../../src/actions';

const reducerName = 'app';

describe(`reducers`, () => {

  describe(`${reducerName}`, () => {

    it('should return initialState', () => {

      expect(reducer(undefined, {})).to.deep.equal(initialState);

    });

    it('should handle app loading', () => {

      expect(reducer(initialState, { type: APP_LOADING })).to.deep.equal({
        ...initialState,
        loading: true
      });

    });

    it('should handle app loaded', () => {

      expect(reducer(undefined, { type: APP_LOADED })).to.deep.equal({
        ...initialState,
        loading: false
      });

    });

  });

});
