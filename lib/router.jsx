const loginRoute = {
  path: '/login',
  action(params, queryParams) {
    ReactLayout.render(App, { yield: <Login /> });
  }
}

const indexRoute = {
  path: '/',
  action(params, queryParams) {
    Session.set('room', 'global');
    Session.set('username', '');
    ReactLayout.render(App, { yield: <Index /> });
  }
};

const selfRoute = {
  path: '/self',
  action(params, queryParams) {
    Session.set('room', 'direct');
    Session.set('username', Meteor.user().username);
    ReactLayout.render(App, { yield: <Index /> });
  }
}

const messagesRoute = {
  path: '/messages/:username',
  action(params, queryParams) {
    if (Meteor.user().username === params.username) FlowRouter.go('/self');
    Session.set('room', 'direct');
    Session.set('username', params.username);
    ReactLayout.render(App, { yield: <Index /> });
  }
};

const publicRoutes = FlowRouter.group({ name: 'public' });
const authenticatedRoutes = FlowRouter.group({ name: 'authenticated' });

publicRoutes.route( loginRoute.path, { action: loginRoute.action });
authenticatedRoutes.route(indexRoute.path, { action: indexRoute.action });
authenticatedRoutes.route(selfRoute.path, { action: selfRoute.action });
authenticatedRoutes.route(messagesRoute.path, { action: messagesRoute.action });
