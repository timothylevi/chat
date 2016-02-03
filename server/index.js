Meteor.startup(function () {
  BrowserPolicy.content.disallowInlineScripts();

  Messages._ensureIndex({ "room": 1, "toUserName": 1, "fromUsername": 1});
});

Accounts.onCreateUser((options, user) => {
  const username = user.username;
  const messageTexts = [
    'Welcome to Hive Chat, ' + username + '!',
    'This is your own private room.',
    'Click "Global" above to be taken to the global chat',
    'Search for co-workers using the first box with "Global"',
    'Write your message in the box above and press "Send Message"!',
    'New messages are posted to the top of the screen.',
    'Have fun!'
  ].reverse();

  messageTexts.forEach((text) => {
    Messages.insert({
      text: text,
      room: 'direct',
      toUsername: username,
      fromUsername: username,
      createdAt: new Date()
    });
  });

  return user;
});
