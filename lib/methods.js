Meteor.methods.createMessage = new ValidatedMethod({
  name: 'createMessage',
  validate: new SimpleSchema({
    message: { type: Object },
    'message.text': { type: String },
    'message.room': { type: String },
    'message.username': { type: String }
  }).validator(),
  run(message) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    const username = Meteor.user().username;

    message.createdAt = new Date();
    message.fromUsername = username;

    Messages.insert(message);
  }
});
