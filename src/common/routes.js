import Home from 'Containers/Home/Home';
import App from 'Containers/App/App';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home
      }
    ]
  }
];
