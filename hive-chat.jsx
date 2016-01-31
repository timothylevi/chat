// TODO: Rooms = new Mongo.Collection("rooms");
Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Meteor.subscribe("messages");

  Meteor.startup(function () {
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}

if (Meteor.isServer) {
  // TODO: Only publish public Messages for everyone
  // Think about implementation
  Meteor.publish("messages", function() {
    return Messages.find();
  });
}

Meteor.methods({
  createMessage(text) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Messages.insert({
      text: text,
      edited: false,
      createdAt: new Date(),
      user: {
        id: Meteor.userId(),
        name: Meteor.user().username
      }
    });
  },

  deleteMessage(messageId) {
    const message = Messages.findOne(messageId);
    if (message.user.id !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Messages.remove(messageId);
  },

  updateMessage(messageId, text) {
    const message = Messages.findOne(messageId);
    if (message.user.id !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Messages.update(messageId, {
      $set: {
        edited: true,
        updatedAt: new Date(),
        text: text
      }
    });
  }
});
