var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../util/api_util');

var Navbar = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return {current_tab: this.props.active};
  },

  moodringTab: function(e){
    e.preventDefault();
    this.history.pushState('', '/');
  },

  graphsTab: function(e){
    e.preventDefault();
    this.history.pushState('', '/graphs');
  },

  textTab: function(e){
    e.preventDefault();
    this.history.pushState('', '/textmood');
  },

  twitterTab: function(e){
    e.preventDefault();
    this.history.pushState('', '/twitter');
  },

  logoutTab: function (e) {
    e.preventDefault();
    ApiUtil.logOut();
    this.history.pushState('', '/');
  },

  render: function(){
    var curr = this.state.current_tab;
    var moodring = curr === "moodring" ?
                          <span className="moodring active icon-bar navbar-tab"
                                onClick={this.moodringTab}>Mood Ring</span> :
                          <span className="moodring icon-bar navbar-tab"
                                onClick={this.moodringTab}>Mood Ring</span>;
    var graphs = curr === "graphs" ?
                          <span className="graphs active icon-bar navbar-tab"
                                onClick={this.graphsTab}>Graphs</span> :
                          <span className="graphs icon-bar navbar-tab"
                                onClick={this.graphsTab}>Graphs</span>;
<<<<<<< HEAD
    var text = curr === "text" ?
                          <span className="text active icon-bar navbar-tab"
                                onClick={this.textTab}>Text Mood</span> :
                          <span className="text icon-bar navbar-tab"
=======
    var text = curr === "message" ?
                          <span className="navbar-tab message active"
                                onClick={this.textTab}>Text Mood</span> :
                          <span className="navbar-tab message"
>>>>>>> 44b7b7057e8e7c1fa0681bad89200785760c77a7
                                onClick={this.textTab}>Text Mood</span>;
    var twitter = curr === "twitter" ?
                          <span className="twitter active icon-bar navbar-tab"
                                onClick={this.twitterTab}>Twitter</span> :
                          <span className="twitter icon-bar navbar-tab"
                                onClick={this.twitterTab}>Twitter</span>;
<<<<<<< HEAD
    var logout = curr === "logout" ?
                          <span className="logout active icon-bar navbar-tab last"
                                onClick={this.logoutTab}>Log Out</span> :
                          <span className="logout icon-bar navbar-tab last"
                                onClick={this.logoutTab}>Log Out</span>;
=======
    var logout =  <span className="navbar-tab logout"
                        onClick={this.logoutTab}>Log Out</span>
>>>>>>> 44b7b7057e8e7c1fa0681bad89200785760c77a7

    return(
      <navbar className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid container navbar-container">
          <div className="navbar-header">
            {moodring}
            {graphs}
            {text}
            {twitter}
            {logout}
          </div>
        </div>
      </navbar>
    );
  }
});

module.exports = Navbar;
