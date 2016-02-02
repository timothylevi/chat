Message = React.createClass({
  render() {
    return (
      <li className="message-list-item">
        <blockquote className="message">
          <cite className="message-cite">
            <h3 className="message-cite-username">
              <a className="message-cite-username-link" href="#"
                title="Chat with User Name directly">
                User Name:
              </a>
            </h3>
            <date className="message-cite-date">However many seconds/minutes/hours/days ago</date>
          </cite>
          <p className="message-text">User Message</p>
        </blockquote>
      </li>
    );
  }
});
