import React from 'react'
import { FaHeart, FaLemon } from 'react-icons/fa';
import { Breadcrumb } from 'react-bootstrap';
import UserBreadCrumb from './UserBreadCrumb'

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
        
        const MAX_LENGTH = 55;
      
        return(
            <div className='container'>
          <UserBreadCrumb />
            <div className='row'>
            <hr/>
            {growstuff.map(crop => 
                <div className='col-sm-4 clearfix d-none d-md-block' key={crop.id}>
                <div className='card mb-2 growStuff-card'>
                  <img className='growStuff-img'
                    src={crop.url}
                    alt='different types of crops'
                  />
                  <div className='card-body'>
                    <a href='#!' className='text-muted'>
                      <h5>{crop.name}</h5>
                    </a>
                    <div className='card-title'>
                      <strong>
                        <a href={crop.wikipedia_url}>wiki</a>
                      </strong>
                    </div>

                    { crop.description.length > MAX_LENGTH ? (

                    <div className='card-text'>
                      {`${crop.description.substring(0, MAX_LENGTH)}...`} <a className='color3' href='#'>Read more</a>
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
        )
    }
}

export default GrowStuff;


   
 