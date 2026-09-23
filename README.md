# Christian Wijaya — Luxury Fashion Website
---

## 📌 About This README

A comprehensive project **README** serves as the primary entry point and documentation for any software project. For this fashion e-commerce website, this document provides:
1. **Project Vision & Overview** — Contextualizing the brand identity and design philosophy.
2. **Page Architecture & Sitemap** — Complete breakdown of all web pages.
3. **Key Features & Interactive Elements** — Functionality and user flow details.
4. **HCI & UI/UX Principles** — Usability heuristics and design decisions applied.
5. **Technical Specifications & Tech Stack** — Technologies, scripts, and stylesheets utilized.
6. **Form Validation Logic** — Detailed validation constraints for user inputs.
7. **Directory Structure** — Explicit map of folders, assets, and source code.
8. **Getting Started & Execution** — Step-by-step instructions to run the website locally.
9. **Academic & Author Metadata** — Student and course details.

---

## 📖 Table of Contents
- [Project Overview](#-project-overview)
- [Design Philosophy & HCI Heuristics](#-design-philosophy--hci-heuristics)
- [Key Features](#-key-features)
- [Website Pages & Sitemap](#-website-pages--sitemap)
- [Form Validation Rules](#-form-validation-rules)
- [Technology Stack](#-technology-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started / How to Run](#-getting-started--how-to-run)
- [Academic Information](#-academic-information)

---

## 🌟 Project Overview

**Christian Wijaya** is a conceptual luxury fashion brand web application engineered to blend timeless sophistication with modern, minimalist digital design. The website delivers a high-end editorial shopping experience, focusing on:
- High-contrast monochromatic aesthetics with minimalist typography.
- Intuitive navigation with seamless transitions and responsive layouts.
- Dynamic shopping interactions including product quantity steppers, cart state feedback, and modal checkouts.
- Rigorous client-side form validation for talent/model recruitment.

---

## 🎨 Design Philosophy & HCI Heuristics

The application is built around fundamental **Human-Computer Interaction (HCI)** principles and **Jakob Nielsen's 10 Usability Heuristics**:

1. **Visibility of System Status**:
   - Feedback on buttons: Clicking "Add to Cart" changes button text to *"Added to cart"* and temporarily disables the button to prevent duplicate triggers.
   - Interactive quantity adjustment with instant numeric visual updates.
   - Dynamic confirmation modal appears upon clicking "Buy Now".

2. **Match Between System and Real World**:
   - Familiar e-commerce paradigms (catalog grid, shopping carts, clear currency notations in IDR `Rp.`, and breadcrumb back links).

3. **User Control and Freedom**:
   - Modal dialogues provide intuitive exits: "Go to Home" or "Continue Browsing".
   - Collapsible slide-out drawer menu with close button (`✕`) and overlay click-to-dismiss.

4. **Consistency and Standards**:
   - Unified header, hamburger drawer navigation, and footer across all 15 HTML pages.
   - Consistent typography, padding, color tokens, and button styling managed via modular CSS.

5. **Error Prevention & Helpful Error Recovery**:
   - Model registration form checks data in real-time on submission, displaying explicit inline error messages directly under the problematic input field rather than generic alerts.

---

## ✨ Key Features

- **Responsive Slide-out Drawer Navigation**:
  - Accessible on all viewports via a hamburger trigger (`☰`).
  - Smooth off-canvas transition with a dimming backdrop overlay.
  - Automatically collapses when selecting links on mobile screens.

- **Curated Catalog & Product Showcase**:
  - Featured banner highlighting new seasonal arrivals.
  - Grid-based catalog with high-resolution imagery and formatted pricing.
  - 11 dedicated product detail pages with custom item descriptions and styling.

- **Interactive Shopping Mechanics**:
  - Stepper controls to increment and decrement purchase quantities (minimum limit bounded to 1).
  - Simulated "Add to Cart" state with auto-resetting UI feedback.
  - "Buy Now" checkout modal dialog prompting user action.

- **Client-Side Model Registration Form**:
  - Validated fields: Name, Email, Birth Date, Gender (Radio buttons), and Terms & Conditions.
  - Inline error feedback and reset triggers.

---

## 🗺️ Website Pages & Sitemap

| Page | File | Description |
| :--- | :--- | :--- |
| **Home** | `index.html` | Hero image showcase, seasonal highlights, brand narrative, and CTA links. |
| **Catalog** | `products.html` | Featured collection display and interactive product card grid. |
| **Product Details** | `product-detail 1.html` — `11.html` | Individual luxury garment pages with pricing, description, quantity selector, and purchase actions. |
| **Model Registration** | `model-registration.html` | Talent recruitment form with JavaScript client-side validation. |
| **About Us** | `about.html` | Brand origin, sustainability statement, and designer profile (`Giovanni August`). |

---

## 📋 Form Validation Rules

Implemented in `js/model-registration.js`:

| Input Field | Validation Criteria | Error Message Displayed |
| :--- | :--- | :--- |
| **Full Name** | Must be longer than 5 characters (`name.value.length > 5`) | *"Your name must consist of at least 5 letters"* |
| **Email** | Must strictly end with `@gmail.com` | *"Email must end with '@gmail.com'"* |
| **Gender** | At least one radio button must be checked | *"You must pick a gender"* |
| **Date of Birth** | Date picker must not be empty | *"You must fill the Date of Birth"* |
| **Terms & Conditions**| Checkbox must be explicitly checked | *"You have to agree to the terms and conditions"* |

*Upon successful validation, the form prompts a success alert (`"Form successfully submitted!"`) and resets all input controls.*

---

## 💻 Technology Stack

- **Markup:** Semantic HTML5
- **Styling:** CSS3 (Flexbox, CSS Grid, Custom Transitions, Media Queries)
  - Base theme: `css/style.css`
  - Page-specific styles: `css/home.css`, `css/products.css`, `css/product-detail.css`, `css/model-registration.css`, `css/about.css`
- **Scripting:** Pure Vanilla JavaScript (ES6+ DOM manipulation, event listeners)
  - Global navigation: `js/script.js`
  - Product interactions: `js/product-detail.js`
  - Form validation: `js/model-registration.js`
- **UI/UX Design & Prototyping:** Figma (`HCI LAB.fig`)
- **Academic Documentation:** Microsoft Word (`dokumentasi HCI lab.docx`)

---

## 📁 Project Directory Structure

```text
HCI LAB/
├── assets/                          # Static image assets (hero, products, designer portrait)
│   ├── designer.jpg
│   ├── featured.png
│   ├── hero.png
│   ├── new arrivals.png
│   └── ... (individual product images)
├── css/                             # Modular stylesheets
│   ├── about.css                    # Designer & story styling
│   ├── home.css                     # Landing page hero & grid layout
│   ├── model-registration.css       # Form inputs & error label styling
│   ├── product-detail.css           # Product showcase, stepper & modal styles
│   ├── products.css                 # Catalog grid styling
│   └── style.css                    # Global typography, sidebar drawer, footer
├── js/                              # Client-side scripts
│   ├── model-registration.js        # Validation logic for recruitment form
│   ├── product-detail.js            # Quantity stepper & modal interactions
│   └── script.js                    # Hamburger toggle & drawer navigation
├── about.html                       # About the brand & designer page
├── dokumentasi HCI lab.docx         # Project documentation report
├── HCI LAB.fig                      # Figma UI/UX source file
├── index.html                       # Main entry / landing page
├── model-registration.html          # Model recruitment form
├── product-detail 1.html ... 11.html# 11 distinct product detail pages
├── products.html                    # Complete catalog view
└── README.md                        # Project documentation (this file)
```

---

## 🚀 Getting Started / How to Run

Because this project is built using native web technologies (HTML5, CSS3, Vanilla JavaScript), no build tools or package managers (such as npm or yarn) are required.

### Quick Start:
1. **Clone or Download** this repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. **Navigate** into the project directory:
   ```bash
   cd "HCI LAB"
   ```
3. **Open the Website**:
   - Double-click `index.html` to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).
   - *Recommended for development:* Use **VS Code Live Server**:
     - Right-click `index.html` inside Visual Studio Code.
     - Select **"Open with Live Server"** to enable local hosting (typically at `http://127.0.0.1:5500/`).

---

## 🎓 Academic Information

- **Student Name:** Giovanni August
- **Semester:** 2 (Even Semester 2024/2025)
- **Institution:** Bina Nusantara University (BINUS University)
