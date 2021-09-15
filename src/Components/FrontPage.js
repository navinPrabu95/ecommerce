import React from 'react'

const FrontPage=()=> {
    return (
        <div>
            <nav>
    <div class="nav-wrapper">
      <img src={require('../images/file.jpg').default} style={{height:'60px'}}></img>       
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><i class="material-icons">search</i></li>
         <li><input type='search'></input></li>
        <li><button>Login</button></li>
        <li><i class="material-icons">shopping_cart</i></li>
        <li><a href="collapsible.html">cart</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  </nav>  
  <div>
    <div className='card container' style={{display:'flex' ,justifyContent:'space-between',width:'100% '}}>
    <div className='card product'>
       <h5>Men's Casual Shirts</h5>
        <img src={require('../images/shirt1.jpg').default} style={{height:'300px'}}></img>
        <h6>Men Regular solid fit</h6>
        <h5>₹499</h5>
        <p> <span>Size</span> M, L, XL</p>
        <button className='btn'><i class="material-icons">shopping_cart</i> ADD TO CART</button>  <button  className='btn' > <i class="material-icons">flash_on
</i> BUY NOW</button>

     </div>
     <div className='card product'>
     <h5>Men's Casual Shirts</h5>
        <img src={require('../images/shirt2.jpg').default} style={{height:'300px'}}></img>
        <h6>Men Regular solid fit</h6>
        <h5>₹499</h5>
        <p><span>Size</span> M, L, XL</p>
        <button className='btn'> <i class="material-icons">shopping_cart</i> ADD TO CART</button>  <button  className='btn'><i class="material-icons">flash_on
</i> BUY NOW</button>

     </div>
     <div className='card product'>
     <h5>Men's Casual Shirts</h5>
        <img src={require('../images/shirt3.jpg').default} style={{height:'300px'}}></img>
        <h6>Men Regular solid fit</h6>
        <h5>₹499</h5>
        <p> <span>Size</span>  M, L, XL</p>
        <button className='btn'><i class="material-icons">shopping_cart</i> ADD TO CART</button>  <button  className='btn'><i class="material-icons">flash_on
</i> BUY NOW</button>

     </div>
     <div className='card product'>
     <h5>Men's Casual Shirts</h5>
        <img src={require('../images/shirt44.jpeg').default} style={{height:'300px',background:'lightgray'}}></img>
        <h6>Men Regular solid fit</h6>
        <h5>₹499</h5>
        <p> <span>Size</span>  M, L, XL</p>
        <button className='btn'><i class="material-icons">shopping_cart</i> ADD TO CART</button>  <button  className='btn'><i class="material-icons">flash_on
</i> BUY NOW</button>
     </div>
    </div> 
    </div>
        </div>
    )
}

export default FrontPage
