# Hive Chat

## Summary
This website was built as a sample company chat app using Meteor and React. The project uses Meteor best practices, considering security and performance.

## Features
* User registration and log in
* Global room for all employees
* Chat with any other registered employee
* Private chat room for notes with onboarding

## Improvements
List of future improvements to the site would include a more flexible room model (which is only virtual now), pagination of messages, testing, load testing and scalability, and a more comprehensive style guide.

## Components

### App
Conditionally renders content that requires authentication or the
log in screen. If the user is still logging in, show a 'loading'
screen without styling. Defines public routes explicitly.

### Header
A link to the global chat and a link to this page! It also includes a wrapper to the `AccountsUIWrapper` component provided by Meteor in the basic tutorial.

### AccountsUIWrapper
Renders `Templates.loginButtons` UI component. This handles user registration and login out of the box.

### About
This is mostly hard-coded HTML to document some features of this project in lieu of traditional commenting.

### Index
Wraps `RoomList`, `MessageCreate`, and `MessageList` components and is the main user interface of the application, however it does not maintain any state or data subscriptions.

### RoomList
'Smart' component which subscribes to all usernames in the current mongo database, provided by the Meteor accounts package. This component also adds links to the global chat room and the user's private chat. It allows users to filter the list of names and find someone to talk to.

### Room
Generates a direct message URL for each user and indicates whether a particular room is the current room. Displays a simple link to a room.

### MessageCreate
A form with one input field that allows a user to type a message. The Session determines whether the room is 'global' or 'direct' and what username the message would be directed to, if any. When the form is submitted, it reads the user's input and combines it with the other two pieces of info, invokes a Meteor method call and creates a message.

### MessageList
'Smart' component that subscribes to the `Messages` collection and renders a list of `Message`s as well as formats an approprite time ago message with the help of a [`DateHelper` module](https://gist.github.com/deadkarma/1989808).

### Message
A list-item component without state or subscriptions. An attempt
at building a semantic and accessible chat bubble.
