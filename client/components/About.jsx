About = React.createClass({
  render() {
    return (
      <section className="about-section">
        <div className="about-section-container">
          <h2>About Hive Chat</h2>

          <h3>Summary</h3>
          <p>
            This website was built as a sample company chat app using Meteor and
            React.
          </p>

          <h3>Features</h3>
          <ul>
            <li>User registration and log in</li>
            <li>Global room for all employees</li>
            <li>Chat with any other registered employee</li>
            <li>Private chat room for notes with onboarding</li>
          </ul>

          <h3>Components</h3>
          <ul>
            <li>
              <h4><code>App</code></h4>
              <p>
                Conditionally renders content that requires authentication or the
                log in screen. If the user is still logging in, show a 'loading'
                screen without styling. Defines public routes explicitly.
              </p>
            </li>
            <li>
              <h4><code>Header</code></h4>
              <p>
                A link to the global chat and a link to this page! It also includes
                a wrapper to the <code>AccountsUIWrapper</code> component provided
                by Meteor in the basic tutorial.
              </p>
            </li>
            <li>
              <h4><code>AccountsUIWrapper</code></h4>
              <p>
                Renders <code>Templates.loginButtons</code> UI component. This
                handles user registration and login out of the box.
              </p>
            </li>
            <li>
              <h4><code>About</code></h4>
              <p>
                The current component! This is mostly hard-coded HTML to document
                some features of this project in lieu of traditional commenting.
              </p>
            </li>
            <li>
              <h4><code>Login</code></h4>
              <p>
                Wraps the <code>About</code> component. Users can log in using the
                dialog in the header of the page.
              </p>
            </li>
            <li>
              <h4><code>Index</code></h4>
              <p>
                Wraps <code>RoomList</code>, <code>MessageCreate</code>, and
                <code>MessageList</code> components and is the main user interface
                of the application, however it does not maintain any state or data
                subscriptions.
              </p>
            </li>
            <li>
              <h4><code>RoomList</code></h4>
              <p>
                'Smart' component which subscribes to all usernames in the current
                mongo database, provided by the Meteor accounts package. This
                component also adds links to the global chat room and the user's
                private chat. It allows users to filter the list of names and find
                someone to talk to.
              </p>
            </li>
            <li>
              <h4><code>Room</code></h4>
              <p>
                Generates a direct message URL for each user and indicates whether
                a particular room is the current room. Displays a simple link to
                a room.
              </p>
            </li>
            <li>
              <h4><code>MessageCreate</code></h4>
              <p>
                A form with one input field that allows a user to type a message.
                The Session determines whether the room is 'global' or 'direct'
                and what username the message would be directed to, if any. When
                the form is submitted, it reads the user's input and combines it
                with the other two pieces of info, invokes a Meteor method call
                and creates a message.
              </p>
            </li>
            <li>
              <h4><code>MessageList</code></h4>
              <p>
                'Smart' component that subscribes to the <code>Messages</code> collection
                and renders a list of <code>Message</code>s as well as formats an approprite time ago
                message with the help of a <a href="https://gist.github.com/deadkarma/1989808">
                <code>DateHelper</code> module</a>.
              </p>
            </li>
            <li>
              <h4><code>Message</code></h4>
              <p>
                A list-item component without state or subscriptions. An attempt
                at building a semantic and accessible chat bubble.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
});
