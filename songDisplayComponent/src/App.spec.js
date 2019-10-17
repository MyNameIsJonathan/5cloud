const React = require('react');
const renderer = require('react-test-renderer');
const App = require('../public/bundle.js');

test('Link changes the class when hovered', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
