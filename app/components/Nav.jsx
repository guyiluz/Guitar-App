var React = require('react');
var {Link, IndexLink} = require('react-router')


var Nav = React.createClass({

render: function () {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Guitar Chords app</li>

          <li>
            <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
          </li>
          <li>
            <Link to="about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
            
          </li>
          <li>
            <Link to="examples" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>

          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form >
          <ul className="menu">
            <li>
              <input type="search" placeholder="Get Chords by Title" ref="src"/>

            </li>

            <li> <input type="submit" className="button secondary" value="Search"/>
            </li>

          </ul>
          </form>

        </div>

    </div>

  )
}
})




module.exports = Nav;
