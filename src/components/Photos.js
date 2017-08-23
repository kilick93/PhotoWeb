import React, {Component} from 'react'
import Gallery from 'react-photo-gallery'
import img1 from './nycskyline.jpg'

export default class Photos extends Component {
  render() {
    return (
			<Gallery photos={PHOTO_SET} onClickPhoto={this.openLightbox}/>
		);
  }
}

const PHOTO_SET = [
  {
    src: require('../images/nycskyline.jpg'),
    width: 4898,
    height: 3265,
    alt: 'New York City Skyline'
  },
	{
    src: require('../images/20160427_203318-01.jpeg'),
    width: 3984,
    height: 2988,
    alt: 'Louvre'
  },
	{
    src: require('../images/IMG_0437-HDR.jpg'),
    width: 5983,
    height: 3989,
    alt: 'Mont Blanc'
  },
	{
    src: require('../images/IMG_2330.jpg'),
    width: 4807,
    height: 3846,
    alt: 'Louvre sunset'
  },

];
