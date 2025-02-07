import route from "./Routes.json"

const logo = {
  "name": "Fatoura.",
  "slug": route.public.homepage
}

export const data = {
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
              "slug": route.public.homepage,
            },
            {
              "id": 3,
              "name": "About Us",
              "slug": route.public.about,
            },
            {
              "id": 4,
              "name": "Contact",
              "slug": route.public.homepage,
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
      "description": "Enhance productivity and efficiency with cutting-edge artificial intelligence solutions for your business operations.",
      
      "links": [ 
      {
        "id": 1,
        "title": "Our Solutions",
        "list": [
          {"id": 1, "name": "AI Platform", slug: ""},
          {"id": 2, "name": "AI Algorithms", slug: ""},
          {"id": 3, "name": "Industry Applications", slug: ""},
        ],
      },
      { 
        "id": 2,
        "title": "Use Cases",
        "list": [
          {"id": 1, "name": "Predictive Analysis", slug: ""},
          {"id": 2, "name": "Customer Experience", slug: ""},
          {"id": 3, "name": "Automation", slug: ""},
        ],
      },
      {
        "id": 3,
        "title": "Resources",
        "list": [
          {"id": 1, "name": "Pricing", slug: ""},
          {"id": 2, "name": "Blog", slug: ""},
          {"id": 3, "name": "Case Studies", slug: ""},
          {"id": 4, "name": "Terms of Service", slug: ""},
          {"id": 5, "name": "Privacy Policy", slug: ""},
        ],
      },
      {
        "id": 4,
        "title": "Company",
        "list": [
          {"id": 1, "name": "About Us", slug: ""},
          {"id": 2, "name": "Careers", slug: ""},
          {"id": 3, "name": "Contact Us", slug: ""},
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
      "currency": "DH",
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
    "about": {}
}