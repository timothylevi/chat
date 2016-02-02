Meteor.publish('messages', (room, otherUserId) => {
  const ownUserId = this.userId;

  return Messages.find();
});

Meteor.publish('allUsernames', () => {
  return Meteor.users.find({}, {fields: {username: 1}});
});

Meteor.publish('rooms', () => {
  return Rooms.find({});
});
