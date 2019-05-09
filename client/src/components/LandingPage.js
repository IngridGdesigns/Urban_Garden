import React from 'react'


class LandingPage extends React.Component {
    render(){
       
      //let imgUrl = 
    //   //lemon - 
    //   'https://www.google.com/search?biw=1522&bih=798&tbm=isch&sa=1&ei=mqHRXLHyGLXd9APls6GwDw&q=lemon+illustrated+png+images&oq=lemon+illustrated+png+images&gs_l=img.3...6663.8607..8853...0.0..0.135.706.11j1......0....1..gws-wiz-img.FOfvguvMwTA#imgrc=xNkHUK7xjEHgOM:'
    //'http://www.varunaweb.com/wp-content/uploads/tomato-growing-secrets-11-pro-secrets-for-growing-the-sweetest-tastiest-tomatoes-1.jpg';
        return(
        
          // Full page intro
          <div className="view" 
          // style={{backgroundImage: 'url('+ imgUrl + ')', 
          //backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
         // backgroundPosition: 'center center'}}
          >
    
   
        
        {/* <!--Main Layout--> */}
        
         {/* <!-- Mask & flexbox options--> */}
         <div className="mask rgba-gradient align-items-center">
              {/* <!-- Content --> */}
              <div className="container">
                {/* <!--Grid row--> */}
                <div className="row">
                  {/* <!--Grid column--> */}
                  <div className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">Start Bartering!</h1>
                    <hr className="hr-light"/>
                    <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                    dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                    iste.</h6>
                    {/* <a className="btn btn-white">Download</a>
                    <a className="btn btn-outline-white">Learn more</a> */}
                  </div>
                  {/* <!--Grid column--> */}
                  {/* <!--Grid column--> */}
                  <div className="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight" data-wow-delay="0.3s">
                    <img src="https://www.pngarts.com/files/3/Fruit-PNG-Photo.png"
                    alt="" className="img-fluid"></img>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </div>
              {/* <!-- Content --> */}
            </div>
            {/* <!-- Mask & flexbox options--> */}
        
          {/* <!-- Full Page Intro --> */}
       
       
        {/* /* <!--Main Layout--> */}
        <main>
          <div className="container">
            {/* <!--Grid row--> */}
            <div className="row py-5">
              {/* <!--Grid column--> */}
              <div className="col-md-12 text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  cupidatat non proident, sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.</p>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
        </main>


        </div>
        )
    }
}

export default LandingPage;

/* <!-- Mask & flexbox options-->
            <div className="mask rgba-gradient align-items-center">
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      {/* <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Cover</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header> */

      /* <main role="main" className="inner cover" style={{color: 'white'}}>
        <h1 className="cover-heading">Cover your page.</h1>
        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className="lead">
          <a href="./home" className="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>
    </div>
    </div>
    </div> */

    //https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/