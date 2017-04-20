var React = require('react')
var ChordsForm = React.createClass({


  handleSearch:function (e) {
    e.preventDefault()
    var song = this.refs.song.value
    this.props.getChords(song)
  },
render:function(){


return(
<div id='ChordsForm'>
  <form>
    <input type ='search' placeholder = 'Find Song' ref= 'song'/>
    <button className="button primary" onClick={this.handleSearch}> Search </button>




  </form>



</div>

)

}


})


module.exports = ChordsForm;
