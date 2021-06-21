import { createRouter, createWebHistory } from "vue-router";
import ToDevelop from './pages/to-develop';
import ProjectFeatures from './pages/project-features';
import GettingStarted from './pages/getting-started';
import api from './pages/api';
import examples from './pages/examples';
import e2eSuite from '../e2e/suite/';
import Changelog from './pages/changelog';
import Migration from './pages/migration';

const routes = [{
  path: '/',
  name: 'features',
  component: ProjectFeatures,
}, {
  path: '/start',
  name: 'gettingStarted',
  component: GettingStarted,
},
{
  path: '/migration',
  name: 'migration',
  component: Migration,
},
{
  path: '/changelog',
  name: 'changelog',
  component: Changelog,
},
...api,
...examples,
...e2eSuite,
{
  path: '/develop',
  name: 'develop',
  component: ToDevelop,
}];

export default createRouter({
    history: createWebHistory(),
    routes: routes,
});
