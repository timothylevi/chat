Meteor.publish('messages', () => {
  return Messages.find({});
});
