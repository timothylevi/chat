Meteor.methods({
  createMessage(message) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    const username = Meteor.user().username;

    message.createdAt = new Date();
    message.user = {
      username: username,
      directUrl: "/messages/" + username
    };

    Messages.insert(message);
  }
});
