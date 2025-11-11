# Project Implementation Plan: "Bitcoin Through Values" Feature Page

## Objectives

- **Educate & empower** - Build a feature page on your existing **Next.js** website that guides a user through how to explain Bitcoin to a friend or loved one based on personal values.
- **Personalised output** - Allow users to select values relevant to their recipient and generate a customised, value‑oriented explanation of Bitcoin (based on the brainstormed list).
- **Email delivery** - Provide an option for users to receive the generated guide via email using the existing **Mailjet** API integration.
- **Mobile‑first & fun design** - Deliver a visually engaging experience with icons and imagery that is responsive across devices.

## Functional Requirements

- **Interactive value selector**
- Display the list of values (e.g., Family, Financial stability, Fairness) with short descriptions and playful icons.
- Users can tick or toggle each value to indicate what their friend or loved one cares about.
- Values should be organised in categories and collapsible on small screens to maintain readability.
- **Guide generation**
- When the user finishes selecting values, dynamically assemble the associated Bitcoin persuasion points from the guide.
- Present the personalised guide on the page with clear headings for each selected value.
- Provide options to copy the text, download as a PDF (optional), or send via email.
- **Email sending**
- Implement a client‑side form to collect the user's email address.
- On submission, call a **Next.js API route** that wraps the Mailjet API to send the guide content. Use existing API keys stored in environment variables.
- Send a stylised email containing the selected values and their corresponding bullet points.
- **Responsive & accessible design**
- Use a mobile‑first layout with flexible grid or flexbox containers.
- Choose a friendly icon set (e.g., **Font Awesome**, **Heroicons**) for each value. For example:
  - Family → heart or family icon
  - Financial stability → shield with dollar sign
  - Fairness → balance scales
  - Freedom → flying bird
  - Environmental sustainability → leaf
- Use colour accents to differentiate categories (e.g., green for sustainability, blue for trust/integrity, orange for financial topics). Ensure adequate contrast for accessibility.
- Include relevant illustrations (e.g., a person sending digital currency to a friend, global network of people) to enhance engagement.

## Technical Implementation

### 1\. Project setup

- **Codebase** - Work within the existing Next.js repository; ensure version control (Git) is used.
- **Dependencies** - Add or verify the following packages:
- @mailjet/client for Mailjet email integration.
- react-icons or @heroicons/react for icons.
- A UI framework if not already present (e.g., **Tailwind CSS** or **Chakra UI**) for rapid responsive styling.
- Optional: html2pdf.js if PDF export is desired.

### 2\. Data structure

- **Values dataset** - Create a JavaScript/TypeScript file (e.g., data/values.js) exporting an array of objects:

export const values = \[  
{  
id: 'family',  
title: 'Family & relationships',  
description: 'Support loved ones, send remittances, plan for future generations.',  
icon: 'FiHeart',  
bulletPoints: \[  
'Bitcoin enables low‑cost, border‑free remittances to family members.',  
'Self‑custody gives you control over savings passed down to future generations.',  
'Provides a long‑term store of value in countries with high inflation.'  
\],  
},  
// ...repeat for each value  
\];

### 3\. UI components

- **ValueCard** - A component that displays the icon, value title and short description with a checkbox or toggle. Clicking selects or deselects the value.
- **SelectedValuesSummary** - Shows the list of currently selected values and provides a button to generate the guide.
- **GuideDisplay** - Once generated, displays sections for each selected value with headings and bullet points. Includes options to copy text, export to PDF and send via email.
- **EmailForm** - Collects the user's email address and calls the email API route. Displays confirmation or error messages.
- **ResponsiveLayout** - Handles layout differences between desktop and mobile using CSS utilities or a framework.

### 4\. API integration (Mailjet)

- **Server‑side API route:** Create a file at pages/api/send-guide.js:

import Mailjet from '@mailjet/client';  
export default async function handler(req, res) {  
if (req.method !== 'POST') return res.status(405).end();  
const { toEmail, guideContent } = req.body;  
const mailjet = new Mailjet({  
apiKey: process.env.MAILJET_API_KEY,  
apiSecret: process.env.MAILJET_API_SECRET,  
});  
try {  
const request = await mailjet.post('send', { version: 'v3.1' }).request({  
Messages: \[  
{  
From: {  
Email: process.env.FROM_EMAIL,  
Name: 'Bitcoin Through Values',  
},  
To: \[{ Email: toEmail }\],  
Subject: 'Your personalised Bitcoin guide',  
HTMLPart: \`&lt;h3&gt;Your Bitcoin Through Values Guide&lt;/h3&gt;\${guideContent}\`,  
},  
\],  
});  
res.status(200).json({ status: 'ok' });  
} catch (error) {  
console.error(error);  
res.status(500).json({ error: 'Email failed to send' });  
}  
}

- **Environment variables:** Add MAILJET_API_KEY, MAILJET_API_SECRET, and FROM_EMAIL to .env.local (never commit to source control).
- **Client‑side email call:** In the EmailForm component, send a POST request to /api/send-guide with the user's email and the HTML of the generated guide.

### 5\. State management & logic

- Use React's built‑in useState or Context API to track selected values and generated guide content.
- On clicking "Generate Guide," assemble the selected values' bullet points into a single HTML string or component structure.
- Provide validation to ensure the user selects at least one value before proceeding.

### 6\. Styling and responsiveness

- If using **Tailwind CSS**, create utility classes for spacing, colours and typography. Use responsive modifiers (e.g., md:flex, sm:grid) to adjust layouts.
- For icons, import them from react-icons/fi or similar packages and set consistent sizes and colours.
- Use CSS media queries or framework classes to adjust grid layouts on small screens (e.g., single‑column stacking on mobile).
- Include hover effects and subtle animations (e.g., card hover lift) to make the page feel lively.

### 7\. Testing

- **Unit tests:** Test the value selection logic and guide generation (e.g., ensure that selecting three values yields correct bullet points) using Jest or React Testing Library.
- **Integration tests:** Verify that the API route correctly sends emails with a mock Mailjet client to avoid sending real emails during development.
- **Manual QA:** Check usability across different devices and browsers. Test the email form, copy functionality and PDF export (if implemented).
- **Accessibility:** Validate colour contrast and ensure that interactive elements are keyboard accessible and labelled for screen readers.

### 8\. Deployment & maintenance

- **Continuous deployment:** Integrate changes into the existing deployment pipeline (e.g., Vercel or Netlify). Ensure environment variables are set in the hosting environment.
- **Monitoring:** Set up error logging (e.g., Sentry) to capture any email failures or client‑side errors.
- **Content updates:** Store the values dataset in an easily editable file or CMS so you can adjust bullet points as your message evolves.
- **Analytics:** Track how often users generate guides and send emails (respecting user privacy) to understand usage patterns.

## Visual & UX Recommendations

- **Colour palette:** Use warm, inviting colours. For instance, use soft greens for eco‑related values, light blues for trust/integrity, oranges for financial topics. Ensure high contrast for readability.
- **Typography:** Pair a friendly sans‑serif for headings with a legible body font. Limit font sizes on mobile to prevent wrapping.
- **Imagery:** Use vector illustrations that depict concepts like family, global connections, and digital networks. Avoid overly technical imagery that might intimidate newcomers.
- **Icons:** Keep a consistent icon style throughout (outlined or filled). Use icons to break up text and help users quickly recognise value categories.
- **Fun touches:** Consider subtle animations when cards are selected or when the guide appears. Use progress indicators or checkmarks to show completion.

## Implementation Timeline (Example)

| Week | Tasks |
| --- | --- |
| **1** | Define scope, finalise values dataset, set up repository and install dependencies. |
| **2** | Build ValueCard component and interactive selection logic. |
| **3** | Implement guide generation and display component; test on mobile and desktop. |
| **4** | Add email form and API route; integrate Mailjet and test email sending with test accounts. |
| **5** | Polish styling, add icons, images and responsive refinements. |
| **6** | Conduct testing (unit, integration, accessibility); fix bugs and deploy to staging. |
| **7** | Collect feedback, make final adjustments and deploy to production. |

## Conclusion

This feature page aims to provide a personalised and engaging way for users to introduce Bitcoin to others based on shared values. By combining interactive selection, clear messaging and optional email delivery via Mailjet, the "Bitcoin Through Values" guide becomes a practical tool that fits seamlessly into your existing Next.js site. Careful attention to mobile responsiveness and visual appeal will ensure that the page is both informative and enjoyable to use.