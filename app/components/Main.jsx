var React = require('react');
var Nav = require('Nav');

var Main =(props)=> {

  return(
     <div>
       <Nav/>
       <br/>
       <div>
         <div className= 'main'>
           {props.children}
         </div>
       </div>



    </div>
)
}


module.exports = Main;
