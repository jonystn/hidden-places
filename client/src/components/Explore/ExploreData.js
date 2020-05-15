// import React, { Component } from "react";
// import axios from "axios";
// import { response } from "express";
// import Explore from "./Explore"


// export default  class ExploreData extends Component {

//   state = {
//     places: []
//   }

//   componentDidMount = () => {
//     this.getData();
//   }

//   getData = () => {
//     axios
//       .get('/places')
//       .then(response => {
//         this.setState({
//           places: response.data
//         })
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }

//   render() {
//     return (
//       <div className="projects-container">
//     {/*   <SpotAPlace getData={this.getData} />
//         <Explore places = {this.state.places} /> */}
//       </div>
//     )
//   }
// }