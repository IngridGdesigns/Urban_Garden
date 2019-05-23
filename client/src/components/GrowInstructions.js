import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'


class GrowInstructions extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            growstuff: '',
        }
    }
    

    componentDidMount() {
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        const id = this.props.match.params.id;
       
        fetch(`http://localhost:3005/growstuff/${id}`, {
            method: 'GET',
            headers: headers
        })
        .then(res => res.json())
        .then(growstuff => this.setState({ growstuff})
        ).catch(err => (err))
      }



    render() {
        const {growstuff} = this.state
        //console.log(growstuff)
        
        return(
            <div className='container-fluid'>
                 <hr/>
                    <div className='magazine-section my-5'>

                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='single-news mb-4'>
                                 
                                <div className='view overlay rounded z-depth-1-half mb-4'>
                                    <img className='img-fluid' src={growstuff.url} alt='food pics'/>
                                        {/* <a>
                                        <div className='mask rgba-white-slight'></div>
                                        </a> */}
                                </div>

                                <div className='news-data d-flex justify-content-between'>
                                        <Link to='/growstuff' className='light-blue-text color3'>
                                        <h6 className='font-weight-bold'><FaHeart style={{color: 'pink'}}/>Go back</h6>
                                        </Link> 
                                        <p className='font-weight-bold dark-grey-text'>{growstuff.created_on}</p>
                                </div>
                                                           
                                </div>
                                
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <h3 className='font-weight-bold dark-grey-text mb-3'>{growstuff.name}</h3>
                                        <p className='dark-grey-text mb-2'>{growstuff.description}</p>

                                    <h4 className='font-weight-bold dark-grey-text mb-3'>sun requirements</h4>
                                        <p className='dark-grey-text mb-2'>{growstuff.sun_requirements}</p>

                                    <h4 className='font-weight-bold dark-grey-text mb-3'>getting started</h4>
                                    <p className='dark-grey-text mb-2'>{growstuff.sowing_method}</p>

                                    <h4 className='font-weight-bold dark-grey-text mb-3'>find out more</h4>
                                    <p className='dark-grey-text mb-2'>
                                    <a style={{color: 'yellowgreen'}} href={growstuff.wikipedia_url} alt='wiki pages'>wiki</a></p>
                                </div>
                                
                               
                            </div>
                    </div>


                
            </div>
        )
    }
}


export default GrowInstructions

 

