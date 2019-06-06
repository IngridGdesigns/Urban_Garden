import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { FaGrinHearts } from 'react-icons/fa';


class ListPosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_items: [],
 
        }
    }

    render(){
           
        return(
        <div className='container-fluid'>
            <div className='row'>

            {this.state.user_items === null && <div className="loader centered"></div>}

                {/* col-sm-6 col-md-4 */}

                {this.props.user_items && this.props.user_items.filter(item=> {
                    if(!this.props.search){
                    return true;
                    } else if( this.props.search.toLowerCase() === item.item_name.toLowerCase() ||
                     this.props.search.toLowerCase() === item.username.toLowerCase()){
                         return this.props.search;
                     }
                    
                }).map(listed => 
                <div className='card-column listposts-card col-md-6 col-lg-4' 
                        // style={{'paddingTop': '10px', overflow:'hidden', maxWidth: '100%'}}
                    key={listed.item_id}>

                    <Link to={`/listing/${listed.item_id}`}>

                    <img className='card-top img-fluid' 
                        src={listed.url}
                        style={{verticalAlign: 'middle'}}
                    />  
                    
                   <ul className='list-group listposts'>
                        <li className='list-group-item'>
                            <span className='badge float-left'><FaGrinHearts/></span>
                            <span className='float-right'>{listed.zipcode}</span>
                            {listed.username}
                        </li>
                    </ul>

                    <div className='card-img-overlay'>
                        <div className='card-subtitle centered' style={{backgroundColor: 'black',  opacity: '0.5'}}>
                            <h3 className='text-center'>{listed.item_name} </h3>
                        </div>
                    </div>
                    </Link>
                </div>
                 )}
            </div>
        </div>
        )
    }
}

export default ListPosts;
