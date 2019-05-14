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
     
        
 //place images from web to here...
        let smallImages = [ 
            "https://foodrevolution.org/wp-content/uploads/2019/01/iStock-950322084-olindana.jpg",
            "https://www.naturehills.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/m/e/meyer-lemon-close-768x768.jpg",
            //"https://mdbootstrap.com/img/Others/documentation/img%20(145)-mini.jpg",
            "https://im.indiatimes.in/photogallery/2015/Apr/1071659_1437683877.jpg",
            "https://i.pinimg.com/originals/64/98/9a/64989a45842330ca9d880c4b47818317.jpg",
            //"https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/health-and-wellbeing/diet-and-nutrition/healthiest-berries-shutterstock_311981933-768x576.jpg",
            "https://img.huffingtonpost.com/asset/57a9ea7f1700002d00d1da7b.jpeg?ops=scalefit_720_noupscale",
            //"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ripe%2C_ripening%2C_and_green_blackberries.jpg/1200px-Ripe%2C_ripening%2C_and_green_blackberries.jpg",
            //"https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg",
            //"https://www.strongertogether.coop/sites/default/files/Get_Healthy_and_Save_Money_by_Food_Gardening_0.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ripe%2C_ripening%2C_and_green_blackberries.jpg/1200px-Ripe%2C_ripening%2C_and_green_blackberries.jpg",
            "https://www.york.ac.uk/media/research/in-focus/agrifood/news-events/fruit&veg.jpg",
           // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-d3c0Augz1wOUEg6-hfU0wkdxWO58R9HWOnux9DRVuH8FoNe",
            "https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg",
           "https://images.immediate.co.uk/volatile/sites/10/2018/02/71171e9b-d496-4818-bb64-4003b4c780ce-0617a51.jpg?quality=45&resize=620,413",
            "https://media.angieslist.com/s3fs-public/styles/widescreen_large/s3/s3fs-public/home-garden.JPG?37enwB2E.rbKnI5YrW6JZ_irCpGbr5ct&itok=Usbna66n",
            "https://www.foodpowa.com/wp-content/uploads/2018/05/peaches.jpg"
            
          ];
        
          let imageCount = smallImages.length; //grab images
          let i = 0;

        return(
        <div className='container-fluid'>
            <div className='row'>
            {this.state.user_items === null && <div className="loader centered"></div>}
                {/* col-sm-6 col-md-4 */}
                {this.props.user_items && this.props.user_items.filter(item=> {
                    if(!this.props.search)
                    return true;
                    return this.props.search.toLowerCase() === item.item_name.toLowerCase();

                }).map(listed => 
                <div className='card-column col-md-6 col-lg-4' 
                        style={{'paddingTop': '10px', overflow:'hidden', maxWidth: '100%'}}
                        key={listed.item_id}>
                    <Link to={`/listing/${listed.item_id}`}>
                    <img className='card-top img-fluid' 
                            alt='Card top'
                        src={smallImages[i++ % imageCount]}
                        style={{verticalAlign: 'middle'}}
                    />  
                   <ul className='list-group'>
                        <li className='list-group-item'>
                            <span className='badge'><FaGrinHearts/></span>
                          {listed.username}
                        </li>
                    </ul>
                    <div className='card-img-overlay'>
                        <div className='card-subtitle centered' style={{backgroundColor: 'black',  opacity: '0.5'}}>
                            <h3 className='text-center'>{listed.item_name} </h3>
                        </div>
                         {/* <h3 className='card-title text-right'></h3>  */}
                         {/* <button className='btn-success'>barter</button></Link> */}
                    </div>
                    {/* <p className='card-text'>This is a Card example</p> */}
                    </Link>
                </div>
                 )}
            </div>
        </div>
        )
    }
}

export default ListPosts;
