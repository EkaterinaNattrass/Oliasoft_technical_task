import sites, {sitesLoaded, sitesRequested} from './sites';
import configureStore from '../../configureStore';

const hello = () => 'hello world test';

describe('employees', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
    fetchMock.resetMocks();
  })

  const sitesSlice = () => store.getState()?.entities?.sites;

  /*
    Hello world test
  */

  test('hello world test', () => {
    expect(hello()).toBe('hello world test');
  });

  /*
    Solitary reducer tests
  */

  it('should handle initial state', () => {
    expect(sites(undefined, {})).toEqual({list: [], loading: false})
  });

  it('should set loading when requested', () => {
    expect(sites({list: [], loading: false}, sitesRequested()))
      .toEqual({list: [], loading: true})
  });
});
