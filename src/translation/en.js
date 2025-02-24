import route from "../Routes.json"
import imagessvg from "../../public/imagessvg"

const logo = {
  "name": "Fatoura.",
  "slug": route.public.homepage
}
const currency = "MAD";
const en = {
    "header": {
        "logo": logo,

        "Navbar": [
            {
              "id": 1,
              "name": "Home",
              "slug": route.public.homepage,
            },
            {
              "id": 2,
              "name": "Pricing",
              "slug": route.public.pricing,
            },
            {
              "id": 3,
              "name": "About Us",
              "slug": route.public.about,
            },
            {
              "id": 4,
              "name": "Contact",
              "slug": route.public.contact,
            },
          ],
        "login": {
            "name": "Log In",
            "slug": route.public.signin
        },
        "signup": {
            "name": "Sign Up",
            "slug": route.public.signup
        }
    },
    "footer": {
      "logo" : logo,
      "description": "Focus on growing your business, let Fatoura handle the rest. Are you a freelancer or small business owner? Fatoura is the perfect solution to manage your invoices, tax declarations, and cash flow with ease and professionalism.",
      
      "links": [ 
      {
        "id": 1,
        "title": "Our Solutions",
        "list": [
          {"id": 1, "name": "AI Platform", slug: "#"},
          {"id": 2, "name": "AI Algorithms", slug: "#"},
          {"id": 3, "name": "Industry Applications", slug: "#"},
        ],
      },
      { 
        "id": 2,
        "title": "Use Cases",
        "list": [
          {"id": 1, "name": "Predictive Analysis", slug: "#"},
          {"id": 2, "name": "Customer Experience", slug: "#"},
          {"id": 3, "name": "Automation", slug: "#"},
        ],
      },
      {
        "id": 3,
        "title": "Resources",
        "list": [
          {"id": 1, "name": "Pricing", slug: route.public.pricing},
          {"id": 2, "name": "Blog", slug: "#"},
          {"id": 3, "name": "Case Studies", slug: "#"},
          {"id": 4, "name": "Terms of Service", slug: "#"},
          {"id": 5, "name": "Privacy Policy", slug: "#"},
        ],
      },
      {
        "id": 4,
        "title": "Company",
        "list": [
          {"id": 1, "name": "About Us", slug: route.public.about},
          {"id": 2, "name": "Careers", slug: "#"},
          {"id": 3, "name": "Contact Us", slug: route.public.contact},
        ],
      },
      ],
      "bottom": {
      "copyright": "Copyright © 2025 . Crafted with ♥ by Lahoucine EL KHATTABY at ",
      "logo": logo
    }
    },
    "hero": {
      "txt1": "Focus on growing your business, let ",
      "title": "Fatoura",
      "txt2": " handle the rest.",
      "description": "Are you a freelancer or small business owner? Fatoura is the perfect solution to manage your invoices, tax declarations, and cash flow with ease and professionalism.",
      "btn": {
        "name": "Getting started",
        "slug": route.public.signin
      },
      "img": "/heroimg.svg"
    },
    "features" : {
      "title": "Features",
      "description": "Simplify your tax declarations, invoicing, and financial management with our comprehensive platform tailored for independent workers and small businesses in Morocco:",
      "data" : [
        {
            "id":1 ,
            "nbr": '01',
            "name": "Tax Declaration Management",
            "txt": "Automatic tax calculation and one-click tax declaration submission."
        },
        {
            "id":2 ,
            "nbr": '02',
            "name": "Invoicing",
            "txt": "Create professional invoices and quotes compliant with Moroccan legal standards."
        },
        {
            "id":3 ,
            "nbr": '03',
            "name": "Cash Flow Management",
            "txt": "Track incoming and outgoing payments with notifications for unpaid invoices."
        },
        {
            "id":4 ,
            "nbr": '04',
            "name": "Automatic Financial Reports",
            "txt": "Automatically generate financial reports to prove income to banks."
        },
        {
            "id":5 ,
            "nbr": '05',
            "name": "Integrated Support",
            "txt": "Tutoriels et support via chatbot pour répondre à vos questions administratives."
        },
        {
            "id":6 ,
            "nbr": '06',
            "name": "Simplified Templates",
            "txt": "Simplified invoice and quote templates for artisans, merchants, and freelancers."
        },
    ] 
    },
    "howItWorks": {
      "title": "How Does Fatoura Work ?",
      "data": [
        {
            "id": 1,
            "name": "Sign Up and Get Your Account",
            "txt": "Create your account in minutes using your email or Google account."
        },
        {
            "id": 2,
            "name": "Set Up Your Profile",
            "txt": "Add your business information (e.g., business name, address, tax details) to customize your experience."
        },
        {
            "id": 3,
            "name": "Start Creating Invoices",
            "txt": "Design professional invoices and quotes using our simplified and customizable templates."
        },
        {
          "id": 4,
          "name": "Submit Tax Declarations",
          "txt": "Use Fatoura to submit your tax declarations in one click, with automatic tax calculation."
        },
        {
          "id": 5,
          "name": "Track Your Payments",
          "txt": "Track incoming and outgoing payments, and get notifications for unpaid invoices."
        },
        {
          "id": 6,
          "name": "Benefit from Financial Reports",
          "txt": "Generate automatic financial reports to manage your business and prove income to banks."
        },
    ]    
    },
    "benefits": {
      "title": "Why Fatoura ?",
      "data": [
          {
              "id": 1,
              "title": "Designed for Freelancers and Small Businesses",
              "txt": "Fatoura is designed specifically to meet the needs of freelancers, artisans, and small businesses in Morocco.",
              "img": "/store.png"
          },
          {
              "id": 2,
              "title": "Full Compliance with Moroccan Laws",
              "txt": "All invoices and tax declarations are fully compliant with Moroccan laws and regulations.",
              "img": "/compliant.png"
          },
          {
              "id": 3,
              "title": "User-Friendly Interface",
              "txt": "A simple and intuitive interface that makes managing your business easier than ever, even if you're not tech-savvy.",
              "img": "/dashboard.png"
          },
          {
              "id": 4,
              "title": "Integrated Support in Arabic, English and French",
              "txt": "Integrated technical support in Arabic, English and French to assist you every step of the way.",
              "img": "/chat.png"
          },
          {
            "id": 5,
            "title": "Time and Effort Saving",
            "txt": "Save hours of tedious work with our automated tools for invoicing, tax declarations, and financial reporting.",
            "img": "/stopwatch.png"
          },
          {
            "id": 6,
            "title": "Competitive Pricing",
            "txt": "Flexible pricing plans to suit all budgets, with a free trial to get started.",
            "img": "/wallet.png"
          },
      ]
    },
    "pricing": {
      "title": "Choose Your Plan",
      "description": "Choose the plan that fits your business and enjoy Fatoura's full features. Start your free trial today.",
      "currency": " MAD",
      "date": "/month",
      "btn": {
        "name": "Get started",
        "slug": route.public.signin
      },
      "data": [
          {
              "id": 1,
              "type": "Basic",
              "txt": "It's perfect for freelancers and artisans.",
              "price": "99",
              "ben": [
                "Create invoices and quotes",
                "Manage up to 50 invoices per month",
                "Email support",
                "Customizable invoice templates"
              ]
          },
          {
              "id": 2,
              "type": "Professional",
              "txt": "Designed for small and medium businesses.",
              "price": "199",
              "ben": [
                "All Basic plan features",
                "Manage up to 90 invoices per month",
                "Submit tax declarations",
                "Live chat support"
              ]
          },
          {
              "id": 3,
              "type": "Advanced",
              "txt": "For businesses needing comprehensive solutions.",
              "price": "399",
              "ben": [
                "All Professional plan features",
                "Unlimited invoice management",
                "Automatic financial reports",
                "Dedicated phone support"
              ]
          }
      ]
    },
    "testimonials": {
      "title": "What Our Customers Say About Fatoura",
      "data": [
          {
              "id": 1,
              "name": "Karima",
              "msg": "Fatoura has changed the way I manage my business! Now I can create professional invoices in minutes and submit tax declarations with ease. I recommend it to all freelancers.",
              "img": "/heroabout.jpg"
          },
          {
              "id": 2,
              "name": "Ahmed",
              "msg": "Thanks to Fatoura, managing invoices and payments has become much easier. The integration with Moroccan administrative services has saved me a lot of time and effort.",
              "img": "/heroabout.jpg"
          },
          {
              "id": 3,
              "name": "Leila",
              "msg": "The automatic financial reports helped me prove my income to the bank and get funding for my online store. Fatoura truly makes business management easier.",
              "img": "/heroabout.jpg"
          }
      ]
    },
    "signin": {
      "img": 'https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
      "logo": logo.name,
      "welcoming": "Welcome back!",
      "google": {
        "txt": "Sign in with Google",
        "link": "#"
      },
      "txt": "or login with email",
      "email": "Email Address",
      "password": "Password",
      "forgetpass": {
        "txt": "Forget Password?",
        "link": "#"
      },
      "btn": {
        "txt": "Login",
        "link": "" 
      },
      "signup": {
        "txt": "or sign up",
        "link": route.public.signup
      }
    },
    "register": {
      "img": 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      "txt": "Register",
      "name": "Full Name",
      "email": "Email Address",
      "password": "Password",
      "confirmPass": "Confirm Password",
      "btn": {
        "txt": "Create an account",
        "link": "#"
      },
      "signin": {
        "txt": "Already i have an account",
        "link": route.public.signin
      }
    },
    "pricingLayout": {
      "hero" : {
        "title": "Pricing Plans to Suit All Your Needs",
        "txt": "Choose the plan that fits your business and enjoy Fatoura's full features. Start your free trial today."
      },
      "pricing": {
        "title": "Pricing Plans"
      },
      "plan": {
        "title": "Plan Comparison",
        "head": [
          "Feature", "Basic", "Professional", "Advanced"
        ],
        "data": [
          {
              "id": 1,
              "feature": "Monthly Invoices",
              "basic": "50",
              "pro": "200",
              "advanced": "Unlimited",
          },
          {
              "id": 2,
              "feature": "Tax Declaration Submission",
              "basic": "❌",
              "pro": "✔️",
              "advanced": "✔️",
          },
          {
              "id": 3,
              "feature": "Automatic Financial Reports",
              "basic": "❌",
              "pro": "❌",
              "advanced": "✔️",
          },
          {
              "id": 4,
              "feature": "Live Chat Support",
              "basic": "❌",
              "pro": "✔️",
              "advanced": "✔️",
          },
          {
              "id": 5,
              "feature": "Dedicated Phone Support",
              "basic": "❌",
              "pro": "❌",
              "advanced": "✔️",
          }
      ]
      },
      "faq": {
        "title": "Pricing FAQ",
        "data": [
          {
              id: 1,
              qt: "Can I upgrade or downgrade between plans?",
              rs: "Yes, you can upgrade or downgrade between plans at any time."
          },
          {
              id: 2,
              qt: "What payment methods do you accept?",
              rs: "We accept major credit cards, PayPal, and bank transfers."
          },
          {
              id: 3,
              qt: "Is there a refund policy?",
              rs: "Yes, we offer a 30-day money-back guarantee."
          }
      ]
      }
    },
    "cta": {
      "title": "Join Fatoura Today",
      "txt": "Ready to simplify your business management? Join the thousands of users who trust Fatoura to help them achieve their goals.",
      "btn": {
        "txt": "Start Free",
        "link": "#"
      }
    },
    "aboutLayout": {
      "hero": {
        "title": "About Us: Our Mission is to Simplify Your Business Management",
        "txt": "At Fatoura, we believe that business management should be easy and accessible to everyone. Whether you're a freelancer, artisan, or small business owner, we're here to help."
      },
      "about": [
        {
            "id": 1,
            "name": "Our Story",
            "text": "Fatoura started as a simple idea: to make business management easier for freelancers and small business owners in Morocco. After noticing the challenges many face in managing invoices, tax declarations, and cash flow, we decided to create a comprehensive platform that brings all these tools together in one place."
        },
        {
            "id": 2,
            "name": "Our Mission and Values",
            "text": "Our mission is to empower freelancers and small business owners by providing simple and effective tools to manage their businesses. We believe in transparency, simplicity, and innovation as core values that guide everything we do."
        },
        {
            "id": 3,
            "name": "Meet the Team",
            "text": "The Fatoura team is made up of dedicated experts in technology, finance, and customer service. We're here to ensure you have the best possible experience with our platform.",
            "team": [
                {
                    "id": 1,
                    "fname": "lahoucine",
                    "lname": "el khattaby",
                    "role": "Founder & Full Stack Developer"
                }
            ]
        },
    ]
    },
    "contactLayout": {
      "hero": {
        "title": "Contact Us",
        "txt": "We're here to answer your questions and help with any inquiries. Whether you need technical support or have an idea to improve Fatoura, our team is here for you."
      },
      "form": {
        "title": "Send Us a Message",
        "name": "Full Name",
        "email": "Email Address",
        "phone": "Phone Number - Optional",
        "sjt": "Subject",
        "msg": "Message",
        "btn": "Send" 
      },
      "contact": [
        {
            "id": 1,
            "title": "Email Us",
            "txt1": "You can email us at : ",
            "txt2": "support@fatoura.com"
        },
        {
            "id": 2,
            "title": "Call Us",
            "txt1": "Phone : ",
            "txt2": "+212 5 00 00 00 00"
        }
      ],
      "title": "Connect with Us on Social Media",
      "socialMedia": [
        {
            "name": "Facebook",
            "icon": <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22zM25,5c11.05756,0 20,8.94244 20,20c0,9.72979 -6.9642,17.7318 -16.15625,19.5332v-12.96875h5.29297l1.16211,-7.51953h-6.45508v-2.01758c0,-1.03747 0.18982,-1.96705 0.50977,-2.52539c0.31994,-0.55834 0.62835,-0.80078 1.38477,-0.80078h4.44727v-6.69141l-0.86719,-0.11719c-0.59979,-0.08116 -1.96916,-0.27148 -4.43945,-0.27148c-2.7031,0 -5.02334,0.73635 -6.625,2.40234c-1.60166,1.66599 -2.39258,4.14669 -2.39258,7.34961v2.67383h-5.19727v7.51953h5.19727v12.9043c-9.04433,-1.91589 -15.86133,-9.84626 -15.86133,-19.4707c0,-11.05756 8.94244,-20 20,-20z"></path></g></g>
            </svg>,
            "link": "#"
        },
        {
            "name": "Twitter",
            "icon": <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z"></path></g></g>
            </svg>,
            "link": "#"
        },
        {
            "name": "LinkedIn",
            "icon": <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z"></path></g></g>
            </svg>,
            "link": "#"
        },
        {
            "name": "Instagram",
            "icon": <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
            </svg>,
            "link": "#"
        },
      ]
      
    },

    "dashboard": {
      "logo": logo.name,
      "aside": {
        "topRoutes": [
          {
              "name": "Overview",
              "img": imagessvg.overview,
              "slug": route.auth.homepage
          },
          {
              "name": "Tax Management",
              "img": imagessvg.overview,
              "slug": route.auth.tax
          },
          {
              "name": "Invoicing",
              "img": imagessvg.overview,
              "slug": route.auth.invoicing
          },
          {
              "name": "Cash Flow Management",
              "img": imagessvg.overview,
              "slug": route.auth.cashFlow
          },
          {
              "name": "Financial Reports",
              "img": imagessvg.overview,
              "slug": route.auth.reports
          },
          {
              "name": "Learning & Support",
              "img": imagessvg.overview,
              "slug": route.auth.support
          },
        ],
        "bottomRoutes": [
          {
              "name": "Settings",
              "img": imagessvg.overview,
              "slug": route.auth.settings
          },
          {
              "name": "Log Out",
              "img": imagessvg.overview,
              "slug": route.auth.logout
          },
        ]
      },
      "userinfo": {
        "name": "Mo Salah",
        "type": "Admin",
        "img": "/heroabout.jpg"
      },
      "search": "Search",
      "taxLayout": {
        "header": {
          "title": "Tax Management",
          "txt": "Stay compliant with Moroccan tax regulations."
        },
        "c1": {
          "title": "Your Tax Overview",
          "estimated": "Estimated Tax for", 
          "amount": 5000,
          "currency": currency,
          "breakdown": "Tax Breakdown",
          "vat": "VAT",
          "vatAmount": 2000,
          "income": "Income Tax",
          "incomeAmount": 3000
        },
        "c2": {
          "title": "Submit Your Tax Declaration",
          "btn": "Tax Declaration",
          "txt1": "Last Submission",
          "dt1": "March 31, 2024",
          "txt2": "Declaration History",
          "table": {
            "head": ["Date", "Amount", "Status"],
            "body": [
              {"id":1, "date":"31/03/2024", "amount":5000, "status":"Submitted"}
            ]
          }
        },
        "c3": {
          "title": "Integration with Moroccan Tax Authorities",
          "statustxt": "Status",
          "status": "Connected",
          "btn": "Reconnect",
          "note": "Note : Ensure your connection is active to submit... "
        }
      },
      "invoicingLayout": {
        "header": {
          "title": "Invoicing",
          "txt": "Create, manage, and track your invoices."
        },
        "c1": {
          "title": "Create a New Invoice",
          "btn": "Create New Invoice",
          "card": {
            "title": "Create New Invoice",
            "name": "Client Name",
            "invoiceDate": "Invoice Date",
            "dueDate": "Due Date",
            "description": "Description",
            "quantity": "Quantity",
            "price":"Price",
            "total":"Total",
            "notes":"Notes (Optional)",
            "btn":"Submit Invoice"
          }
        },
        "c2": {
          "title": "Invoice Reminders"
        },
        "c3": {
            "title": "Your Invoices",
            "headTable": ["in", "client name", "amount", "due date", "status", "actions"],
            "data": [
              { "id": 1, "name": "Invoice A", "amount": 5000, "date": "2024-03-01", "status": 1 },
              { "id": 2, "name": "Invoice B", "amount": 3000, "date": "2024-03-05", "status": 2 },
              { "id": 3, "name": "Invoice C", "amount": 7000, "date": "2024-03-10", "status": 3 },
              { "id": 4, "name": "Invoice D", "amount": 2500, "date": "2024-03-15", "status": 1 },
              { "id": 5, "name": "Invoice E", "amount": 4800, "date": "2024-03-20", "status": 2 },
              { "id": 6, "name": "Invoice F", "amount": 6200, "date": "2024-03-25", "status": 3 },
              { "id": 7, "name": "Invoice G", "amount": 4100, "date": "2024-03-28", "status": 1 },
              { "id": 8, "name": "Invoice H", "amount": 3900, "date": "2024-03-30", "status": 2 },
              { "id": 9, "name": "Invoice I", "amount": 8000, "date": "2024-04-02", "status": 3 },
              { "id": 10, "name": "Invoice J", "amount": 5600, "date": "2024-04-05", "status": 1 }
             ],
            "sts": ["Paid", "Unpaid", "Overdue"],
            "pr": "Previous",
            "pg": "Page",
            "nt": "Next",
            "currency": currency
        }
      }
    }
}


export default en;