import React from 'react';
import Router from 'react-router';
import routes from './routes';
import 'core-js';

window.React = React;
window.Router = Router;

Router.run(routes, (Handler) => {
  React.render(
    React.createElement(Handler),
    document.querySelector('#app')
  );
});
