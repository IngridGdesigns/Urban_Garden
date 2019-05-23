import React from 'react'
import { FaHeart} from 'react-icons/fa';
import UserBreadCrumb from './UserBreadCrumb'
import { Link } from 'react-router-dom'

class GrowStuff extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            growstuff: [],
        }
    }


    componentDidMount() {
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`, 'Content-Type': 'application/json'}
        fetch('http://localhost:3005/growstuff', {
            method: 'GET',
            headers: headers, 
            
        })
          .then(res => res.json())
          .then(data => this.setState({ growstuff: data.growstuff })
        ).catch(err => (err))
    }
    render(){
        const { growstuff } = this.state
        
        const MAX_LENGTH = 55; // declared to only show up to 55 characters, more than that gets cut to "Read more" link
      
        return(
            <div className='container'>
              <UserBreadCrumb />
              <h3>Welcome to the community growstuff page, you can find just about any fruit or veggie!</h3>
            <div className='containter-fluid'>
            <div className='row'>
            <hr/>

            {/* col-sm-4 clearfix d-none d-md-block */}
            {growstuff.map(crop => 
            
                <div className='card-column col-md-6 col-lg-4' key={crop.id} >
                <div className='card mb-2 growStuff-card'>
               
                 <img className='growStuff-img'
                    src={crop.url}
                    alt='different types of crops'
                  />  
                  <div className='card-body'>
                    <Link to={`/growinstructions/${crop.id}`} className='text-muted'>
                      <h5>{crop.name}</h5>
                    </Link>
                    <div className='card-title'>
                      <strong>
                        <a href={crop.wikipedia_url}>wikipedia</a>
                      </strong>
                    </div>

                    { crop.description.length > MAX_LENGTH ? (

                    <div className='card-text'>
                      {`${crop.description.substring(0, MAX_LENGTH)}...`} 
                      <Link className='color3' to={`/growinstructions/${crop.id}`}>Read more</Link>
           
                    </div>
                      ) : <div>{crop.description}</div>
                    }
                    <div className='card-footer px-4'>
                      <span className='float-left'>{crop.sun_requirements}</span>
                      <span className='float-right'>
                       
                        <div
                          placement='top'
                           className='ml-3'
                        /><FaHeart style={{color: 'pink'}}/>
                      </span>
                    </div>
                  </div>
                </div> 
                 </div>  )}
             </div>   
            </div>
          </div>
        )
    }
}

export default GrowStuff;


   
 