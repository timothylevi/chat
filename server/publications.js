Meteor.publish('messages', function(room, otherUsername) {
  const inGlobalChat = room === 'global' && otherUsername === null;
  const currentUsername = Meteor.users.findOne(this.userId).username;

  if (!this.userId) return this.ready();
  if (inGlobalChat) return Messages.find({ room });
  return Messages.find({
    $or: [
      { room, toUsername: currentUsername, "user.username": otherUsername },
      { room, toUsername: otherUsername, "user.username": currentUsername }
    ]
  });
});

Meteor.publish('allUsernames', function() {
  if (!this.userId) return this.ready();
  return Meteor.users.find({}, {fields: {username: 1}});
});
