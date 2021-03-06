Meteor.publish('messages', function(room, otherUsername) {
  check(room, String);
  check(otherUsername, String);

  const inGlobalChat = room === 'global' && otherUsername === '';
  const currentUsername = Meteor.users.findOne(this.userId).username;

  if (!this.userId) return this.ready();
  if (inGlobalChat) return Messages.find({ room });
  return Messages.find({
    $or: [
      { room, toUsername: currentUsername, fromUsername: otherUsername },
      { room, toUsername: otherUsername, fromUsername: currentUsername }
    ]
  });
});

Meteor.publish('allUsernames', function() {
  if (!this.userId) return this.ready();
  return Meteor.users.find({}, {fields: {username: 1}});
});
