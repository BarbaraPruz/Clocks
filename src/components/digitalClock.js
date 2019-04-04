import React from 'react';

const DigitalClock =  ({timeFields}) => 
  <div className="clock digital-clock">
    <p className="time"> {timeFields.hour}:{('0'+timeFields.minute).slice(-2)} </p>
    <p className="date"> {timeFields.month}/{timeFields.day}/{timeFields.year} </p>          
    <p className="timezone"> {timeFields.timezone} </p>          
  </div>

;
 

// class DigitalClock extends Component {
//   render() {
//       console.log("Digital Clock Render",this.props.timeFields);
//       // TODO: add leading 0 to minute format when needed
//       let min=('0'+this.props.timeFields.minute).slice(-2);
//     return (
//       <div className="clock digital-clock">
//           <p className="time">{this.props.timeFields.hour}:{min}</p>
//           <p className="date">{this.props.timeFields.month}/{this.props.timeFields.day}/{this.props.timeFields.year}</p>          
//           <p className="timezone">{this.props.timeFields.timezone}</p>          
//       </div>
//     );
//   }
// }

export default DigitalClock;