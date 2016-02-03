Message = React.createClass({
  render() {
    return (
      <li className="message-list-item">
        <blockquote className="message">
          <cite className="message-cite">
            <h3 className="message-cite-username">
              <a className="message-cite-username-link"
                href={`/messages/${this.props.fromUsername}`}
                title={`Chat with ${this.props.fromUsername} directly`}>
                {this.props.fromUsername}:
              </a>
            </h3>
            <date className="message-cite-date" title={this.props.createdAt}>
              {this.props.timeAgo}
            </date>
          </cite>
          <p className="message-text">{this.props.text}</p>
        </blockquote>
      </li>
    );
  }
});
