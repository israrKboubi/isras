(function ($) {

  "use strict";
  

  $(".modalMarketPlace").animatedModal({
    color:"#FFF"
  });


})(jQuery);


function populateModalConent(index){
  var data=[{
    "modal": {
      "closeButton": {
        "imageSrc": "/images/chocolat/close.webp",
        "classed":"col-lg-6"

      },
      "content": {
        "slides": [
          {
            "imageSrc": "images/marketplace.webp",
            "title": "portfolio details"
          },
          {
            "imageSrc": "images/projects/marketplace1.webp",
            "title": "portfolio details"
          }
        ],
        "heading": "Omniflow MarketPlace",
        "subHeading": "Keyrus",
        "description": "This platform provides a diverse catalog and an all-encompassing store, ensuring an exciting and rewarding journey. Whether purchasing tickets, products, or exploring local vendors and content creators, users can enjoy a comprehensive and varied exploration experience.",
        "jobDetails": {
          "date": "1 Jan 2023",
          "jobTitle": "Front-End developer",
          "responsibilities": [
            "Implementing responsive and visually appealing user interfaces using Vue.js and Ant Design.",
            "Utilizing Nuxt.js for server-side rendering and optimizing performance for a seamless user experience.",
            "Integrating and customizing Ant Design components to align with the project's design guidelines.",
            "Configuring and managing routes with Nuxt.js to ensure proper navigation and a consistent user experience.",
            "Integrating with backend APIs to fetch and update data on the client side using asynchronous calls.",
            "Ensuring data consistency and handling error scenarios gracefully."
          ]
        },
        "stackInfo": {
          "stack": "Nuxtjs Vuejs Cypress AntDesign Pinia",
          "references": "https://omniflow.cx/#marketplace"
        }
      }
    }   
  },
  {
    "modal": {
      "closeButton": {
        "imageSrc": "/images/chocolat/close.webp",
        "classed":"col-lg-6"

      },
      "content": {
        "slides": [
          {
            "imageSrc": "images/care.webp",
            "title": "portfolio details"
          },
          {
            "imageSrc": "images/projects/selfcare1.webp",
            "title": "portfolio details"
          }
        ],
        "heading": "Omniflow SelfCare",
        "subHeading": "Keyrus",
        "description": "The implementation of Selfcare introduces various advantages for clients, fostering heightened customer satisfaction, enhanced transparency, and improved access to information. Through this empowerment, clients gain increased autonomy in managing their accounts, contributing to the establishment of an outstanding customer experience. These features collectively foster the development of robust, enduring relationships with clients.",
        "jobDetails": {
          "date": "1 Jan 2023",
          "jobTitle": "Front-End developer",
          "responsibilities": [
            "Implementing responsive and visually appealing user interfaces using Vue.js and Ant Design.",
            "Utilizing Nuxt.js for server-side rendering and optimizing performance for a seamless user experience.",
            "Integrating and customizing Ant Design components to align with the project's design guidelines.",
            "Configuring and managing routes with Nuxt.js to ensure proper navigation and a consistent user experience.",
            "Integrating with backend APIs to fetch and update data on the client side using asynchronous calls.",
            "Conducting unit testing for individual components and modules."
          ]
        },
        "stackInfo": {
          "stack": "Nuxtjs Vuejs Cypress AntDesign Pinia",
          "references": "https://omniflow.cx/#Care"
        }
      }
    }
  },
  {
    "modal": {
      "closeButton": {
        "imageSrc": "/images/chocolat/close.webp",
        "classed":"col-lg-6"

      },
      "content": {
        "slides": [
          {
            "imageSrc": "images/marketing.webp",
            "title": "portfolio details"
          },
          {
            "imageSrc": "images/projects/marketing1.webp",
            "title": "portfolio details"
          }
        ],
        "heading": "Omniflow Marketing",
        "subHeading": "Keyrus",
        "description": "Omniflow Marketing is a versatile tool designed to facilitate the creation of effective campaigns tailored to a first-party data audience. This module provides user-friendly audience management similar to popular platforms like Facebook or Google. The automated campaign manager streamlines processes, allowing for efficient campaign management, while the capability to create personalized content fosters customer-first connections.",
        "jobDetails": {
          "date": "1 Jan 2023",
          "jobTitle": "Front-End developer",
          "responsibilities": [
            "Implementing responsive and visually appealing user interfaces using Vue.js and Ant Design.",
            "Utilizing Nuxt.js for server-side rendering and optimizing performance for a seamless user experience.",
            "Integrating and customizing Ant Design components to align with the project's design guidelines.",
            "Configuring and managing routes with Nuxt.js to ensure proper navigation and a consistent user experience.",
            "Integrating with backend APIs to fetch and update data on the client side using asynchronous calls.",
            "Conducting unit testing for individual components and modules."
          ]
        },
        "stackInfo": {
          "stack": "Nuxtjs Vuejs Cypress AntDesign Pinia",
          "references": "https://omniflow.cx/#Marketing"
        }
      }
    }
  },
  {
    "modal": {
      "closeButton": {
        "imageSrc": "/images/chocolat/close.webp",
        "classed":"col-lg-6"

      },
      "content": {
        "slides": [
          {
            "imageSrc": "images/moneyFlow.webp",
            "title": "portfolio details"
          },
          {
            "imageSrc": "images/projects/MoneyFlow1.webp",
            "title": "portfolio details"
          }
        ],
        "heading": "Omniflow Marketing",
        "subHeading": "Keyrus",
        "description": "Moneyflow serves as a comprehensive mobile operations management system, offering empowerment to small businesses by eliminating the uncertainties associated with cash-flow management. This platform allows businesses to effortlessly oversee and optimize all financial transactions involving cash inflow and outflow. Real-time visibility into cash flow provides businesses with the tools needed to make informed decisions and maintain control over their financial operations.",
        "jobDetails": {
          "date": "20 Nov 2023",
          "jobTitle": "Back-End developer",
          "responsibilities": [
            "Implementing RESTful APIs and endpoints using Quarkus to facilitate communication between the frontend and backend.",
            "Designing and implementing database schemas to store and retrieve financial transaction data.",
            "Utilizing Quarkus' data persistence capabilities or integrating with databases such as PostgreSQL or MongoDB.",
            "Integrating Kafka for event-driven architecture to enable real-time updates and communication between different components of the system.",
            "Implementing Kafka producers and consumers to handle financial transaction events.",
            "Writing unit tests using JUnit to ensure the reliability and correctness of backend functionalities.",
            "Ensuring secure communication between the backend and other components."
          ]
        },
        "stackInfo": {
          "stack": "Quarkus SpringBoot Kafka JUnit MongoDB",
          "references": "https://omniflow.cx/#MoneyFlow"
        }
      }
    }
  },
  {
    "modal": {
      "closeButton": {
        "imageSrc": "/images/chocolat/close.webp",
        "classed":"col-lg-12"

      },
      "content": {
        "slides": [
          {
            "imageSrc": "images/cx1.jpg",
            "title": "portfolio details"
          },
          {
            "imageSrc": "images/cx2.jpg",
            "title": "portfolio details"
          },
          {
            "imageSrc": "images/cx3.jpg",
            "title": "portfolio details"
          }
        ],
        "heading": "Omniflow Cx About website",
        "subHeading": "Keyrus",
        "description": "The Omniflow website offers a comprehensive customer experience suite designed for businesses. The focus is on direct-to-consumer (DTC) strategies, content economy, and prioritizing a consumer-centric business model. The platform enables businesses to analyze customer usage behavior, allowing them to deliver personalized experiences across various channels and platforms.",
        "jobDetails": {
          "date": "20 Nov 2023",
          "jobTitle": "Back-End developer",
          "responsibilities": [
            "Implementing responsive and visually appealing user interfaces using Vue.js and Ant Design.",
            "Utilizing Nuxt.js for server-side rendering and optimizing performance for a seamless user experience.",
            "Integrating and customizing Ant Design components to align with the project's design guidelines."
          ]
        },
        "stackInfo": {
          "stack": "VueJs NuxtJS",
          "references": "https://omniflow.cx/"
        }
      }
    }
  },
  {
  "modal": {
    "id": "animatedCotton",
    "closeButton": {
      "imageSrc": "/images/chocolat/close.webp",
      "classed":"col-lg-12"

    },
    "content": {
      "slides": [
        {
          "imageSrc": "images/projects/cottonchad1.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/cottonchad2.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/cottonchad3.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/cottonchad4.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/cottonchad5.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/cottonchad7.webp",
          "title": "portfolio details"
        }
      ],
      "heading": "Cotton Chad Erp module",
      "subHeading": "Arabe Soft",
      "description": "An Erp module for a cotton company; this is my main internship. This project was about developing a web module for the Enterprise resource planning for a company. It has a lot of management features, and this module was made with Laravel and VueJs with a real-time chat messaging.",
      "jobDetails": {
        "date": "5 Feb 2021",
        "jobTitle": "Web Developer(Intern)",
        "responsibilities": [
          "User Authentication and Authorization: Implement robust user authentication.",
          "Set up role-based access control.",
          "Dashboard: Develop a dynamic dashboard with key performance indicators.",
          "Inventory Management: Implement features for tracking and managing inventory.",
          "Supply Chain Management: Include features for managing the supply chain process.",
          "Production Planning and Scheduling: Develop tools for planning and scheduling production activities.",
          "Sales and Order Management: Create a sales module for managing customer orders.",
          "Vendor Management: Develop a system for managing vendor relationships and purchase orders.",
          "Financial Management: Integrate budgeting, expense tracking, and financial reporting.",
          "Integration with External Systems: Explore integration with other systems and third-party APIs.",
          "Testing and Debugging: Implement thorough testing for stability and reliability."
        ]
      },
      "stackInfo": {
        "stack": "Laravel PHP JavaScript Realtime chat VueJs",
        "references": "@Me"
      }
    }
  }
},
{
  "modal": {
    "id": "animatedModalBrand",
    "closeButton": {
      "imageSrc": "/images/chocolat/close.webp",
      "classed":"col-lg-6"

    },
    "content": {
      "slides": [
        {
          "imageSrc": "images/brand1.jpg",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/brand2.jpg",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/brand4.png",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/brandreview.webp",
          "title": "portfolio details"
        }
      ],
      "heading": "Brand Review Generator",
      "subHeading": "Keyrus",
      "description": "A brand review generator is a valuable graphic design tool that allows users to create visually appealing images by combining text, images, backgrounds, and filters. This type of tool can be instrumental for businesses and individuals looking to maintain a consistent and professional visual identity across various platforms.",
      "jobDetails": {
        "date": "5 Feb 2021",
        "jobTitle": "Web Developer(Intern)",
        "responsibilities": [
          "User Interface Refinement: Conduct user testing to gather feedback on the interface and make refinements to improve usability.",
          "Enhance Drag-and-Drop Functionality: Evaluate and improve the drag-and-drop feature for smoother element arrangement.",
          "Font Customization Options: Add more font choices and consider integrating Google Fonts or other external font libraries for diversity.",
          "Advanced Text Options: Explore additional customization options for text such as shadows, letter spacing, and line height.",
          "Advanced Image Editing Features: Consider adding more advanced image editing features like filters, overlays, and special effects.",
          "Expand Background Options: Add more options to the library of backgrounds, gradients, patterns, and solid colors.",
          "Template Variety: Expand the selection of pre-designed templates to cover a broader range of visual content.",
          "Advanced Export Options: Implement additional export options or settings based on user preferences.",
          "Real-Time Collaboration Features: Explore real-time collaboration features to enhance team collaboration on design projects.",
          "Version Control Enhancements: Improve version control mechanisms to provide more granular control and tracking of changes.",
          "Optimize Responsive Design"
        ]
      },
      "stackInfo": {
        "stack": "Svelte Node.Js Framework7 Directus",
        "references": "@Me"
      }
    }
  }
},
{
  "modal": {
    "closeButton": {
      "imageSrc": "/images/chocolat/close.webp",
      "classed":"col-lg-6"
    },
    "content": {
      "slides": [
        {
          "imageSrc": "images/maxit.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/maxit (1).webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/maxit (2).webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/maxit (3).webp",
          "title": "portfolio details"
        }
      ],
      "heading": "Max it(Super App)",
      "subHeading": "Orange",
      "description": "Max it is a \"super-app\" designed to be a portal for mobile services that simplifies the digital experience and eases achievement of daily activities for all users on the continent, whether they are Orange customers or not. Max it brings together three essential services in one single smartphone interface:\n\n- Account functionalities to manage mobile and fixed lines.\n- Orange Money with all its services for local and international money transfers, payments to our billing and merchant partners, bank transfers, credit and savings.\n- An e-commerce platform offering digital content (online games, music, TV, videos, news, etc.) and an innovative digital ticketing service allowing customers to buy tickets for concerts, transport, etc.",
      "jobDetails": {
        "date": "20 Nov 2023",
        "jobTitle": "Back-End developer(BFF)",
        "responsibilities": [
          "Develop high-performance, lightweight, and scalable applications using Quarkus framework.",
          "Design and implement efficient RESTful APIs and microservices using Quarkus.",
          "Troubleshoot and debug issues, and provide timely resolutions to maintain application stability.",
          "Harness the power of Mutiny's reactive streams to handle asynchronous data processing and event-driven scenarios effectively.",
          "Collaborate with teams to identify critical paths in the application and apply reactive patterns using Mutiny to optimize performance."
        ]
      },
      "stackInfo": {
        "stack": "Quarkus SpringBoot Kafka BFF TDD",
        "references": "https://newsroom.orange.com/orange-introduces-its-super-app-max-it-to-simplify-everyday-life-for-people-in-africa-and-the-middle-east/"
      }
    }
  }
},
{
  "modal": {
    "id": "animatedKart",
    "closeButton": {
      "imageSrc": "/images/chocolat/close.webp",
      "classed":"col-lg-12"
    },
    "content": {
      "slides": [
        {
          "imageSrc": "images/projects/kart2.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/kart3.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/kart4.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/kart5.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/kart6.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/kart7.webp",
          "title": "portfolio details"
        }
      ],
      "heading": "Unity Karting Game",
      "subHeading": "Own project",
      "description": "A thrilling multiplayer karting game developed using Unity. This project was the focal point of my internship, involving the creation of an exciting gaming experience. The game features multiplayer functionality, dynamic kart racing, and real-time communication for an immersive gaming experience.",
      "jobDetails": {
        "date": "5 Feb 2022",
        "jobTitle": "Game Developer (Intern)",
        "responsibilities": [
          "Multiplayer Functionality: Implement seamless multiplayer gaming with real-time player interaction.",
          "Kart Racing Dynamics: Create an engaging racing experience with responsive kart controls and physics.",
          "Power-ups and Items: Introduce exciting power-ups and items for strategic gameplay.",
          "Track Design: Design visually appealing and challenging racing tracks.",
          "Leaderboards: Develop a leaderboard system to track players' scores and rankings.",
          "Customization: Allow players to customize their karts and characters.",
          "Collision and Physics: Implement realistic collision detection and physics simulations.",
          "Sound and Graphics: Enhance the gaming experience with captivating sound and graphics.",
          "Testing and Debugging: Conduct thorough testing for a smooth and bug-free gaming experience."
        ]
      },
      "stackInfo": {
        "stack": "Unity C# Multiplayer Networking",
        "references": "@Me"
      }
    }
  }
},
{
  "modal": {
    "id": "animatedTank",
    "closeButton": {
      "imageSrc": "/images/chocolat/close.webp",
      "classed":"col-lg-12"
    },
    "content": {
      "slides": [
        {
          "imageSrc": "images/projects/tank1.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/tank2.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/tank3.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/tank4.webp",
          "title": "portfolio details"
        },
        {
          "imageSrc": "images/projects/tank5.webp",
          "title": "portfolio details"
        }
      ],
      "heading": "AR Tank Battle",
      "subHeading": "Own Project",
      "description": "Immerse yourself in the world of augmented reality with our thrilling tank fighting game. Developed using cutting-edge AR technology, this 3D game takes the traditional tank battle experience to a new level. Engage in epic battles, strategize your moves, and experience intense tank warfare in a dynamic augmented reality environment.",
      "jobDetails": {
        "date": "5 Feb 2023",
        "jobTitle": "Game Developer (AR/3D)",
        "responsibilities": [
          "Augmented Reality Experience: Utilize AR technology to provide an immersive gaming experience.",
          "3D Tank Models and Environments: Create realistic and visually stunning 3D tank models and battlegrounds.",
          "Multiplayer Tank Battles: Implement multiplayer functionality for intense tank battles.",
          "AR Object Recognition: Integrate object recognition for interactive and dynamic AR elements.",
          "Strategic Gameplay: Develop strategic gameplay with mission objectives and tactical decision-making.",
          "Special Abilities and Upgrades: Include special abilities and tank upgrades for enhanced gameplay.",
          "Testing and Optimization: Conduct thorough testing and optimization for a seamless AR gaming experience."
        ]
      },
      "stackInfo": {
        "stack": "Unity C# Multiplayer Networking",
        "references": "@me"
      }
    }
  }
}

  
  
  
];

  var content = `

  <div class="modal-content">
    <div class="container">
      <div class="row d-flex flex-wrap" >
        <div class="${data[index].modal.closeButton.classed}">
          <div class="swiper-port mySwiper" id="ee" init="false">
          <div class="swiper-wrapper">`;


    for (let indexImage = 0; indexImage < data[index].modal.content.slides.length; indexImage++) {
       content +=               
       `<div class="swiper-slide">
       <div class="image-holder">
         <a title="portfolio details"><img src="${data[index].modal.content.slides[indexImage].imageSrc}" alt="portfolio" class="img-fluid"></a>
       </div>
     </div>`;
      
    }
            
      content += `
      </div>
        </div>
        </div>
        <div class="col-lg-6">
          <h2 class="display-4 txt-fx slide-up">${data[index].modal.content.heading}</h2>
          <h4 class="display-7 txt-fx slide-up">${data[index].modal.content.subHeading}</h4>
          <div class="data-info py-3 px-3">
            <h4 class="info-title">Description</h4>
            <p>${data[index].modal.content.description}</p>
          </div>
          <div class="data-info py-3 px-3" >
            <span class="meta-date">${data[index].modal.content.jobDetails.date}</span>
            <h3 class="info-title">Role</h3>
            <p>${data[index].modal.content.jobDetails.jobTitle}<br>${data[index].modal.content.jobDetails.responsibilities.join("<br>")}</p>
          </div>
          <div class="data-info px-3" >
            <h3 class="info-title">Stack</h3>
            <p>${data[index].modal.content.stackInfo.stack}</p>
            <h3 class="info-title">References</h3>
            <a class="ref" href="${data[index].modal.content.stackInfo.references}">${data[index].modal.content.stackInfo.references}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;



  document.getElementById("rendred").innerHTML=content;
  var swiperX = new Swiper("#ee", {
    grabCursor: true,
    effect: "creative",
    autoplay: {
      delay: 3000,
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -200],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
}
