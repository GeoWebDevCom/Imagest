import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const account = this.state;
    this.props.processForm({account});
    // this.props.history.push('/');
  }

  demoLogin() {
    this.props.login({ account: {
      username: "yaakovbeiss",
      password: "password"
    }});
    this.props.history.push('/');
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {

    return (
      <div>
        <NavLink className="back-imgur" exact to='/' >
          <div>back to Imgur</div>
        </NavLink>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <img className="imgur-image" src={window.images.imgur_logo}/>
            <br/>
            <div className="register-box">
              Check out my info at:
            </div>
            <div className="social-box">
              <a className="linkedin logo" href="https://www.linkedin.com/in/yaakovbeiss/" target="_blank">
                <img src={window.images.linkedin_icon} className="linkedin-icon" />
              </a>
            <a className="github logo" href="https://github.com/yaakovbeiss" target="_blank">
              <img src={window.images.github_icon} className="github-icon"  />
            </a>
            <a className="resume logo" href="http://www.yaakovbeiss.com/Yaakov%20Beiss%20resume.pdf" target="_blank">
              <img src={window.images.resume_icon} className="resume-icon" />
            </a>
              <a className="angellist logo" href="https://angel.co/yaakov-beiss" target="_blank">
                <img src={window.images.angellist_icon} className="angellist-icon" />
              </a>
            </div>
            <div className="login-divider">or have fun on imagest!<br></br>
              <div className="errors">{this.renderErrors()}</div>
            </div>
            <div className="login-form">
              <br/>
                <label className="sign-in-text-input">
                  <input type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <br/>

                <br/>
                <label className="sign-in-text-input">
                  <input type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br/>


                <div className="terms">By registering you agree to our terms of service.</div>
              </div>
                <div className="sign-up-buttons">
                  <Link to="/login" className="to-login-link">login instead</Link>
                  <input className="submit-button" type="submit" value="Sign Up" />
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
