import React, { Component } from 'react'
import HeaderBtChiaLayout from './HeaderBtChiaLayout.js'
import Navigation from './Navigation.js'
import Content from './Content.js'
import FooterBaiTap from './FooterBaiTap.js'

export default class HomeBaiTap extends Component {
  render() {
    let style = {
      padding: 0
    }
    return (
      <div style={style} className="container-fluid">
        <div className="row">
          <div style={style} className="col-12">
            <HeaderBtChiaLayout />
          </div>
        </div>
        <div className="row">
          <div style={style} className="col-md-4">
              <Navigation />
          </div>
          <div style={style} className="col-md-8">
              <Content />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <FooterBaiTap />
          </div>
        </div>
      </div>
    )
  }
}
