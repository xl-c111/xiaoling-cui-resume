# Resume Website Content Guide

This document provides a detailed breakdown of each section of your resume website, making it easy to update content later.

## 📄 File Structure

```
xiaoling-cui-resume/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── resume.pdf          # Your resume file (add this)
└── content-guide.md    # This guide
```

---

## 🎯 Header Section

### Navigation Menu
Located in: `<nav class="nav-section">`

**Current Menu Items:**
- Xiaoling Cui (Home/About)
- Skills
- Projects
- Experience
- Education
- Additional

**To modify:** Change the text and href values in the navigation links.

### Action Buttons
Located in: `<div class="button-container">`

**Current Buttons:**
1. **Download Resume** - Links to `resume.pdf`
2. **Dark Mode Toggle** - Switches between light/dark themes

---

## 👤 Personal Information Section (Sidebar)

Located in: `<aside class="sidebar">`

### Name & Title
```html
<h1>Xiaoling Cui</h1>
<p class="position">Software Engineer</p>
<p class="subtitle">Career Switcher | Data & Tech Enthusiast</p>
```

**To update:**
- Change the `<h1>` content for your name
- Update the `position` class paragraph for your job title
- Modify the `subtitle` for your tagline

### Contact Information (Social Icons)
```html
<div class="social-icons">
```

**Current Links:**
1. **Email:** `xiaolingcui0111@gmail.com`
2. **Phone:** `+61493729321`
3. **LinkedIn:** `https://www.linkedin.com/in/xiaoling-cui-9b504a350/`
4. **GitHub:** `https://github.com/xl-c111`

**To update:** Change the `href` attributes in each `<a>` tag.

---

## 🙋‍♀️ About Section

Located in: `<div class="about">`

### Current Content:
```
Heading: Hi!

Paragraph 1: Career switcher background, Holberton School experience
Paragraph 2: Skills and motivation
```

**To update:** Modify the `<h2>` and `<p>` tags within the about section.

---

## 🛠 Skills Section

Located in: `<section id="skills">`

### Structure:
```html
<div class="skill-category">
  <strong>Category Name:</strong> Skills description
</div>
```

### Current Categories:
1. **Programming Languages:** TypeScript, JavaScript, Python, C
2. **Web Development:** React, TypeScript, HTML/CSS, APIs
3. **DevOps & Tools:** GitHub, Docker, CI/CD workflows
4. **Data & Visualization:** Structured/unstructured data insights
5. **Collaboration & Agile:** Team collaboration, agile sprints

**To update:** Add, remove, or modify the skill categories and descriptions.

---

## 💼 Projects Section

Located in: `<section id="projects">`

### Project Structure:
```html
<div class="project-item">
  <div class="item-title">Project Name</div>
  <div class="item-subtitle">PROJECT TYPE</div>
  <div class="item-date">Date</div>
  <div class="tech-stack">Technologies used</div>
  <div class="item-description">
    <ul>
      <li>Achievement/feature 1</li>
      <li>Achievement/feature 2</li>
    </ul>
  </div>
</div>
```

### Current Projects:
1. **Heal Assistant** - Flask-based intelligent assistant (July 2025)
2. **AirBnB Clone** - Full-stack web application (May-Aug 2025)

**To update:**
- Modify existing project details
- Add new projects by copying the project-item structure
- Update technologies, dates, and descriptions

---

## 💼 Experience Section

Located in: `<section id="experience">`

### Experience Structure:
```html
<div class="experience-item">
  <div class="item-title">Job Title</div>
  <div class="item-subtitle">Company Name | Location</div>
  <div class="item-date">Start Date – End Date</div>
  <div class="item-description">
    <ul>
      <li>Responsibility/achievement 1</li>
      <li>Responsibility/achievement 2</li>
    </ul>
  </div>
</div>
```

### Current Experience:
1. **Business Analyst** - Taiyuan Heavy Machinery Group Co., Ltd. (Aug 2016 – Dec 2018)

**To update:** Add new positions, modify existing ones, or update job descriptions.

---

## 🎓 Education Section

Located in: `<section id="education">`

### Education Structure:
```html
<div class="education-item">
  <div class="item-title">Degree/Program Name</div>
  <div class="item-subtitle">Institution Name | Location</div>
  <div class="item-date">Start Date – End Date</div>
  <div class="item-description">
    <ul>
      <li>Detail/achievement 1</li>
      <li>Detail/achievement 2</li>
    </ul>
  </div>
</div>
```

### Current Education:
1. **Software Engineering** - Holberton School Australia (Feb 2025 – present)
2. **Exchange Student - German** - TU Bergakademie Freiberg (Sep 2014 – Sep 2015)
3. **Bachelor of Arts - German** - Northwestern Polytechnical University (Sep 2011 – Jul 2016)

**To update:** Add new education, modify existing entries, or update descriptions.

---

## ℹ️ Additional Information Section

Located in: `<section id="additional">`

### Structure:
```html
<div class="additional-info">
  <p><strong>Category:</strong> Information</p>
</div>
```

### Current Information:
- **Languages:** English (Fluent), German (Intermediate), Mandarin (Native)
- **Visa:** Australian Permanent Resident
- **Location:** Based in Melbourne and open to hybrid roles

**To update:** Add, remove, or modify the additional information items.

---

## 🎨 Styling & Colors

### Color Scheme:
- **Primary:** Blue gradients (`#3b82f6`, `#8b5cf6`, `#06b6d4`)
- **Background:** Grey gradients (`#2c3e50`, `#34495e`, `#7f8c8d`)
- **Cards:** Light grey (`#ecf0f1`) / Dark (`#2c3e50`)
- **Text:** Dark grey (`#34495e`) / Light (`#ecf0f1`)

### Fonts:
- **Main:** Inter (Google Fonts)
- **Mono:** JetBrains Mono (for code-related content)

---

## 📱 Features

### Responsive Design
- Mobile-first approach
- Flexible layouts
- Centered buttons on mobile

### Dark Mode
- Toggle button in top-right
- Automatic color scheme switching
- Maintained readability

### Animations
- Fade-in effects on load
- Hover animations on cards
- Smooth transitions

---

## 🔧 How to Update Content

1. **Text Content:** Edit the HTML file directly
2. **Styling:** Modify the CSS file
3. **Add Sections:** Copy existing section structure
4. **Resume File:** Add `resume.pdf` to the main folder
5. **Images:** Add images to the folder and update paths

---

## 📝 Quick Update Checklist

- [ ] Update personal information (name, title, contact)
- [ ] Add/update projects with latest work
- [ ] Update work experience
- [ ] Add new skills or technologies
- [ ] Update education information
- [ ] Add resume PDF file
- [ ] Test download button functionality
- [ ] Check responsive design on mobile
- [ ] Verify dark mode works properly

---

## 🚀 Deployment

To publish your website:
1. Upload all files to a web hosting service
2. Ensure `resume.pdf` is included
3. Test all links and functionality
4. Share your website URL!

---

## 📋 Section-by-Section HTML Locations

### Quick Reference for Editing:

**Personal Info (Sidebar):**
```html
Lines ~40-90: <aside class="sidebar">
```

**About Section:**
```html
Lines ~95-110: <div class="about">
```

**Skills Section:**
```html
Lines ~120-150: <section id="skills">
```

**Projects Section:**
```html
Lines ~160-200: <section id="projects">
```

**Experience Section:**
```html
Lines ~240-270: <section id="experience">
```

**Education Section:**
```html
Lines ~280-330: <section id="education">
```

**Additional Section:**
```html
Lines ~340-350: <section id="additional">
```

---

*Last updated: December 2024*