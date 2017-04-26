var React = require('react')





var ChordsForm = React.createClass({

  handleSearch:function (e) {
    e.preventDefault()
     var check = this.refs.check_me.checked
     console.log(check);
    var res = this.refs.res.value
    this.props.getChords(res,check)
  },
render:function(){


return(
<div id='ChordsForm'>
  <form>
    <input type ='search' placeholder = 'Find Song' ref= 'res'/>
    <div id="switch">
    <input type="checkbox"  ref="check_me" />search BY artist
      </div>

        <br/ >
    <button className="button primary" onClick={this.handleSearch}> Search </button>




  </form>



</div>

)

}


})


module.exports = ChordsForm;
