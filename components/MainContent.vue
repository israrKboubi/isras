<template>
     <main class="col-lg-10 offset-lg-2">
      <div class="container">
        <div class="justify-content-center px-1 mx-1 px-xl-5 mx-xl-5">
          <section id="home" class="py-5 bg-text" data-text="01">
            <div class="row">
              <div class="col-lg-6">
                <div class="banner-image text-center" data-aos="fade-right">
                  <img src="/images/banner-image.webp" id="me" alt="banner" class="img-fluid">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="banner-content my-1 pt-1 my-lg-5 pt-lg-5" data-aos="fade-in">
                  <span class="text-muted text-uppercase" data-translatable="job-title">Full-Stack Developer//Développeur Full-Stack//مطور الويب الشامل</span>
                  <h1 data-translatable class="banner-title display-xl lh-1 txt-fx slide-up">Israr Kboubi//Kboubi
                    Israr//إصرار القبوبي</h1>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-3">
                <div class="icon-box" data-aos="fade-up">
                  <span data-translatable="frontend-number">01</span>
                  <h3 class="sub-heading" data-translatable="frontend-title">Front-End Developer//Développeur Front-End//مطور واجهات الويب</h3>
                  <p data-translatable="frontend-stack">Stack: Vue-Nuxt / Angular</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <span data-translatable="backend-number">02</span>
                  <h3 class="sub-heading" data-translatable="backend-title">Back-end Developer//Développeur Back-end// مطور ظَهيرٌ الويب</h3>
                  <p data-translatable="backend-stack">Stack: NodeJs / Java Spring</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <span data-translatable="certified-number">03</span>
                  <h3 class="sub-heading" data-translatable="certified-title">Certified//Certifié//معتمد</h3>
                  <p data-translatable="certified-stack">Vue/Angular/Spring Framework</p>
                </div>
              </div>
              <div class="col-lg-3">
                <a href="#portfolio" class="btn btn-dark text-uppercase py-4 px-5" data-aos="fade-up" data-aos-delay="300" data-translatable="view-all-work">View All Work//Voir Mon Travaux//عرض جميع الأعمال</a>
              </div>
            </div>            
          </section>

          <section id="about" class="my-5 py-5 bg-text" data-text="02">
            <div class="row d-flex flex-wrap" data-aos="fade-up">
              <div class="col-lg-6 pb-5">
                <span class="text-muted text-uppercase" data-translatable>BIODATA//BIODATA//بيانات شخصية</span>
                <h2 class="display-4 txt-fx slide-up" data-translatable>Education//Éducation//التعليم</h2>
                <div class="data-info py-3" data-aos="fade-up">
                  <span class="meta-date" data-translatable>2018 - 2021</span>
                  <h3 class="info-title" data-translatable="education-degree1">National Engineering Degree in Computer Science and Multimedia//Diplôme d'ingénieur national en informatique et multimédia//الشهادة الوطنية لمهندس في لعلوم التطبيقية والتكنولوجية</h3>
                  <p data-translatable="education-institute1">ISAMM Higher Institute of Arts and Multimedia Manouba//Institut supérieur des arts multimédia de La Manouba//المعهد العالي لفنون الملتيميديا بمنوبة</p>
                </div>
                <div class="data-info" data-aos="fade-up" data-aos-delay="100">
                  <span class="meta-date" data-translatable="education-date2">2015 - 2018</span>
                  <h3 class="info-title" data-translatable="education-degree2">Licentiate degree Information Systems Development (ISD)//Licence appliquée en développement des systèmes d'information (ISD)//الشهادة الوطنية للاجازة التطبيقية</h3>
                  <p data-translatable="education-institute2">Institute of Technological Studies of Bizerte (ISET Bizerte)//Institut Supérieur des Etudes Technologiques de Bizerte (ISET Bizerte)//معهد الدراسات التكنولوجية ببنزرت (ISET بنزرت).</p>
                </div>
                <div class="data-info" data-aos="fade-up" data-aos-delay="100">
                  <span class="meta-date" data-translatable="education-date3">2015</span>
                  <h3 class="info-title" data-translatable="education-degree3">High school degree//Diplôme d'études secondaires//شهادة الثانوية العامة</h3>
                  <p data-translatable="education-institute3">El Alia high school//lycée El Alia//</p>
                </div>                
                <div class=" pb-5">
                  <h2 class="display-4 txt-fx slide-up " data-aos="fade-up" data-aos-delay="300" data-translatable="volunteering-heading">Volunteering//Bénévolat//التطوع</h2>
                  <div class="data-info py-3" data-aos="fade-up">
                    <span class="meta-date" data-translatable="volunteering-date1">Jan 2020 - Jan 2021</span>
                    <h3 class="info-title" data-translatable="volunteering-role1">Media Advisor//Conseiller Média//مستشار الإعلام</h3>
                    <p data-translatable="volunteering-org1">JCI (Junior Chamber International)</p>
                  </div>
                  <div class="data-info" data-aos="fade-up" data-aos-delay="100">
                    <span class="meta-date" data-translatable>May 2018 - Jan 2021</span>
                    <h3 class="info-title" data-translatable>Member//Membre//عضو</h3>
                    <p data-translatable="volunteering-org2">JCI (Junior Chamber International)</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 pb-5" >
                <h2 class="display-4 txt-fx slide-up" data-translatable="experiences-heading">Experiences//Expériences//الخبرات</h2>
                
                <h4 class="display-7 txt-fx slide-up" data-translatable="keyrus-title">Keyrus MEA</h4>
                <div class="data-info py-3 px-3" data-aos="fade-up" data-aos-delay="200">
                  <span class="meta-date" data-translatable="job-date1">Jan 2023 - present</span>
                  <h3 class="info-title" data-translatable="job-role1">Back-end developer//Développeur Back-end//مطور ظَهيرٌ الويب</h3>
                  <p data-translatable="api-design-description">
                    Design and implement efficient RESTful APIs and microservices
                    //Concevoir et mettre en œuvre des API RESTful efficaces et des microservices
                    //تصميم وتنفيذ APIs RESTful فعّالة وخدمات صغيرة
                  </p> <p style="margin-top: -14px;">Stack :Quarkus/Spring Boot</p></div>
                <div class="data-info px-3" data-aos="fade-up" data-aos-delay="300">
                  <span class="meta-date" data-translatable="job-date2">Oct 2021 - Jan 2023</span>
                  <h3 class="info-title" data-translatable="job-role2">Front-end developer//Développeur Front-end//مطور واجهات الويب</h3>
                  <p data-translatable="ui-implementation-description">
                    Implement UI designs and web components 
                    //Implémenter des conceptions d'interface utilisateur et des composants Web 
                    //تنفيذ تصميمات واجهة المستخدم ومكونات الويب 
                  </p>                  <p style="margin-top: -14px;"> Stack: VueJS/Angular </p>
                </div>
                <div class="data-info px-3" data-aos="fade-up" data-aos-delay="300">
                  <span class="meta-date" data-translatable="job-date3">Feb 2021 - Oct 2021</span>
                  <h3 class="info-title" data-translatable="job-role3">Intern Software Engineer//Stagiaire Ingénieur Logiciel//متدرب مهندس برمجيات</h3>
                  <p data-translatable="project-description">
                    Project provided an intuitive and user-friendly interface for creating custom graphics, including social media posts, banners, and flyers.
                    //Le projet a fourni une interface intuitive et conviviale pour créer des graphiques personnalisés, y compris des publications sur les réseaux sociaux, des bannières et des dépliants.
                    //قدم المشروع واجهة سهلة الاستخدام وصديقة للمستخدم لإنشاء رسوم بيانية مخصصة ، بما في ذلك منشورات وبنرات ونشرات إعلانية.

                  </p>
                  <p style="margin-top: -14px;"> Stack: Svelte/NodeJS </p>
                   </div>
                
                <h4 class="display-7 txt-fx slide-up" data-aos="fade-up" data-aos-delay="300" data-translatable="arabe-soft-title">Arabe soft</h4>
                <div class="data-info px-3" data-aos="fade-up" data-aos-delay="300">
                  <span class="meta-date" data-translatable="job-date4">Feb 2018 - Jun 2018</span>
                  <h3 class="info-title" data-translatable>Intern Full-Stack developer//Stagiaire Développeur Full-Stack//متدرب مطور الويب الشامل</h3>
                  <p >Develop a ERP module<br>Stack :Laravel/Vue JS</p>
                </div>
                
                <h4 class="display-7 txt-fx slide-up" data-aos="fade-up" data-aos-delay="300" data-translatable="ozalis-technologie-title">Ozalis-Technologie</h4>
                <div class="data-info px-3" data-aos="fade-up" data-aos-delay="300">
                  <span class="meta-date" data-translatable="job-date5">Feb 2017</span>
                  <h3 class="info-title" data-translatable="job-role5">Intern Full-Stack developer//Stagiaire Développeur Full-Stack//متدرب مطور الويب الشامل</h3>
                  <p >Develop an E-commerce website<br>Stack :PHP Jquery/Bootstrap</p>
                </div>
                
                <h4 class="display-7 txt-fx slide-up" data-aos="fade-up" data-aos-delay="400" data-translatable="biat-bank-title">Biat bank</h4>
                <div class="data-info px-3" data-aos="fade-up" data-aos-delay="300">
                  <span class="meta-date" data-translatable="job-date6">Jan 2016</span>
                  <h3 class="info-title" data-translatable="job-role6">Trainee//Stagiaire//متدرب</h3>
                </div>
              </div>              
            </div>
          </section>

          <section id="experience" class="my-5 py-5 bg-text" data-text="03">
            <div class="row justify-content-center mb-5" >
              <div class="col-lg-6" data-aos="fade-up">
                <span class="text-muted text-uppercase" data-translatable="introduction-title">Introduction//Introduction//مقدمة</span>
                <h2 class="display-1 txt-fx slide-up" data-translatable="certifications-heading">Certifications//Certifications//الشهادات</h2>
                <p data-translatable="certifications-description">
                  Explore my portfolio and discover a proven track record of expertise backed by my certifications.
                  (click to see credentials)
                  //Explorez mon portfolio et découvrez un parcours éprouvé d'expertise soutenu par mes certifications.
                  (cliquez pour voir les références)
                  //استكشف ملفي الشخصي واكتشف سجل موثق للخبرة مدعومًا بشهاداتي.
                  (انقر لرؤية الشهادة)
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div id="cert-Swiper" class="swiper portfolio-Swiper portfolio-content py-4" data-aos="fade-up">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="image-holder">
                        <a href="/images/projects/Israr-vue-certif.pdf" target="_blank" title="portfolio details"><img src="/images/vue.webp"
                            alt="portfolio" class="img-fluid"></a>
                      </div>
                      <div class="caption d-flex justify-content-between align-items-center">
                        <div class="title">Certified Vue Developer</div>
                        <a href="/images/projects/Israr-vue-certif.pdf" target="_blank" class="image-format bg-orange">vue Academy</a>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="image-holder">
                        <a href="/images/projects/certif-react-israr.pdf" target="_blank" title="portfolio details"><img src="/images/react.webp"
                            alt="portfolio" class="img-fluid"></a>
                      </div>
                      <div class="caption d-flex justify-content-between align-items-center">
                        <div class="title">Web Development with React</div>
                        <a href="/images/projects/certif-react-israr.pdf" target="_blank" class="image-format bg-orange">Coursera</a>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="image-holder">
                        <a href="/images/projects/udemy-israr-angular.pdf" target="_blank" title="portfolio details"><img src="/images/Angular.webp"
                            alt="portfolio" class="img-fluid"></a>
                      </div>
                      <div class="caption d-flex justify-content-between align-items-center">
                        <div class="title">Angular Core Deep Dive</div>
                        <a href="#" class="image-format bg-blue">Udemy</a>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="image-holder">
                        <a href="/images/projects/certif-spring.pdf" target="_blank" title="portfolio details"><img src="/images/spring.webp"
                            alt="portfolio" class="img-fluid"></a>
                      </div>
                      <div class="caption d-flex justify-content-between align-items-center">
                        <div class="title">Spring Framework 6</div>
                        <a href="#" class="image-format bg-blue">Udemy</a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-pagination mt-5"></div>
                </div>
              </div>

            </div>
          </section>

          <section id="portfolio" class="my-5 py-5 bg-text" data-text="04">
            <div class="section-header my-5" data-aos="fade-up">
              <div class="row justify-content-center g-5">
                <div class="col-lg-4">
                  <span class="text-muted text-uppercase" data-translatable="recent-works-title">Some of my recent works//Certains de mes projects récents//بعض من أعمالي الأخيرة</span>
                  <h2 class="display-1 txt-fx slide-up" data-translatable="portfolio-heading">Portfolio//Portfolio//ملفي</h2>
                </div>
                <div class="col-lg-4" data-aos="fade-up">
                  <p data-translatable="portfolio-description">
                    Explore my portfolio, featuring projects where I contributed, highlighting my diverse skills and expertise.
                    //Explorez mon portfolio, présentant des projets auxquels j'ai contribué, mettant en avant mes compétences et mon expertise diverses.
                    //استكشف ملفي الشخصي الذي يضم المشاريع التي ساهمت فيها ، مبرزًا مهاراتي وخبرتي المتنوعة.
                  </p>
                  <a href="#portfolio" class="btn btn-dark px-5 py-4" data-translatable="view-all-button">View All//Voir tout//عرض الكل</a>
                </div>
              </div>
            </div>
            
            <div id="portfolio-Swiper" class="swiper portfolio-Swiper portfolio-content py-4" data-aos="fade-up">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="image-holder">
                    <a class="modalMarketPlace" onclick="populateModalConent(0)" href="#animatedModal" title="portfolio details"><img
                        src="/images/marketplace.webp" alt="portfolio" class="img-fluid"></a>
                  </div>
                  <div class="caption d-flex justify-content-between align-items-center">
                    <div class="title">Omni MarketPlace</div>
                    <a href="#" class="image-format bg-orange">Keyrus</a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="image-holder">
                    <a id="modalCare" class="modalMarketPlace" onclick="populateModalConent(1)"  href="#animatedModal" title="portfolio details"><img src="/images/care.webp"
                        alt="portfolio" class="img-fluid"></a>
                  </div>
                  <div class="caption d-flex justify-content-between align-items-center">
                    <div class="title">Omni Care</div>
                    <a href="#" class="image-format bg-orange">Keyrus</a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="image-holder">
                    <a id="modalMarketingMoneyFlow" onclick="populateModalConent(3)" class="modalMarketPlace" href="#animatedModal" title="portfolio details">
                      <img src="/images/moneyFlow.webp" alt="portfolio" class="img-fluid"></a>
                  </div>
                  <div class="caption d-flex justify-content-between align-items-center">
                    <div class="title">Omni MoneyFlow</div>
                    <a href="#" class="image-format bg-blue">Keyrus</a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="image-holder">
                    <a id="modalMarketing" onclick="populateModalConent(2)" class="modalMarketPlace" href="#animatedModal" title="portfolio details"><img
                        src="/images/marketing.webp" alt="portfolio" class="img-fluid"></a>
                  </div>
                  <div class="caption d-flex justify-content-between align-items-center">
                    <div class="title">Omni Marketing</div>
                    <a href="#" class="image-format bg-blue">Keyrus</a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="image-holder">
                    <a id="modalKart" onclick="populateModalConent(8)" href="#animatedModal" class="modalMarketPlace"  title="portfolio details"><img src="/images/kart.webp" alt="portfolio"
                        class="img-fluid"></a>
                  </div>
                  <div class="caption d-flex justify-content-between align-items-center">
                    <div class="title">Karting Game</div>
                    <a href="#" class="image-format">Self Project</a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="image-holder">
                    <a id="modalOmni" onclick="populateModalConent(4)" href="#animatedModal" class="modalMarketPlace" title="portfolio details"><img
                        src="/images/omniflow.webp" alt="portfolio" class="img-fluid"></a>
                  </div>
                  <div class="caption d-flex justify-content-between align-items-center">
                    <div class="title">Omniflow.cx</div>
                    <a href="#" class="image-format">Keyrus</a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="image-holder">
                    <a id="modalBrand" onclick="populateModalConent(6)" href="#animatedModal" class="modalMarketPlace" title="portfolio details"><img src="/images/brandreview.webp"
                        alt="portfolio" class="img-fluid"></a>
                  </div>
                  <div class="caption d-flex justify-content-between align-items-center">
                    <div class="title">Brand Review</div>
                    <a href="#" class="image-format">Keyrus</a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="image-holder">
                    <a id="modalCotton" onclick="populateModalConent(5)" href="#animatedModal" class="modalMarketPlace" title="portfolio details"><img src="/images/cotton.webp"
                        alt="portfolio" class="img-fluid"></a>
                  </div>
                  <div class="caption d-flex justify-content-between align-items-center">
                    <div class="title">Cotton Chad</div>
                    <a href="#" class="image-format">Arabe Soft</a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="image-holder">
                    <a id="modalMaxit" onclick="populateModalConent(7)" href="#animatedModal" class="modalMarketPlace" title="portfolio details"><img src="/images/maxit.webp"
                        alt="portfolio" class="img-fluid"></a>
                  </div>
                  <div class="caption d-flex justify-content-between align-items-center">
                    <div class="title">Maxit</div>
                    <a href="#" class="image-format">Orange</a>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="image-holder">
                    <a id="modalTank" onclick="populateModalConent(9)" href="#animatedModal" class="modalMarketPlace" title="portfolio details"><img src="/images/tank.webp" alt="portfolio"
                        class="img-fluid"></a>
                  </div>
                  <div class="caption d-flex justify-content-between align-items-center">
                    <div class="title">Tank Game</div>
                    <a href="#" class="image-format">Self Project</a>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination mt-5"></div>
            </div>
          </section>

          <Footer></Footer>
          

        </div>
      </div>
    </main>
          <div id="animatedModal">
      <div id="btn-close-modal" class="close-animatedModal">
        <img src="/images/chocolat/close.webp" alt="" />
      </div>
      <div id="rendred"></div>
    </div>

</template>