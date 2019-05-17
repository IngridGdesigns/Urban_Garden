import React from 'react';
// import {Link} from 'react-router-dom'
import {FaRecycle, FaCarrot,FaUsers } from 'react-icons/fa';
// import Alert from 'react-bootstrap/Alert'




class About extends React.Component {

    render(){
        return (
            <div>
              
             <div className='container'style={{paddingBottom: '10px'}}>
              <div className='row'>
                <h1 className='color1'>What is Urban Garden?</h1>
                <h4>Urban Garden is an app made for anyone who grows edible plants, fruit,
                  herbs and wants to trade with others, or donate to those in need.
                </h4>
              </div>
            </div> 
          
              
              <div className='container' style={{paddingTop: '65px', marginTop: '50px'}}>
                
                <div className='centered'>
                {/* <h2 className='color3'>Our mission: </h2> */}
                <section className='row content' style={{paddingTop:'25px'}}>
                
                  <div className='col-sm-6 col-md-4 color3' >
                  
                    <h4><FaUsers style={{color: 'grey'}}/> Build Community</h4>
                    
                    <p>Make friends and barter for some yummy avocados!</p>
                  </div>
                  <div className='col-sm-6 col-md-4 color3' >

                    <h4><FaRecycle style={{color: 'skyblue'}}/> Barter for a change!</h4>
                    
                    <p>If you have an abundance of rosemary, why not barter for something
                      you may want?
                    </p>
                  </div>
                  <div className='col-sm-6 col-md-4 color3 '>
                    <h4><FaCarrot style={{color: 'orange'}} /> Reduce food waste</h4>
                    <p>Keep giving to other who want food you don't want anymore.</p>
                  </div>
                  </section>
                </div>
                </div>
            </div>
            
        )
    }
}

export default About;

