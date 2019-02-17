import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services" >

      	  	<h3>Backend на базі Node JS</h3>

      	  	<p>Основна перевага Node JS в тому, що при одночасному підключенні до сервера тисяч користувачів Node працює асинхронно, тобто ставить пріоритети і розподіляє ресурси грамотніше.
      	  	</p>


	      	<h3>Frontend на базі Java Script</h3>

	      	<p>Область застосування цієї мови дуже широка і нічим не обмежена: серед програм, які використовують JS, присутні і тестові редактори, і додатки (як для комп'ютерів, так і мобільні і навіть серверні), і прикладне ПЗ.</p>


	      </div>



      </div>
    );
  }
}

export default Services;