import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
        <header className="gdl-header">
        <div id="logo" onclick="slowScroll('#top')">
        <h1 class="gdl-header__logo">
            {/* <Link to="/home"> */}
                 <img src="https://digitallibrary.io/wp-content/themes/gdl-theme-twentytwentytwo/assets/logo-grey.svg" alt="Logotype for Global Digital Library" aria-hidden="true" width="217" height="62"/>
                 {/* </Link> */}
            </h1>
         </div>
            
            <div className="gdl-header__usernav">
            <h1>
            <svg class="svg-icon" width="28" height="28" vertical-align="middle" fill="#596d79" overflow="hidden" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M921.6 454.656H223.232c-83.968 0-151.552-75.776-151.552-167.936s67.584-167.936 151.552-167.936H921.6c16.384 0 30.72 14.336 30.72 30.72v6.144c0 12.288-8.192 24.576-20.48 28.672-40.96 14.336-69.632 53.248-69.632 100.352 0 45.056 28.672 88.064 69.632 100.352 12.288 4.096 20.48 16.384 20.48 28.672v6.144c0 22.528-14.336 34.816-30.72 34.816zM223.232 182.272c-49.152 0-90.112 47.104-90.112 106.496s40.96 106.496 90.112 106.496h612.352c-22.528-28.672-34.816-65.536-34.816-106.496 0-38.912 12.288-75.776 34.816-106.496H223.232zM800.768 903.168H102.4c-16.384 0-30.72-14.336-30.72-30.72v-6.144c0-14.336 8.192-24.576 20.48-28.672 40.96-14.336 69.632-55.296 69.632-100.352 0-47.104-28.672-88.064-69.632-100.352-12.288-4.096-20.48-16.384-20.48-28.672v-6.144c0-16.384 14.336-30.72 30.72-30.72h698.368c83.968 0 151.552 75.776 151.552 167.936s-67.584 163.84-151.552 163.84z m-612.352-61.44h612.352c49.152 0 90.112-47.104 90.112-106.496s-40.96-106.496-90.112-106.496H188.416c22.528 28.672 34.816 65.536 34.816 106.496 0 38.912-12.288 75.776-34.816 106.496z"  /></svg>
            </h1>
            <a href="/?s=&amp;contentLanguage=en" aria-label="Search" class="gdl-header__icon-link gdl-header__search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M21 21L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            </a>
            <a href="/login?redirectToPage=%2Fedit-profile" class="gdl-header__icon-link" aria-label="Login">
            <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 8.28947C8.5 12.8597 12.3137 16.5789 17 16.5789C21.6863 16.5789 25.5 12.8597 25.5 8.28947C25.5 3.71921 21.6863 0 17 0C12.3137 0 8.5 3.71921 8.5 8.28947ZM32.1111 35H34V33.1579C34 26.0492 28.067 20.2632 20.7778 20.2632H13.2222C5.93111 20.2632 0 26.0492 0 33.1579V35H32.1111Z" fill="#596D79"></path>
            </svg>
            </a>
            <span className="gdl-header__icon-link">
            <Link to="/">
                    <button ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#596d79" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></button>
                </Link>
            </span>
            </div>
        </header>

 <div id="top">
    <h1>Программирование</h1>
    <h3>как способ жизни!</h3>
  </div>

  <div id="main">
    <div class="intro">
      <h2>Наши услуги помогут вам!</h2>
      <span>Большой выбор всего, что может вам пригодиться</span>
    </div>
    <div class="text">
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos impedit, ut vero commodi voluptate? Ipsam reiciendis, necessitatibus incidunt ipsa quis sapiente excepturi, optio iusto voluptatibus dolorem officia quidem, numquam eaque minus, autem praesentium rem architecto dolores. Ipsa unde id velit optio magni enim! Illum obcaecati, dolorem distinctio nemo, ipsum iure.</span>
    </div>
  </div>

  <div id="overview">
    <h2>Преимущества</h2>
    <h4>с нами все проще</h4>

    <div class="img">
      <img src="https://itproger.com/img/courses/1532975967.jpg" alt=""/>
      <span>Изучение языка Ruby для начинающих</span>
    </div>
    <div class="img">
      <img src="https://itproger.com/img/courses/1530341233.jpg" alt=""/>
      <span>Уроки PhotoShop для начинающих</span>
    </div>
  </div>

  <div id="contacts">
    <center><h5>Обратная связь</h5></center>
    <form id="form_input">
      <label for="name">Имя <span>*</span></label><br/>
      <input type="text" placeholder="Введите имя" name="name" id="name"/><br/>
      <label for="email">Ваша почта <span>*</span></label><br/>
			<input type="email" placeholder="Введите email" name="email" id="email"/><br/>
			<label for="message">Сообщение <span>*</span></label><br/>
			<textarea placeholder="Введите ваше сообщение" name="message" id="message"></textarea><br/>
			<div id="mess_send" class="btn">Отправить</div>
      </form>
    </div>

  <div id="faq">
    <div>
      <span class="title">Оплата</span><br/>
      <span class="heading">Как будет проходит оплата?</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.</p>
      <span class="heading">Как будет проходит оплата?</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.</p>
      <span class="heading">Как будет проходит оплата?</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.</p>
    </div>
    <div>
      <span class="title">Информация</span><br/>
      <span class="heading">Что входит в услуги сервиса</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.</p>
      <span class="heading">Что входит в услуги сервиса</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.</p>
      <span class="heading">Что входит в услуги сервиса</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.</p>
    </div>
    <div>
      <span class="title">Гарантии</span><br/>
      <span class="heading">Какие гарантии есть</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.</p>
      <span class="heading">Какие гарантии есть</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.</p>
      <span class="heading">Какие гарантии есть</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.</p>
    </div>
  </div>
   {/* // slowScroll("klk");     */}
        </>
    )
}

// export function slowScroll(id) {
//     $('html, body').animate({
//       scrollTop: $(id).offset().top
//     }, 500);
//   }

//   $(document).on("scroll", function () {
//     if($(window).scrollTop() === 0)
//       $("header").removeClass("fixed");
//     else
//       $("header").attr("class", "fixed");
//   });
