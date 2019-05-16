import React from 'react'
import { FaHeart, FaLemon } from 'react-icons/fa';

class MyData extends React.Component {
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
        console.log(this.props)
      
        return(
            <div className='container'>
            {/* <ul>
            {growstuff.map(crop => 
                <li key={crop.id}>
                {crop.name}
                </li>
               
            )}
            </ul> */}
            <div className='row'>
            <hr/>
            {growstuff.map(crop => 
                <div className="col-sm-4 clearfix d-none d-md-block" key={crop.id}>
                <div className="card mb-2 growStuff-card">
                  <img className="growStuff-img"
                    src={crop.url}

                    //src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg"
                    alt="testing photo"
                  />
                  <div className='card-body' cascade>
                    <a href="#!" className="text-muted">
                      <h5>{crop.name}</h5>
                    </a>
                    <div className='card-title'>
                      <strong>
                        <a href={crop.wikipedia_url}>wiki</a>
                      </strong>
                    </div>
                    <div className='card-text'>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      sit amet, consectetur, adipisci.
                    </div>
                    <div className="card-footer px-4">
                      <span className="float-left">cool stuff</span>
                      <span className="float-right">
                       
                        <div
                          placement="top"
                          tag="a"
                          component="i"
                        //   componentClass="ml-3"
                        /><FaHeart/> | <FaLemon/>
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

export default MyData;


   
 