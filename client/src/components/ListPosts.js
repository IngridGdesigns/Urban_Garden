import React, {Component} from 'react'
// import SearchPosts from './SearchPosts'
import { Link } from 'react-router-dom'
// import { FaComment, FaRegStar} from 'react-icons/fa';
// import imageData from './imageData';
// import Image from './Image'


class ListPosts extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_items: null,
        
            
        }
    }

    // componentWillMount() {
    //     const { getAccessToken } = this.props.auth;
    //     const headers = { 'Authorization': 'Bearer ${getAccessToken()}'}
    //     const url = 'http://localhost:3005/user_items';
    // }

    // componentDidMount() {
    //     fetch('/user_items')
    //         .then(res => res.json())
    //         .then(user_items => this.setState({user_items}, console.log(user_items, 'User items showing??'))
    //     )       
    // }

    componentDidMount() {
        const headers = { 'Authorization': `Bearer ${this.props.auth.accessToken}`}
        fetch('http://localhost:3005/user_items', {
            method: 'GET',
            headers: headers, 
        })
          .then(res => res.json())
          .then(user_items => this.setState({ user_items }, console.log({user_items}))
        ).catch(error => console.log('Error', error))
      }

     

    render(){
        const {user_items} = this.state
        // let ranNum = Math.floor(Math.random() * 20)

        // function randomWholeNum() {

        //     // Only change code below this line.
          
        //     return Math.floor(Math.random() * 10);
        //   }

          

        let smallImages = [
            "https://mdbootstrap.com/img/Others/documentation/img%20(145)-mini.jpg",
            "https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg",
            "https://mdbootstrap.com/img/Others/documentation/img%20(150)-mini.jpg",
            "https://mdbootstrap.com/img/Others/documentation/img%20(40)-mini.jpg",
            "https://mdbootstrap.com/img/Others/documentation/img%20(10)-mini.jpg"
            
          ];
        
         // const randomImga = [  "https://mdbootstrap.com/img/Others/documentation/img%20(" + Math.floor(Math.random() * 50)+ ")-mini.jpg"]
      //    let arr = ['avocado', 'lemon', 'mint', 'mango', 'watermelon', 'blackberry']
      //    let images = arr.map( (name, index) => {
      //       return <img key={index} className="img-responsive" alt="food" src={require(`./food/${name}.jpg`)} />
      //   } );                                                    //src={require(`./public/food/${name}.jpg`)} />
      //   // const imageFruit = imageData.map(item => <Image key={item.id} item={item}/>)
    
      // const {images } = this.state
          
                
         
   //let randomImg = Math.floor(Math.random() * 60);

 
          let imageCount = smallImages.length;
          let i = 0;

        return(
        <div className='container-fluid'>
            <div className='row'>
            {this.state.user_items === null && <p>Loading posts...</p>}
                {/* col-sm-6 col-md-4 */}
                {this.state.user_items && user_items.map(listed => 
                <div className='card-column col-md-6 col-lg-4' 
                        style={{'paddingTop': '10px'}}
                        key={listed.item_id}>
                    <Link to={`/listing/${listed.item_id}`}>
              
                <img className='card-img-top fluid' 
                     alt='Card top'
                     
                      src={smallImages[i++ % imageCount]}
                    
                     
                     />  
                   
                    <div className='card-img-overlay'>
    
                        <div className='card-subtitle centered' style={{backgroundColor: 'black',  opacity: '0.5'}}>
                            <h3 className='text-center'>{listed.item_name} </h3>
                        </div>
                         {/* <h3 className='card-title text-right'></h3>  */}
                         {/* <button className='btn-success'>barter</button></Link> */}
                    </div>
  {/* <p className='card-text'>This is a simple Card example</p> */}
  </Link>
                </div>
                 )}
            </div>
            
        </div>
        )
    }
}

export default ListPosts;
//https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables




/* <div className='featured-crops'>
    <div id='community-favorites' className='explore-community-favorites text-center'>
        <h2>Community Favorites</h2>
    </div>
    <div className='featured-crops-grid'>
  <div className='row '>
    <!-- Only the first 3 will display on mobile -->
    <div className='medium-4 columns '>
  <div className='featured-crop-container'>
    <a href='/en/crops/tomato'>
    <div className='featured-crop'>
      <div className='crop-image full-cover' style='background-image: url('/lemon.png');'></div>
      <div className='blackness full-cover'></div>
      <div className='row row-table row-full-height'>
        <div className='small-12 column-middle columns'>
          <h3 className='crop-name'>Tomato</h3>
        </div>
      </div>
    </div>
</a>  </div>
</div> */