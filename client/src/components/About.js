import React from 'react';
import {FaRecycle, FaCarrot,FaUsers } from 'react-icons/fa';

class About extends React.Component {

    render(){
        return (
            <div>
              
              <div className='container'style={{paddingBottom: '10px'}}>
              <div className='row mb-3'>
              <div>
                <h1 className='color1'>What is Urban Garden?</h1>
                <h4 className='mb-3'>Urban Garden is an app made for anyone who grows fruits, veggies or 
                  herbs and wants to barter or donate to those in need. Our mission:
                </h4>
                </div>
              </div>
            </div> 
          
              
              <div className='container my-5' style={{paddingTop: '65px', marginTop: '50px'}}>
                <div className='centered'>
                <section className='row content'>
                  <div className='col-sm-6 col-md-4 color3' >
                  
                    <h4><FaUsers style={{color: 'grey'}}/> Build Community</h4>
                    
                    <p>Make friends, get to know your neighbors and barter for some yummy avocados!</p>
                  </div>
                  <div className='col-sm-6 col-md-4 color3' >

                    <h4><FaRecycle style={{color: 'skyblue'}}/> Barter for a change!</h4>
                    
                    <p>If you have an abundance of rosemary, why not barter for something
                      you may want?
                    </p>
                  </div>
                  <div className='col-sm-6 col-md-4 color3 '>
                    <h4><FaCarrot style={{color: 'orange'}} /> Reduce food waste</h4>
                    <p>Keep giving to other's, don't let your food go to waste, donate!</p>
                  </div>
                  </section>
                </div>
                </div>
            </div>
            
        )
    }
}

export default About;

