<template>
  <section id="contact" class="my-5 py-5 bg-text" data-text="05">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-6">
          <span class="text-muted text-uppercase" >Personal Info</span>
          <h2 class="display-1 txt-fx" >Contact Me</h2>
          <p data-translatable>Don't be shy, just send me whatever you think!.
          </p>
        </div>
      </div>
      <div class="row d-flex g-5">
        <div class="col-lg-7">
          <h3 >Frequently Asked Questions</h3>
          <div class="accordion" id="accordionExample2" >
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button data-translatable class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse1" aria-expanded="true" aria-controls="accordion-collapse1">
                  How many years of experience do you have?
                </button>
              </h2>
              <div id="accordion-collapse1" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                <div data-translatable class="accordion-body">
                  I have 3 years of experience in software development, with expertise in Vue, Angular, Spring, and Quarkus. I have successfully worked on projects utilizing these technologies, showcasing my skills in front-end development (Vue, Angular) and back-end development (Spring, Quarkus).
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button data-translatable class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse2" aria-expanded="false" aria-controls="accordion-collapse2">
                  What specific projects have you worked on during your 3 years of experience?
                </button>
              </h2>
              <div id="accordion-collapse2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                <div data-translatable class="accordion-body">
                  I've had the privilege of contributing to impactful projects within both the telecommunications and banking sectors. In the telecommunications domain, I've been involved in developing solutions that enhance communication networks, streamline processes, and improve user experiences. On the banking front, my expertise has been applied to projects focused on secure and efficient financial transactions, compliance with regulatory standards, and the creation of user-friendly banking interfaces.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button data-translatable class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-collapse3" aria-expanded="false" aria-controls="accordion-collapse3">
                  What motivates you to pursue a career in software development and continuously strive for excellence?
                </button>
              </h2>
              <div id="accordion-collapse3" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
                <div  class="accordion-body">
                  My motivation in software development stems from the endless potential to create meaningful and impactful solutions. The ability to craft innovative software that addresses real-world challenges and improves people's lives is a driving force for me. Witnessing the positive outcomes of well-designed applications and the tangible impact they have fuels my passion.
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="col-lg-5">
          <div class="right-content">
            <div class="element-header align-right">
              <h3 data-translatable="message-heading">Feel free to send me a message or any word of appreciation.</h3>
            </div>
            <div class="contact-form py-4">
              <form id="form" class="form-group" action="https://formspree.io/f/xgegaknk" method="POST">
                <div class="pb-2"><input type="text" name="name" placeholder="Your Full Name" class="form-control"></div>
                <div class="pb-2"><input type="email" name="email" placeholder="Your Email Address" class="form-control"></div>
                <div class="pb-2"><textarea name="message" placeholder="Your Message" rows="6" class="form-control"></textarea></div>
                <button type="submit" name="submit" class="btn btn-dark w-100 btn-rounded" data-translatable="submit-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
</template>
