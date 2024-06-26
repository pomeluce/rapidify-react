import { RouteRecord } from 'react-router-dom';
import front from './front';
import auth from './auth';
import admin from './admin';
import error from './error';

const unknown: RouteRecord = {
  path: RoutePath.UNKNOWN,
  name: RouteName.UNKNOWN,
  component: () => import('@/views/error/404'),
};

const resolver = (route: RouteRecord) => {
  if (!route.meta || !route.children) return route;
  const { auth, guest } = route.meta;

  route.children.map(item => {
    if (!item.meta) item.meta = {};
    if (auth !== undefined && item.meta.auth === undefined) item.meta.auth = auth;
    if (guest !== undefined && item.meta.guest === undefined) item.meta.guest = guest;
    resolver(item);
  });

  return route;
};

export default [front, auth, ...admin, error, unknown].map(item => resolver(item)) as RouteRecord[];

export const ErrorElement = () => import('@/views/error/500');
