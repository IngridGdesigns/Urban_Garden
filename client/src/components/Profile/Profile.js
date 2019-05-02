import React, { Component } from 'react';
// import { Panel, Label} from 'react-bootstrap';
import { FaLemon } from 'react-icons/fa';
import './Profile.css';
// import Dashboard from '../Dashboard';

class Profile extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     users: []
  //   }
  // }
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <header header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <label><FaLemon glyph="user" /> Nickname</label>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </header>
        </div>
       
      </div>
    );
  }
}

export default Profile;
