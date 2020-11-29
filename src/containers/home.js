import React, { Component } from 'react';
import { connect } from 'react-redux';
import { set_data } from '../store/actions/index'

class Home extends Component {
  // static getDerivedStateFromProps(props,state){
  //   console.log("Props==>",props)
  //   return(
  //     null
  //   )

  // }
  render() {
    let user = {
      name: "Shahbaz",
      email: "shahbaz@gmail.com"
    }
    console.log("Props==>", this.props)
    return (
      <div>
        <h1>Home</h1>
        <button onClick={() => this.props.set_data(user)}>SETDATA</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})


const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
