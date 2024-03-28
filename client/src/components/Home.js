import React from 'react'
import {Link} from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'

class Home extends React.Component {

    render(){
        return (
          <div>
            <div className='container'style={{paddingBottom: '10px'}}>
 
            <section className='view'>

            <div className='row'>

              <div className='col-md-6'>

                <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                  <h1 className='heading display-3 color1'>Welcome to Urban Garden!</h1>
                  <h4 className='subheading mb-3'>
                    You are more than welcome to visit our barter page
                    to start seeing great opportunities to swap fresh food
                    with awesome people.
                    
                  </h4>
                  <div className='mr-auto mb-3'>

                  <Link to={`/dashboard`}> 
                  <button type='button' 
                    className='btn btn-lily btn-margin btn-rounded'
                    >Get started 
                    <FaHeart style={{color: 'pink', paddingLeft: '3px'}}/>
                  </button></Link>

                  </div>
                </div>

              </div>

              <div className='col-md-6'>

                <div className='view'>
                  <img className='img-fluid' 
                    src='https://images.pexels.com/photos/1586529/pexels-photo-1586529.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'  alt='lemonade'/>
                  {/* <div className='mask flex-center hm-gradient'>
                  <caption>yummy lemonade</caption>
                  </div> */}
                </div>

              </div>
            </div>
          </section>
        </div>
       
    </div>
            
        )
    }
}

export default Home;

