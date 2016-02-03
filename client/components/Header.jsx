Header = React.createClass({
  render() {
    return (
      <header className="site-header">
        <h1 className="site-header-title">
          <a href="/" title="Go to global room">Hive Chat</a>
        </h1>
        <a className="site-header-about-link" href="/about"
          title="About the Hive Chat project">
          About
        </a>
        <div className="site-header-accounts-wrapper">
          <AccountsUIWrapper />
        </div>
      </header>
    );
  }
});
