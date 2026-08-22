Anusthan --- Premium Rice Website

A modern, responsive multi-page website for Anusthan, a premium rice
brand by Goodpoint Agro Products Pvt. Ltd.

The website presents the brand, rice product catalogue, manufacturing
process, factory gallery, blog content, and contact information through
a clean, premium visual experience.

Live Website

After deployment, add the Vercel production URL here:

https://your-vercel-domain.vercel.app

Repository

GitHub: https://github.com/sohrabhates/anusthan

Features

Responsive desktop and mobile layouts

Mobile navigation drawer

Responsive hero section

Multi-page SPA routing

Active navigation states

Scroll-to-top on route changes

Premium rice product catalogue

Product category filtering

Product search

Product detail modal

WhatsApp enquiry CTA

About Us page

13-step rice milling process

Factory/gallery photo grid

Gallery lightbox

Blog section with educational articles

Contact/enquiry form

Clickable phone contact

Global footer

Production-ready Vite build

Pages

Route                   Page                    Purpose

/                     Home                    Brand introduction,
hero, products, quality
and company highlights

/about                About Us                Company story, vision,
mission, strengths and
13-step milling process

/our-rice             Our Rice                Complete rice product
catalogue with filters
and product details

/gallery              Gallery                 Factory and
manufacturing facility
photographs

/blog                 Blog                    Educational rice and
milling-related
articles

Technology Stack

React

Vite

JavaScript / JSX

CSS3

React Router

npm

Git / GitHub

Vercel for deployment

Project Structure

anusthan/
│
├── images/
│   ├── certificate/
│   ├── factory/
│   ├── hero/
│   ├── logo/
│   ├── new/
│   ├── png/
│   ├── product/
│   └── rice_packet/
│
├── src/
│   ├── components/
│   │   ├── BrandIntro/
│   │   ├── CertificateSection/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── PageHero/
│   │   ├── ProductCard/
│   │   ├── ProductCarousel/
│   │   ├── ProductDetailModal/
│   │   ├── PuritySection/
│   │   ├── QualityProcess/
│   │   ├── VideoSection/
│   │   ├── WhatsAppFloat/
│   │   └── WhyAnusthan/
│   │
│   ├── data/
│   │   ├── content.js
│   │   ├── productImageMap.js
│   │   └── products.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── OurRicePage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── BlogPage.jsx
│   │   └── ContactPage.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.css
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

Local Development

Requirements

Make sure the following are installed:

Node.js

npm

Git

Install dependencies

npm install

Start development server

npm run dev

To expose the development server on the local network:

npm run dev -- --host 0.0.0.0

The terminal will provide the local and network URLs.

Production Build

To create the production build:

npm run build

The compiled website is generated inside:

dist/

To preview the production build locally:

npm run preview

Deployment

The project is configured as a Vite application and can be deployed
directly through Vercel.

Vercel settings

Setting            Value

Framework Preset   Vite
Root Directory     ./
Build Command      npm run build
Output Directory   dist
Install Command    npm install

No environment variables are currently required for the frontend.

Git deployment

The repository is connected to GitHub:

git remote -v

Expected remote:

origin  https://github.com/sohrabhates/anusthan.git

After making changes:

git add .
git commit -m "Update website"
git push

Vercel automatically creates a new deployment when changes are pushed to
the connected repository.

Product Data

The product catalogue is maintained in:

src/data/products.js

This file contains the product data used by the Our Rice page.

Important

When updating products, preserve the existing data structure and product
ordering unless a deliberate catalogue change is required.

Product image mappings are maintained separately in:

src/data/productImageMap.js

Image Assets

Website images are stored under:

images/

Important directories include:

images/product/ --- product photographs

images/factory/ --- factory photographs

images/hero/ --- homepage hero assets

images/certificate/ --- company certificates

images/logo/ --- brand logo

images/rice_packet/ --- rice packaging assets

When replacing an image, keep the filename/path consistent with the
component referencing it, or update the relevant data/mapping file.

Mobile Responsiveness

The website has dedicated responsive behavior for:

Mobile phones

Tablets

Desktop

Large desktop screens

The mobile header uses a slide-out navigation drawer.

The homepage hero has a dedicated mobile composition so that:

The complete hero content remains visible

Heading and subtitle wrap correctly

CTA remains inside the viewport

Background imagery adapts to the portrait aspect ratio

Navigation controls do not overlap the content

The page does not create horizontal overflow

Contact Information

Phone: +91 9647155570

Location: Purba Bardhaman, India

The phone number is implemented as a clickable tel: link.

Handover Notes

Before handing the project to another developer:

Run:

npm install
npm run build

Confirm the production build succeeds.

Verify all six routes.

Test the website on mobile and desktop.

Confirm product images load correctly.

Confirm the GitHub repository contains the latest changes.

Confirm the Vercel deployment is successful.

Provide the GitHub repository and Vercel project access/details
separately.

Files/folders normally excluded from handover

node_modules/ should not be transferred because it can be recreated
using:

npm install

The dist/ folder is also generated by:

npm run build

and normally does not need to be manually transferred when deploying
through Vercel.

Maintenance

For future developers:

Keep components modular.

Keep page-specific CSS with the corresponding page/component.

Keep product information in src/data/.

Avoid putting large amounts of page content directly into unrelated
components.

Reuse existing components before creating duplicates.

Test both desktop and mobile layouts after significant UI changes.

Run npm run build before pushing production changes.

License

This project is developed for the Anusthan / Goodpoint Agro website.

All brand assets, product images, logos, certificates, and
company-specific content remain the property of their respective owners.
