var React = require('react')
var ChordsForm = React.createClass({

render:function(){
return(
<div id='ChordsForm'>
  <form>
    <input type ='search' placeholder = 'Find Song' ref= 'song'/>
    <button className="button primary"> Search </button>




  </form>



</div>

)

}


})


module.exports = ChordsForm;
