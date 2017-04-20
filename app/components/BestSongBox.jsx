var React = require('react')
var {Link, IndexLink} = require('react-router')
var BestSongBox = React.createClass({
/// Get the id of the song after click
handleCliclk: function (event) {
  var id = event.target.id
  console.log(id);
    this.props.getId(id)
},

render:function(){
return(

<div id ='BestSongBox' onClick={this.handleCliclk}>
  <h5> Top Songs</h5>


  <div id="23561">
    All of me

  </div>


    <div id="1522">
      Starman

    </div>
    <div id="1140">
      Wish You Were Here

    </div>


  <div>Lorem ipsum dolor sit amet</div>
  <div>Lorem ipsum dolor sit amet</div>
  <div>Lorem ipsum dolor sit amet</div>
  <div>Lorem ipsum dolor sit amet</div>
  <div>Lorem ipsum dolor sit amet</div>
  <div>Lorem ipsum dolor sit amet</div>
  <div>Lorem ipsum dolor sit amet</div>
  <div>Lorem ipsum dolor sit amet</div>
  <div>Lorem ipsum dolor sit amet</div>
</div>

)

}


})


module.exports = BestSongBox;
