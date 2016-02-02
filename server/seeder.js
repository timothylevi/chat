Meteor.startup(function () {
  Factory.define('message', Messages, {
    text: () => { return Fake.sentence() },
    createdAt: () => { return new Date() },
    user: () => {
      return {
        username: Fake.user({ fields: ['username'] })['username'],
        directUrl: "http://www.wikipedia.org"
      };
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