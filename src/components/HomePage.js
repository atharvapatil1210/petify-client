import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Index - Yummy Bootstrap Template</title>
        <meta content name="description" />
        <meta content name="keywords" />
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet" />
        {/* Vendor CSS Files */}
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        {/* Main CSS File */}
        <link href="assets/css/main.css" rel="stylesheet" />
        <header id="header" className="header d-flex align-items-center sticky-top">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
              {/* Uncomment the line below if you also wish to use an image logo */}
              {/* <img src="assets/img/logo.png" alt=""> */}
              <h1 className="sitename">Petify</h1>
              <span>.</span>
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li className="dropdown"><a href="#"><span>Dogs &amp; Puppies</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                  <ul>
                    <li><a href="#">Dropdown 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                      <ul>
                        <li><a href="#">Deep Dropdown 1</a></li>
                        <li><a href="#">Deep Dropdown 2</a></li>
                        <li><a href="#">Deep Dropdown 3</a></li>
                        <li><a href="#">Deep Dropdown 4</a></li>
                        <li><a href="#">Deep Dropdown 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Dropdown 2</a></li>
                    <li><a href="#">Dropdown 3</a></li>
                    <li><a href="#">Dropdown 4</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a href="#"><span>Cats &amp; Kittens</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                  <ul>
                    <li><a href="#">Dropdown 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                      <ul>
                        <li><a href="#">Deep Dropdown 1</a></li>
                        <li><a href="#">Deep Dropdown 2</a></li>
                        <li><a href="#">Deep Dropdown 3</a></li>
                        <li><a href="#">Deep Dropdown 4</a></li>
                        <li><a href="#">Deep Dropdown 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Dropdown 2</a></li>
                    <li><a href="#">Dropdown 3</a></li>
                    <li><a href="#">Dropdown 4</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a href="#"><span>Cows &amp; Buffallo</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                  <ul>
                    <li><a href="#">Dropdown 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                      <ul>
                        <li><a href="#">Deep Dropdown 1</a></li>
                        <li><a href="#">Deep Dropdown 2</a></li>
                        <li><a href="#">Deep Dropdown 3</a></li>
                        <li><a href="#">Deep Dropdown 4</a></li>
                        <li><a href="#">Deep Dropdown 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Dropdown 2</a></li>
                    <li><a href="#">Dropdown 3</a></li>
                    <li><a href="#">Dropdown 4</a></li>
                  </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list" />
            </nav>
            <a className="btn-getstarted" href="login-page/login.html">Login</a>
          </div>
        </header>
        <main className="main">
          {/* Hero Section */}
          <section id="hero" className="hero section light-background">
            <div className="container">
              <div className="row gy-4 justify-content-center justify-content-lg-between">
                <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 data-aos="fade-up">Find Your Best Pet<br />Breeding Pet</h1>
                  <p data-aos="fade-up" data-aos-delay={100}>Connecting pet owners across India to find the perfect mates for their beloved pets. Our platform ensures a safe, transparent, and user-friendly experience for responsible pet breeding.</p>
                  <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                    <a href="#book-a-table" className="btn-get-started">FIND A PET</a>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
                  </div>
                </div>
                <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                  <img src="assets/img/dog-and-one-boy-unconditional-love-f6bd8d-removebg-preview.png" className="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
          </section>
          {/* /Hero Section */}
          {/* About Section */}
          <section id="about" className="about section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>About Us<br /></h2>
              <p><span>Learn More</span> <span className="description-title">About Us</span></p>
            </div>
            {/* End Section Title */}
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-7" data-aos="fade-up" data-aos-delay={100}>
                  <img src="assets/img/dog-platform-image.png" className="img-fluid mb-4" alt="" />
                  <div className="book-a-table">
                    <h3>Book a Pet</h3>
                    {/* <p>+1 5589 55488 55</p> */}
                  </div>
                </div>
                <div className="col-lg-5" data-aos="fade-up" data-aos-delay={250}>
                  <div className="content ps-0 ps-lg-5">
                    <p className="fst-italic">
                      Petify Connect was founded with a vision to revolutionize the pet breeding landscape by providing a secure, transparent, and efficient platform for pet owners. We believe that finding the perfect mate for your pet should be a seamless and joyful experience,
                      not a daunting task. Our goal is to create a community where responsible pet breeding is encouraged, and every pet's health and happiness are prioritized.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circle-fill" /> <span>We provide a safe and intuitive environment for pet owners to find suitable mates for their pets, ensuring privacy and ease of use</span></li>
                      <li><i className="bi bi-check-circle-fill" /> <span>We prioritize the health and well-being of pets, offering tools and resources to verify health records and pedigree, promoting responsible breeding practices.</span></li>
                      <li><i className="bi bi-check-circle-fill" /> <span>We ensure all breeding activities on our platform adhere to local laws and regulations, providing guidance and support to users for legal and ethical breeding.</span></li>
                    </ul>
                    <p>
                      At Petify, our mission is to provide a secure, user-friendly platform that meets the unique needs of pet owners, ensuring animal welfare, legal compliance, and user satisfaction. We strive to make every breeding connection responsible and beneficial for
                      all parties involved.
                    </p>
                    <div className="position-relative mt-4">
                      <img src="assets/img/Designer.png" className="img-fluid" alt="" />
                      <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox pulsating-play-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /About Section */}
          {/* Why Us Section */}
          <section id="why-us" className="why-us section light-background">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                  <div className="why-box">
                    <h3>Why Choose Petify</h3>
                    <p>
                      Petify provides a secure, easy-to-use platform for responsible pet breeding. We prioritize animal welfare with health and pedigree verification, and ensure legal compliance. Our advanced search filters and detailed pet profiles make finding the perfect
                      match simple. Join our supportive community of pet owners and experts. Choose Petify for a safe and reliable breeding experience.
                    </p>
                    <div className="text-center">
                      <a href="#" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right" /></a>
                    </div>
                  </div>
                </div>
                {/* End Why Box */}
                <div className="col-lg-8 d-flex align-items-stretch">
                  <div className="row gy-4" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-xl-4">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-clipboard-data" />
                        <h4>Secure and User-Friendly Platform</h4>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                      </div>
                    </div>
                    {/* End Icon Box */}
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-gem" />
                        <h4>Commitment to Animal Welfare</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                      </div>
                    </div>
                    {/* End Icon Box */}
                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-inboxes" />
                        <h4>Legal Compliance and Guidance</h4>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                      </div>
                    </div>
                    {/* End Icon Box */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Why Us Section */}
          {/* Stats Section */}
          {/* <section id="stats" class="stats section dark-background">

            <img src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in">

            <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

                <div class="row gy-4">

                    <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Clients</p>
                        </div>
                    </div> */}
          {/* End Stats Item */}
          {/* <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Projects</p>
                        </div>
                    </div> */}
          {/* End Stats Item */}
          {/* <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Hours Of Support</p>
                        </div>
                    </div> */}
          {/* End Stats Item */}
          {/* <div class="col-lg-3 col-md-6">
                        <div class="stats-item text-center w-100 h-100">
                            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Workers</p>
                        </div>
                    </div> */}
          {/* End Stats Item */}
          {/* /Stats Section */}
          {/* Menu Section */}
          <section id="menu" className="menu section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Pet breeding connection</h2>
              <p><span>Check</span> <span className="description-title">Petify contain pet</span></p>
            </div>
            {/* End Section Title */}
            <div className="container">
              <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay={100}>
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                    <h4>Dogs</h4>
                  </a>
                </li>
                {/* End tab nav item */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                    <h4>Cows</h4>
                  </a>
                  {/* End tab nav item */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                    <h4>Buffallo</h4>
                  </a>
                </li>
                {/* End tab nav item */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                    <h4>Cats</h4>
                  </a>
                </li>
                {/* End tab nav item */}
              </ul>
              <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
                <div className="tab-pane fade active show" id="menu-starters">
                  <div className="tab-header text-center">
                    <h3>Dogs Breeding</h3>
                  </div>
                  <div className="row gy-5">
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/gallery/germanshefard.jpg" className="glightbox"><img src="assets/img/gallery/germanshefard.jpg" className="menu-img img-fluid" alt="" /></a>
                      <h4>German Shefard</h4>
                      {/* <p class="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p> */}
                      {/* <p class="price">
                                    $5.95
                                </p> */}
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/gallery/pug.jpg" className="glightbox"><img src="assets/img/gallery/pug.jpg" className="menu-img img-fluid" alt="" /></a>
                      <h4>Pug</h4>
                      {/* <p class="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                <p class="price">
                                    $14.95
                                </p> */}
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/gallery/golden-retriver.jpeg" className="glightbox"><img src="assets/img/gallery/golden-retriver.jpeg" className="menu-img img-fluid" alt="" /></a>
                      <h4>Golden Retriver</h4>
                      {/* <p class="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                <p class="price">
                                    $8.95
                                </p> */}
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/gallery/rotveiler.jpg" className="glightbox"><img src="assets/img/gallery/rotveiler.jpg" className="menu-img img-fluid" alt="" /></a>
                      <h4>Rotveiler</h4>
                      {/* <p class="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                <p class="price">
                                    $12.95
                                </p> */}
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Eos Luibusdam</h4>
                      {/* <p class="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                <p class="price">
                                    $12.95
                                </p> */}
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Laboriosam Direva</h4>
                      {/* <p class="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                <p class="price">
                                    $9.95
                                </p> */}
                    </div>
                    {/* Menu Item */}
                  </div>
                </div>
                {/* End Starter Menu Content */}
                <div className="tab-pane fade" id="menu-breakfast">
                  <div className="tab-header text-center">
                    <p>Menu</p>
                    <h3>Breakfast</h3>
                  </div>
                  <div className="row gy-5">
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Magnam Tiste</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $5.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Aut Luia</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $14.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Est Eligendi</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $8.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Eos Luibusdam</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $12.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Eos Luibusdam</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $12.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Laboriosam Direva</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $9.95
                      </p>
                    </div>
                    {/* Menu Item */}
                  </div>
                </div>
                {/* End Breakfast Menu Content */}
                <div className="tab-pane fade" id="menu-lunch">
                  <div className="tab-header text-center">
                    <p>Menu</p>
                    <h3>Lunch</h3>
                  </div>
                  <div className="row gy-5">
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Magnam Tiste</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $5.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Aut Luia</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $14.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Est Eligendi</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $8.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Eos Luibusdam</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $12.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Eos Luibusdam</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $12.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Laboriosam Direva</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $9.95
                      </p>
                    </div>
                    {/* Menu Item */}
                  </div>
                </div>
                {/* End Lunch Menu Content */}
                <div className="tab-pane fade" id="menu-dinner">
                  <div className="tab-header text-center">
                    <p>Menu</p>
                    <h3>Dinner</h3>
                  </div>
                  <div className="row gy-5">
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Magnam Tiste</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $5.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-2.png" className="glightbox"><img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Aut Luia</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $14.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-3.png" className="glightbox"><img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Est Eligendi</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $8.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Eos Luibusdam</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $12.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Eos Luibusdam</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $12.95
                      </p>
                    </div>
                    {/* Menu Item */}
                    <div className="col-lg-4 menu-item">
                      <a href="assets/img/menu/menu-item-6.png" className="glightbox"><img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt="" /></a>
                      <h4>Laboriosam Direva</h4>
                      <p className="ingredients">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <p className="price">
                        $9.95
                      </p>
                    </div>
                    {/* Menu Item */}
                  </div>
                </div>
                {/* End Dinner Menu Content */}
              </div>
            </div>
          </section>
          {/* /Menu Section */}
          {/* Testimonials Section */}
          {/* <section id="testimonials" class="testimonials section light-background">

            <!-- Section Title */}
          {/* <div class="container section-title" data-aos="fade-up">
                <h2>TESTIMONIALS</h2>
                <p>What Are They <span class="description-title">Saying About Us</span></p>
            </div> */}--&gt;
          {/* End Section Title */}
          {/* <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="swiper init-swiper">
                    
                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="row gy-4 justify-content-center">
                                    <div class="col-lg-6">
                                        <div class="testimonial-content">
                                            <p>
                                                <i class="bi bi-quote quote-icon-left"></i>
                                                <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                                <i class="bi bi-quote quote-icon-right"></i>
                                            </p>
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <div class="stars">
                                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 text-center">
                                        <img src="assets/img/testimonials/testimonials-1.jpg" class="img-fluid testimonial-img" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End testimonial item */}
          {/* <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="row gy-4 justify-content-center">
                                    <div class="col-lg-6">
                                        <div class="testimonial-content">
                                            <p>
                                                <i class="bi bi-quote quote-icon-left"></i>
                                                <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                                <i class="bi bi-quote quote-icon-right"></i>
                                            </p>
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                            <div class="stars">
                                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 text-center">
                                        <img src="assets/img/testimonials/testimonials-2.jpg" class="img-fluid testimonial-img" alt="">
                                    </div>
                                </div>
                            </div>
                        </div> */}
          {/* End testimonial item */}
          {/* 
                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="row gy-4 justify-content-center">
                                    <div class="col-lg-6">
                                        <div class="testimonial-content">
                                            <p>
                                                <i class="bi bi-quote quote-icon-left"></i>
                                                <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                                <i class="bi bi-quote quote-icon-right"></i>
                                            </p>
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                            <div class="stars">
                                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 text-center">
                                        <img src="assets/img/testimonials/testimonials-3.jpg" class="img-fluid testimonial-img" alt="">
                                    </div>
                                </div>
                            </div>
                        </div> */}
          {/* End testimonial item */}
          {/* <div class="swiper-slide">
                            <div class="testimonial-item">
                                <div class="row gy-4 justify-content-center">
                                    <div class="col-lg-6">
                                        <div class="testimonial-content">
                                            <p>
                                                <i class="bi bi-quote quote-icon-left"></i>
                                                <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                                <i class="bi bi-quote quote-icon-right"></i>
                                            </p>
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                            <div class="stars">
                                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 text-center">
                                        <img src="assets/img/testimonials/testimonials-4.jpg" class="img-fluid testimonial-img" alt="">
                                    </div>
                                </div>
                            </div>
                        </div> */}
          {/* End testimonial item */}
          {/* </div>
                    <div class="swiper-pagination"></div>
                </div>

            </div>

        </section> */}--&gt;
          {/* /Testimonials Section */}
          {/* Events Section */}
          <section id="events" className="events section">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
              <div className="swiper init-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-1.jpg)'}}>
                    <h3>Custom Parties</h3>
                    <div className="price align-self-start">$99</div>
                    <p className="description">
                      Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                    </p>
                  </div>
                  {/* End Event item */}
                  <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-2.jpg)'}}>
                    <h3>Private Parties</h3>
                    <div className="price align-self-start">$289</div>
                    <p className="description">
                      In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
                    </p>
                  </div>
                  {/* End Event item */}
                  <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-3.jpg)'}}>
                    <h3>Birthday Parties</h3>
                    <div className="price align-self-start">$499</div>
                    <p className="description">
                      Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                    </p>
                  </div>
                  {/* End Event item */}
                  <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-4.jpg)'}}>
                    <h3>Wedding Parties</h3>
                    <div className="price align-self-start">$899</div>
                    <p className="description">
                      Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                    </p>
                  </div>
                  {/* End Event item */}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
          {/* /Events Section */}
          {/* Chefs Section */}
          {/* <section id="chefs" class="chefs section">

            <!-- Section Title */}
          {/* <div class="container section-title" data-aos="fade-up">
                <h2>chefs</h2>
                <p><span>Our</span> <span class="description-title">Proffesional Chefs<br></span></p>
            </div> */}
          {/* End Section Title */}
          {/* 
            <div class="container">

                <div class="row gy-4">

                    <div class="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div class="team-member">
                            <div class="member-img">
                                <img src="assets/img/chefs/chefs-1.jpg" class="img-fluid" alt="">
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter-x"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Walter White</h4>
                                <span>Master Chef</span>
                                <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                            </div>
                        </div>
                    </div> */}--&gt;
          {/* End Chef Team Member */}
          {/* <div class="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div class="team-member">
                            <div class="member-img">
                                <img src="assets/img/chefs/chefs-2.jpg" class="img-fluid" alt="">
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter-x"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Patissier</span>
                                <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                            </div>
                        </div>
                    </div> */}
          {/* End Chef Team Member */}
          {/* <div class="col-lg-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                        <div class="team-member">
                            <div class="member-img">
                                <img src="assets/img/chefs/chefs-3.jpg" class="img-fluid" alt="">
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter-x"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>William Anderson</h4>
                                <span>Cook</span>
                                <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Chef Team Member */}
          {/* /Chefs Section */}
          {/* Book A Table Section */}
          {/* <section id="book-a-table" class="book-a-table section">

            <!-- Section Title */}
          {/* <div class="container section-title" data-aos="fade-up">
                <h2>Book A Table</h2>
                <p><span>Book Your</span> <span class="description-title">Stay With Us<br></span></p>
            </div>
            <!-- End Section Title */}
          {/* <div class="container">

                <div class="row g-0" data-aos="fade-up" data-aos-delay="100">

                    <div class="col-lg-4 reservation-img" style="background-image: url(assets/img/reservation.jpg);"></div> */}--&gt; --&gt;
          {/* <div class="col-lg-8 d-flex align-items-center reservation-form-bg" data-aos="fade-up" data-aos-delay="200">
                        <form action="forms/book-a-table.php" method="post" role="form" class="php-email-form">
                            <div class="row gy-4">
                                <div class="col-lg-4 col-md-6">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="">
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="">
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" required="">
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="date" name="date" class="form-control" id="date" placeholder="Date" required="">
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="time" class="form-control" name="time" id="time" placeholder="Time" required="">
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <input type="number" class="form-control" name="people" id="people" placeholder="# of people" required="">
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
                            </div>

                            <div class="text-center mt-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                                <button type="submit">Book a Table</button>
                            </div> */}
          {/* </form>
                    </div>
                    <!-- End Reservation Form */}
          {/* 
                </div>

            </div>

        </section> */}--&gt;
          {/* /Book A Table Section */}
          {/* Gallery Section */}
          <section id="gallery" className="gallery section light-background">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Gallery</h2>
              <p><span>Check</span> <span className="description-title">Our Gallery</span></p>
            </div>
            {/* End Section Title */}
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="swiper init-swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/germanshefard.jpg"><img src="assets/img/gallery/germanshefard.jpg" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/pug.jpg"><img src="assets/img/gallery/pug.jpg" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/golden-retriver.jpeg"><img src="assets/img/gallery/golden-retriver.jpeg" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/rotveiler.jpg"><img src="assets/img/gallery/rotveiler.jpg" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/germanshefard.jpg"><img src="assets/img/gallery/germanshefard.jpg" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/pug.jpg"><img src="assets/img/gallery/pug.jpg" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/golden-retriver.jpeg"><img src="assets/img/gallery/golden-retriver.jpeg" className="img-fluid" alt="" /></a>
                  </div>
                  <div className="swiper-slide">
                    <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/rotveiler.jpg"><img src="assets/img/gallery/rotveiler.jpg" className="img-fluid" alt="" /></a>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
          {/* /Gallery Section */}
          {/* Contact Section */}
          <section id="contact" className="contact section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Contact</h2>
              <p><span>Need Help?</span> <span className="description-title">Contact Us</span></p>
            </div>
            {/* End Section Title */}
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="mb-5">
                <iframe style={{width: '100%', height: '400px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" allowFullScreen frameBorder={0} />
              </div>
              {/* End Google Maps */}
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={200}>
                    <i className="icon bi bi-geo-alt flex-shrink-0" />
                    <div>
                      <h3>Address</h3>
                      <p>SSGMCE , Shegaon 444203</p>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={300}>
                    <i className="icon bi bi-telephone flex-shrink-0" />
                    <div>
                      <h3>Call Us</h3>
                      <p>+91 9637843011</p>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={400}>
                    <i className="icon bi bi-envelope flex-shrink-0" />
                    <div>
                      <h3>Email Us</h3>
                      <p>support@petmateconnect.com</p>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
                {/* <div class="col-md-6">
                        <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                            <i class="icon bi bi-clock flex-shrink-0"></i>
                            <div>
                                <h3>Opening Hours<br></h3>
                                <p><strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed</p>
                            </div>
                        </div>
                    </div> */}
                {/* End Info Item */}
              </div>
              <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay={600}>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 ">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
              {/* End Contact Form */}
            </div>
          </section>
          {/* /Contact Section */}
        </main>
        <footer id="footer" className="footer dark-background">
          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-geo-alt icon" />
                <div className="address">
                  <h4>Address</h4>
                  <p>SSGMCE</p>
                  <p>Shegaon, IN 444203</p>
                  <p />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-telephone icon" />
                <div>
                  <h4>Contact</h4>
                  <p>
                    <strong>Phone:</strong> <span>+91 9637843011</span><br />
                    <strong>Email:</strong> <span>support@petmateconnect.com</span><br />
                  </p>
                </div>
              </div>
              {/* <div class="col-lg-3 col-md-6 d-flex">
                    <i class="bi bi-clock icon"></i>
                    <div>
                        <h4>Opening Hours</h4>
                        <p>
                            <strong>Mon-Sat:</strong> <span>11AM - 23PM</span><br>
                            <strong>Sunday</strong>: <span>Closed</span>
                        </p>
                    </div>
                </div> */}
              <div className="col-lg-3 col-md-6">
                <h4>Follow Us</h4>
                <div className="social-links d-flex">
                  <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Petify</strong> <span>All Rights Reserved</span></p>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you've purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
              Designed by <a href="https://bootstrapmade.com/">team-ssgmce</a>
            </div>
          </div>
        </footer>
        {/* Scroll Top */}
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        {/* Preloader */}
        <div id="preloader" />
        {/* Vendor JS Files */}
        {/* Main JS File */}
      </div>
    );
  };

  export default HomePage;