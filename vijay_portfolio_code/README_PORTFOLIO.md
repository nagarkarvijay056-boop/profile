# Vijay Nagarkar - Portfolio

## 📁 Project Structure

```
frontend/
├── src/
│   ├── App.js                    # Main app component
│   ├── App.css                   # Custom styles & animations
│   ├── index.css                 # Tailwind & global styles
│   ├── pages/
│   │   └── Portfolio.jsx         # Main portfolio page
│   ├── context/
│   │   └── ThemeContext.jsx      # Dark/Light theme context
│   └── components/
│       ├── Header.jsx            # Navigation header with theme toggle
│       ├── Hero.jsx              # Hero section with typing effect
│       ├── About.jsx             # About section with story & skills
│       ├── Projects.jsx          # Projects showcase
│       ├── Interests.jsx         # Interests & hobbies section
│       ├── Contact.jsx           # Contact information
│       └── Footer.jsx            # Footer component
├── package.json                  # Dependencies
└── tailwind.config.js            # Tailwind configuration
```

## ✨ Features

- **Dark/Light Theme Toggle** - Switch between themes with persistent storage
- **Smooth Scroll Navigation** - Seamless section transitions
- **Typing Animation** - Dynamic hero text effect
- **Responsive Design** - Mobile-first, works on all devices
- **Monochrome Design** - Clean black, white, and grey color scheme
- **Hover Effects** - Interactive micro-animations
- **Social Links** - Email, GitHub, LinkedIn, Instagram

## 🎨 Sections

1. **Hero** - Introduction with typing animation
2. **About** - Personal story, education, and skills
3. **Projects** - Green Quest, ACE Project, AI for All
4. **Interests** - Hobbies and nature photography gallery
5. **Contact** - Social media and contact information
6. **Footer** - Credits and quick links

## 🖼️ Image Placeholders

Add your images by uncommenting and replacing the URLs in:

### About Section (`components/About.jsx`)
```jsx
<img 
  src="YOUR_PHOTO_URL" 
  alt="Vijay Nagarkar" 
  className="w-full h-full object-cover"
/>
```

### Projects Section (`components/Projects.jsx`)
```jsx
<img 
  src={project.image} 
  alt={project.title}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
```

### Hero Section (`components/Hero.jsx`)
```jsx
<img 
  src="YOUR_NATURE_PHOTO_URL" 
  alt="Background" 
  className="w-full h-full object-cover opacity-10 dark:opacity-5"
/>
```

### Nature Photography (`components/Interests.jsx`)
```jsx
<img 
  src={`YOUR_NATURE_PHOTO_${item}_URL`} 
  alt={`Nature ${item}`}
  className="w-full h-full object-cover"
/>
```

## 🚀 Setup Instructions

1. Extract the zip file
2. Navigate to the frontend directory
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   yarn start
   ```
5. Open http://localhost:3000 in your browser

## 🎨 Customization

### Colors
Edit `/frontend/src/index.css` and `/frontend/tailwind.config.js` for color customization.

### Content
Update your personal information in:
- `components/Hero.jsx` - Name and tagline
- `components/About.jsx` - Story, education, skills
- `components/Projects.jsx` - Project details
- `components/Contact.jsx` - Contact information

### Theme
The theme system is in `context/ThemeContext.jsx` and uses localStorage for persistence.

## 📦 Dependencies

- React 19.0.0
- React Router DOM 7.5.1
- Lucide React (Icons)
- Tailwind CSS
- All shadcn/ui components

## 🔗 Your Links

- **Email**: nagarkarvijay056@gmail.com
- **GitHub**: @Vj0803
- **LinkedIn**: scfu125107@motvpu.ac.in
- **Instagram**: @vijay_nagarkar_0803

## 📝 Notes

- All images are currently placeholders - add your own images
- The portfolio is frontend-only (no backend required)
- Dark mode preference is saved in localStorage
- Smooth scroll works on all modern browsers

Built with ❤️ by Vijay Nagarkar
