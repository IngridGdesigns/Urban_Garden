






// import React from 'react'
// import {Link} from 'react-router-dom'
// import {FaRecycle, FaCarrot,FaUsers } from 'react-icons/fa'
// import Alert from 'react-bootstrap/Alert'

// class AboutPage extends React.Component {
//     goTo(route) {
//         this.props.history.replace(`${route}`)
//       }
    
//       login() {
//         this.props.auth.login();
//       }
    
//       logout() {
//         this.props.auth.logout();
//       }
    
//       componentDidMount() {
//         const { renewSession } = this.props.auth;
//         if (localStorage.getItem('isLoggedIn') === 'true') {
//           renewSession();
//         }
//       }
    
//     render(){
//         const { isAuthenticated} = this.props.auth;
//         return (
//             <div>
//                 <Alert variant='success bg-image' href='#top'>
//                 <div className='row justify-content-center container'>
//                     <div className='col-10 col-md-10 col-lg-8 col-xl-7'>
//                         <Alert.Heading className='display-3'>Hey, nice to see you</Alert.Heading>
//                         {/* <div className='display-4 text-success mt-3 mb-3'>
//                         Welcome
//                         </div> */}
//                         <p className='lead'>
//                         We're so happy you're here! Please login or register to get started!
//                         <Link></Link>
//                         {/* <Link to={`/}> */}
                      
//                         </p>
//                         <hr />
//                         <div className='row'>
//                         <button id="qsLoginBtn" 
//                             className='btn btn-primary' 
//                             onClick={this.login.bind(this, 'profile')}>Sign up</button>
//                        <button id="qsLoginBtn" 
//                             className='btn btn-primary' 
//                             onClick={this.login.bind(this, 'profile')}>Login</button>
//                         </div>
//                     </div> 
//                 </div>
//                 </Alert>
                 
//                  <div className='container'style={{paddingBottom: '10px'}}>
//               <div className='row'>
//                 <h1 className='color1'>What is Urban Garden?</h1>
//                 <h4>Urban Garden is an app made for anyone who grows edible plants, fruit,
//                   herbs and wants to trade with others, or donate to those in need.
//                 </h4>
//               </div>
//             </div> 
          
              
//               <div className='container' style={{paddingTop: '65px', marginTop: '50px'}}>
                
//                 <div className='centered'>
//                 {/* <h2 className='color3'>Our mission: </h2> */}
//                 <section className='row content' style={{paddingTop:'25px'}}>
                
//                   <div className='col-sm-6 col-md-4 color3' >
                  
//                     <h4><FaUsers style={{color: 'grey'}}/> Build Community</h4>
                    
//                     <p>Make friends and barter for some yummy avocados!</p>
//                   </div>
//                   <div className='col-sm-6 col-md-4 color3' >

//                     <h4><FaRecycle style={{color: 'skyblue'}}/> Barter for a change!</h4>
                    
//                     <p>If you have an abundance of rosemary, why not barter for something
//                       you may want?
//                     </p>
//                   </div>
//                   <div className='col-sm-6 col-md-4 color3 '>
//                     <h4><FaCarrot style={{color: 'orange'}} /> Reduce food waste</h4>
//                     <p>Keep giving to other who want food you don't want anymore.</p>
//                   </div>
//                   </section>
//                 </div>
//                 </div>
//             </div>
           
//         )
//     }
// }

// export default AboutPage;