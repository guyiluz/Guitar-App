var React = require('react')
var ChordsForm =require('ChordsForm')
var BestSongBox =require('BestSongBox')
var PopularSong =require('PopularSong')


var Body = React.createClass({
  render:function(){

  return (

<div>
  <h1> Guitar Chords </h1>
  <div className="container">
    <div className="Childcontainer">
      <ChordsForm/>
      <BestSongBox/>
    </div>
      <PopularSong/>
  </div>
    </div>


  )
}
})
module.exports = Body;
