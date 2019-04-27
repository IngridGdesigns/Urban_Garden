import React, {Component} from 'react';

class ListPosts extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_items: [],
        }
    }

    componentDidMount() {
        fetch('/user_items')
            .then(res => res.json())
            .then(user_items => this.setState({user_items}, console.log(user_items))
        )       
    }
    render(){
        const {user_items} = this.state
        return(
            <div>
                <div className="row">
                <h1>Browse a list of the Posts page, wow so cool</h1>
                </div>
                
                    <hr/>

                <div className="row">
                <div className="col-sm-6 col-md-4">
                {user_items.map(item => 
                    <div className="thumbnail" key={item.item_id}>
                    <h2>Offered by: {item.username}</h2>
                    <img src="https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/09/avocados-title.jpg" alt="..."/>
                    <div className="caption" >
                        <h3> {item.item_name}</h3>
                        <p>{item.description}...</p>
                        <p>
                            <a href="#" className="btn btn-primary" role="button">Barter</a> 
                            <a href="#" className="btn btn-default" role="button">Button</a>
                        </p>
                    </div>
                    <hr/>
                </div>
                )}
                
                </div>
                
                </div>
            </div>
        )
    }
}

export default ListPosts;