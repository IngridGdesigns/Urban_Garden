import React, { Component } from "react";
import { FaLemon, FaPen } from "react-icons/fa";
import Moment from "react-moment";
import "./Profile.css";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      usersdata: {}
    };
  }

  componentWillMount() {
    //mounting profile
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });

      console.log({ userProfile }, "cool user profile from Profile page");
    }
  }

  

  render() {
    const { profile } = this.state;

    return (
      <div className="container">
          {/* <UserBreadCrumb/> */}
        <header className="row profile-area">
          <div className="col-sm-8">
            <img src={profile.picture} alt="profile" style={{ width: "50%" }} />
            <h5>{profile.nickname}</h5>
          </div>

          <div
            className="col-sm-4"
            alt="last sign in"
            style={{ marginTop: "5%" }}
          >
            <p>
              Last login:
              <Moment
                style={{ padding: "3px" }}
                //Displays from a library called moment to change display of date/time
                date={profile.updated_at}
                parse={profile.updated_at}
                format="MMM-D"
              />
              <FaLemon className="color1" style={{ padding: "2px" }} />
            </p>
          </div>

          {/* json string */}

          {/* <pre>{JSON.stringify(profile, null, 2)}</pre>    */}
        </header>

        <hr />

        <div>
          <div>
            <div className="alert alert-success">
              <strong>hello!</strong> see past barters{" "}
              <a href="#" className="alert-link" />
            </div>

            {/* <h6>Email: {profile.email}</h6> */}
            
            <div className="row">
  <div className="col-3">
    <div className="nav flex-column nav-pills-success" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Edit Profile</a>
      <a className="nav-link" id="v-pills-pastBarters-tab" data-toggle="pill" href="#v-pills-pastBarters" role="tab" aria-controls="v-pills-pastBarters" aria-selected="false">Past Barters</a>
      <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
      <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
    </div>
  </div>
  <div className="col-9">
    <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        
           <form name='form'>
           <h4>Edit profile</h4>
        <p>People on UrbanGarden will get to know you with the info below!</p>
                            <div className='form-group form-row'>
                              
                                <label className='col-md-2 col-form-label text-md-right'
                                    htmlFor='Name'
                                    readOnly>
                                    FirstName
                                    </label>
                                    <div className='col-md-4'>
                                    <input 
                                        type='text'
                                        className='form-control'
                                        name='FirstName'
                                        id='nameInput'
                                        placeholder='write name'
                                        />
                                    </div>
                                        Last Name
                                    <div className='col-md-4'>
                                        <input type='text'
                                            className='form-control'
                                            name='lastName'
                                            id='lastName'
                                            placeholder='lastName'
                                            />
                                   
                                </div>
                            </div>
                            
                            <div className='form-group form-row'>
                              
                                <label
                                    className='col-md-2 col-form-label text-md-right'
                                    htmlFor='username'
                                    >
                                    urbangarden.com/
                                </label>
                        <div className='col-md-4'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder={profile.nickname}
                                name='Username'
                                id='Username'
                               />
                        </div>
                        
                    
                    </div>

                            <div className='form-group form-row'>
                                <label
                                    className='col-md-2 col-form-label text-md-right'
                                    htmlFor='location'>
                                    Location
                                </label>
                        <div className='col-md-4'>
                            <input
                                type='text'
                                className='form-control'
                                name='location'
                                placeholder='you can add your zipcode here'
                                id='location'
                               />
                        </div>
                        
                    
                    </div>

                     <div className='form-group form-row'>
                        <label className='col-md-2 text-md-right' htmlFor='description'>
                            Description
                        </label>
                     <div className='col-md-10'>
                         <textarea
                         className='form-control'
                         rows='4'
                         cols='50'
                         name='description'
                         type='text'
                         id='desInput'
                         placeholder='Tell us a little about yourself'
                        
                         />
                     </div>
                    </div>

                     <div className='form-group form-row mb-0'>
                        <div className='offset-md-2 col-md-10'>
                     
                     </div>
                     </div>
                     <button className='btn btn-success d-block ml-auto'
                     id='addNewPost'
                     >
                         Edit
                 </button>
                 </form>
          
        ...</div>
      <div className="tab-pane fade" id="v-pills-pastBarters" role="tabpanel" aria-labelledby="v-pills-pastBarters-tab">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        
   
        <h4>Past Barter history</h4>
     <p>See your barter history below!</p>
      
          </div>
        </div>
      <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        
   
        <h4>Messages</h4>
     <p>No messages at this time</p>
        
          </div>
        </div>
        
      
      
      <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        
   
        <h4>Settings</h4>
     <p>Coming soon!</p>
        
          </div>
        </div>
    
    </div>
  </div>
</div>
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

// componentDidMount() { 
//   const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
//   const id = this.props.match.params.user_id //get by id


//   fetch(`http://localhost:3005/usersdata/${id}`,{
//       method: 'GET',
//       headers: headers, 
// }).then(res => res.json())
//   .then(usersdata => this.setState({ usersdata})
// ).catch(err => console.log(err))
// }

