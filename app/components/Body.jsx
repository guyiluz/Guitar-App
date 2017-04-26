var React = require('react')
var {Link, IndexLink} = require('react-router')
var ChordsApi = require('ChordsApi')
var ArtistByIdAPI = require('ArtistByIdAPI')
var ChordsForm =require('ChordsForm')
var BestSongBox =require('BestSongBox')
var PopularSong =require('PopularSong')
var Result =require('Result')




var Body = React.createClass({
getInitialState:function () {
  return{
    res:false,
    data:[],
   html:"x",
   check:false,
   song:"x",
   songHtml:"x"
       }


},


getTitle:function (song) {
  console.log("song");
  this.setState({
  song:song


  })
},


  getsong: function (res,check) {
    var that=this
    console.log(res);
    var res =res
    ArtistByIdAPI(function(responed) {
      return responed.json().then(function(data){
        console.log(data);
        that.setState({
          data:data,
          res:true,
          html:"x",
          check:check
        })

      })


}, function (err) {
  console.log(err);
},res,check)



},

goback:function (x) {
  console.log("gi");
  this.setState({
  songHtml:x


  })

},

getHtml:function(htmldata){

console.log("fromgettml",htmldata);
this.setState({
songHtml:htmldata


})

},


  render:function(){



    var that =this
      var {html,res,data,check,song,songHtml} = this.state

function renderFunctionB() {
  if(!res){
  return false
}else {

  return(
<div>
  <Result data={data} check={check} song={song} getTitle={that.getTitle} songHtml={songHtml} getHtml={that.getHtml} goback={that.goback} />
</div>

  )
}
}
function renderFunction () {
  if(html=="x"){



  return(
        <div>


          <h1> Guitar Chords </h1>
          <div className="container">
      <div className="Childcontainer">
       <ChordsForm getChords={that.getsong}/>
        </div>
       {renderFunctionB()}
       </div>
         </div>
  )
}



}

  return (
<div>
 {renderFunction()}
</div>







  )
}

})
module.exports = Body;
