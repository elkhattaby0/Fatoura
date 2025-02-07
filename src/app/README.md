/project-root
│
├── /app
│ ├── /(auth) # Routes for authenticated users
│ │ ├── /dashboard
│ │ │ └── page.js # Dashboard page
│ │ └── layout.js # Layout for authenticated routes
│ │
│ ├── /(public) # Routes for non-authenticated users
│ │ ├── /home
│ │ │ └── page.js # Home page
│ │ ├── /about
│ │ │ └── page.js # About page
│ │ ├── /contact
│ │ │ └── page.js # Contact page
│ │ ├── /sign-in
│ │ │ └── page.js # Sign-in page
│ │ ├── /sign-up
│ │ │ └── page.js # Sign-up page
│ │ └── layout.js # Layout for public routes
│ │
│ ├── /middleware.js # Middleware for authentication
│ ├── layout.js # Root layout
│ └── page.js # Home page (optional)
│
├── /components # Shared components
│ ├── Header.js # Header component
│ └── Footer.js # Footer component
│
└── /lib # Utility functions
└── auth.js # Authentication logic



darkBlue #1E3A8A
skyBlue #3B82F6
green #10B981
gold #F59E0B
white #FFFFFF
lightGray #E5E7EB