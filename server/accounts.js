Accounts.onCreateUser((options, user) => {
  const username = user.username;
  const messageTexts = [
    'Welcome to Hive Chat, ' + username + '!',
    'This is your own private room.',
    'Click "Global" above to be taken to the global chat',
    'Search for co-workes using the box next to "Global"',
    'Write your message in the box above and press send!',
    'New messages are posted to the top of the screen.',
    'Have fun!'
  ];

  messageTexts.forEach((text) => {
    Messages.insert({
      text: text,
      room: 'direct',
      toUsername: username,
      createdAt: new Date(),
      user: {
        username: username,
        directUrl: "/messages/" + username
      }
    });
  });

  return user;
});
