import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">
  
  			<div className="post banner">
			    <h1 className="post-title">Я виготовляю <em>якісне</em>, <em>надійне</em> і <em>безпечне</em> програмне забезпечення.</h1>
    			<p>для <em>агенств</em>, <em>реклами</em>, та інколи <em>для себе</em>. <a href="#" onClick={this.eventToggleSidebar}> Дізнатися більше</a></p>

			</div>
  





			<Banner />

  		</div>
  
    );
  }
}

export default Home;