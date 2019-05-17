import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

class GrowCrop extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            growstuff: '',
        }
    }

    componentDidMount() {
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        const randomNum =  getRandomInt(1, 25);
        //const id = this.match.params.id * Math.floor(Math.random() * 2)
        fetch(`http://localhost:3005/growstuff/${randomNum}`, {
            method: 'GET',
            headers: headers
        })
        .then(res => res.json())
        .then(data => this.setState({ growstuff: data})
        ).catch(err => (err))
      }



    render() {
        const {growstuff} = this.state
        console.log(growstuff)
        
        return(
            <div>
               
                 <hr/>

                    <div className='magazine-section my-5'>

                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='single-news mb-4'>
                                 
                                <div className='view overlay rounded z-depth-1-half mb-4'>
                                    <img className='img-fluid' src={growstuff.url} alt='Sample image'/>
                                        <a>
                                        <div className='mask rgba-white-slight'></div>
                                        </a>
                                </div>

                                <div className='news-data d-flex justify-content-between'>
                                        <Link to={`/growstuff`} className='light-blue-text color3'>
                                        <h6 className='font-weight-bold'><FaHeart style={{color: 'pink'}}/>Read more</h6>
                                        </Link> 
                                        <p className='font-weight-bold dark-grey-text'>{growstuff.created_on}</p>
                                </div>
                                                           
                                </div>
                                
                                </div>
                                <div className='col-lg-6 col-md-6'>
                                    <h3 className='font-weight-bold dark-grey-text mb-3'><a>{growstuff.name}</a></h3>
                                        <p className='dark-grey-text mb-2'>{growstuff.description}</p>

                                    <h4 className='font-weight-bold dark-grey-text mb-3'>sun requirements</h4>
                                        <p className='dark-grey-text mb-2'>{growstuff.sun_requirements}</p>

                                    <h4 className='font-weight-bold dark-grey-text mb-3'>getting started</h4>
                                    <p className='dark-grey-text mb-2'>{growstuff.sowing_method}</p>

                                    <h4 className='font-weight-bold dark-grey-text mb-3'>find out more</h4>
                                    <p className='dark-grey-text mb-2'>
                                    <a style={{color: 'yellowgreen'}} href={growstuff.wikipedia_url}>wiki</a></p>
                                </div>
                                
                               
                            </div>
                    </div>


                
            </div>
        )
    }
}


export default GrowCrop

 

