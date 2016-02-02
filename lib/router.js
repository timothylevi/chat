const indexRoute = {
  path: '/',
  action: (params, queryParams) => {
    Session.set('room', 'global');
  }
};

const globalRoomShowRoute = {
  path: '/rooms/global',
  action: (params, queryParams) => {
    FlowRouter.go('/');
  }
};

const roomShowRoute = {
  path: '/rooms/:roomId',
  action: (params, queryParams) => {
    Session.set('room', params.roomId);
  }
};

FlowRouter.route(indexRoute.path, { action: indexRoute.action });
FlowRouter.route(globalRoomShowRoute.path, { action: globalRoomShowRoute.action });
FlowRouter.route(roomShowRoute.path, { action: roomShowRoute.action });
