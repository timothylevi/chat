App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      loggingIn: Meteor.loggingIn(),
      hasUser: !!Meteor.user(),
      isPublic(route) {
        let publicRoutes = ['about'];
        return publicRoutes.includes(route);
      },
      canView() {
        return this.isPublic(FlowRouter.current().route.name) || !!Meteor.user();
      }
    }
  },

  loading() {
    return <div className="loading"></div>;
  },

  getView() {
    return this.data.canView() ? this.props.yield : <About />;
  },

  render() {
    return (
      <div>
        <Header />
        {this.data.loggingIn ? this.loading() : this.getView()}
      </div>
    );
  }
});
