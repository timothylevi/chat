// Task component - represents a single todo item
GlobalMessage = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    text: React.PropTypes.string.isRequired,
    user: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.user.name}: {this.props.text}</li>
    );
  }
});
