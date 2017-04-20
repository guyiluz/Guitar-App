var React = require('react')
var {Link, IndexLink} = require('react-router')
var ChordsApi = require('ChordsApi')
var SongByIdAPI = require('SongByIdAPI')
var ChordsForm =require('ChordsForm')
var BestSongBox =require('BestSongBox')
var PopularSong =require('PopularSong')
var Song =require('Song')




var Body = React.createClass({
getInitialState:function () {
  return{
   html:"x"  }


},

// getting the html from the api using the id
getBestSong: function (id) {
  var that =this
  console.log(id);
  SongByIdAPI(function(responed) {
      return responed.json().then(function(data){
console.log(data.title);
        var datahtml= data;

             that.setState({
             html: datahtml

              })

      })
}, function (err) {
  console.log(err);
},id)


  },


  getsong: function (song) {
    var that=this
    console.log(song);
    ChordsApi(function(responed) {
      return responed.json().then(function(data){
        var datahtml= data.objects[0].body_chords_html;
        that.setState({
          html:datahtml
        })

      })


}, function (err) {
  console.log(err);
},song)



},




/// need to trun to ternary operator


/*componentDidUpdate(prevProps, prevState) {
  // only update chart if the data has changed
  if (prevState.html !== this.state.html) {

    console.log("hi")

 }
},
*/
  render:function(){

  var data =  this.state.html
  var getsong =this.getsong


  function rendringSong() {


      if(data=="x"){
      console.log(getsong);
      return   <ChordsForm getChords={getsong}/>
      }
      if(data!=="x") {
        var x = 3
        console.log("done");

        return <Song data={data}/>
      }
    }

  return (

<div>
  <h1> Guitar Chords </h1>

  <div className="container">
    <div className="Childcontainer">

      <BestSongBox getId={this.getBestSong}/>
       {rendringSong()}
    </div>

  </div>
    </div>


  )
}
})
module.exports = Body;
