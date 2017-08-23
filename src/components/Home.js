import React from 'react'
import bg from '../images/nycskyline.jpg'
import {Link} from 'react-router-dom'

const Home = () => (
  <div style={styles}>
  	<div style={center}>
  		<Link to='/e/photos'><h1>Enter</h1></Link>
  	</div>
  </div>
)

const styles = {
		backgroundImage: 'url(' + bg + ')',
	    backgroundSize:     'cover',
	    backgroundRepeat:   'no-repeat',
	    margin : 0,
	    height : '100%',
	    width : '100%',
	    position: 'absolute',
};		

const center = {
	margin : 'auto',
	width : '50%',
	textAlign : 'center',
	color : 'gray',
	marginTop: '50vh',
  	transform: 'translateY(-50%)', 
}
export default Home
