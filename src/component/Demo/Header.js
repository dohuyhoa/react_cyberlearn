import React, { Component } from 'react'

export default class TheHeader extends Component {
  render() { //render là phương thức hiển thị nội dung của component
    return (
      <>
        <div>Header Here Is Component</div>
        <div minWidth='{width: 500px}'><hr />
          <span>----Lorem--------</span>
        </div>
        <div>Mission</div>
      </>
    )
  }
}
