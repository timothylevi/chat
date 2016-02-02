User = React.createClass({
  render() {
    return (
      <form className="user-form">
        <h2 className="user-form-title">Log In or Sign Up</h2>
        <input className="user-form-username" type="text" placeholder="username" />
        <input className="user-form-password" type="password" placeholder="password" />
        <button className="user-form-login">Log In</button>
        <button className="user-form-signup">Sign Up</button>
      </form>
    );
  }
});
