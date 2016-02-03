Meteor.methods.createMessage = new ValidatedMethod({
  name: 'createMessage',
  validate: new SimpleSchema({
    text: { type: String },
    room: { type: String },
    toUsername: { type: String, optional: true }
  }).validator(),
  run(message) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    message.createdAt = new Date();
    message.fromUsername = Meteor.user().username;

    Messages.insert(message);
  }
});
