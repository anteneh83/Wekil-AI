# Wekil AI - Informal Agreement Generator

Wekil AI is an AI-powered web application designed to help Ethiopian freelancers and small business owners create simple, informal agreements quickly and efficiently. By transforming plain-language deal descriptions into structured agreements, Wekil AI reduces misunderstandings between service providers and clients.

---

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [User Roles](#user-roles)
- [Non-Functional Requirements](#non-functional-requirements)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Features
- **Agreement Generation:** Convert plain text into structured informal agreements.
- **Multi-Language Support:** Works in Amharic and English.
- **User Authentication:** Sign up / log in via email or Google OAuth.
- **Editing Module:** Edit agreements inline, with version control.
- **Export & Sharing:** Export agreements as PDF or DOCX and share via email.
- **Mandatory Disclaimer:** Ensures users acknowledge limitations.
- **Digital Signature Management:** Embed user signatures in agreements.
- **Notifications:** Alerts for deadlines, signing requests, and updates.
- **Agreement Filtering:** Search and filter agreements by date, status, or party name.
- **Paid Feature Threshold:** Free for up to three agreements, then subscription-based access.

---

## Demo
*(Optional: Include screenshots or GIFs of the interface here)*

---

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anteneh83/wekil-ai.git
   cd wekil-ai
    ```
---

## Technology Stack

- Frontend: Next.js, Tailwind CSS

- Backend: GoLang  

- Mobile: Flutter

- AI Engine: Fine-tuned Large Language Model (LLM)

- Database: MongoDB

- Authentication: Email/Google OAuth

- Export: PDF / DOCX

- Notifications: Email and dashboard alerts

---

## Installation

System Architecture
[User] → [Frontend UI] → [Backend API] → [AI/NLP Engine] → [Agreement Generator] → [Export PDF/DOCX]

Frontend: Guides users through contract creation workflow
Backend: Handles authentication, requests, and database operations
AI Engine: Parses free text and generates structured agreements
Database: Stores users, agreements, logs, and signatures

---

## User Roles

**Individual (Freelancer / Client):** Can create, edit, and export agreements.

**Organization:** Includes additional registration fields; can manage multiple users and agreements.

---

## Non-Functional Requirements

**Performance:** Generate agreements ≤ 5s; support 1,000+ concurrent sessions

**Security:** AES-256 encryption, TLS 1.3, GDPR-style data privacy

**Usability:** Mobile-first, step-based workflow, WCAG 2.1 accessibility

**Reliability:** 99.5% uptime, auto-save every 10s

**Compliance:** Mandatory disclaimers, AI output limited to small-scale agreements

---

## Future Enhancements

- Voice input (speech-to-contract)

- Multi-party agreement support

- Premium cloud storage

- Advanced filtering and keyword search

- Push notifications for mobile devices

- Tiered subscription plans

- Blockchain-based signature verification

---

## License

This project is licensed under the MIT License. See the LICENSE
 file for details.
 
**Disclaimer: Wekil AI generates informal agreements and is not a substitute for legal advice. Always consult a professional for complex or legally binding contracts.**
