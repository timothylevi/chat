Meteor.startup(function () {
  Factory.define('message', Messages, {
    text() {
      return Fake.sentence();
    }
  });

  Messages.remove({});
  const messagesIsEmpty = Messages.find({}).count() === 0;

  if (messagesIsEmpty) {
    for (let i = 0; i < 10; i++) {
      Factory.create('message');
    }
  }
});
