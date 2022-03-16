import React from 'react';
import PropTypes from 'prop-types';


/*


https://github.com/smooth-code/svgr

*/

class IconOffice extends React.Component
{
  static propTypes = {

      width: PropTypes.string,
      height: PropTypes.string,
      bookfill: PropTypes.string,
      bookside: PropTypes.string,
      bookfront: PropTypes.string
  }


  static defaultProps = {

      width: '125',
      height: '200',
      bookfill: '#f77b55',
      bookside: '#353f49',
      bookfront: '#474f59'

  }


 render() {
   const { height, width, bookfill, bookside, bookfront } = this.props;
   return (
<svg onClick={()=>alert("")} style={{position: "absolute", top: 200, left: 200}} width="1em" height="1em" {...this.props}>
   <rect width="300" height="100" style={{fill:"rgb(0,0,255)",strokeWidth:3,stroke:"rgb(0,0,0)"}} />
  </svg>
   )
 }
};


export default IconOffice;
