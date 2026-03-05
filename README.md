StayMatch -  An Open-Source Lifestyle Compatibility Engine for Shared Living

✨ Problem Statement

In urban environments, students and working professionals frequently relocate for education and employment. While accommodation discovery has become easier through digital platforms, roommate allocation remains largely unstructured and compatibility-blind. Most existing systems prioritize room availability over lifestyle alignment, resulting in frequent interpersonal conflicts.

Differences in sleep schedules, cleanliness standards, study habits, noise tolerance, smoking preferences, financial expectations, and social behavior often lead to avoidable disputes in shared living spaces. Current methods such as broker-based allocation, social media groups, or random hostel assignments lack any structured compatibility evaluation mechanism.

There is no open-source, configurable framework that evaluates lifestyle compatibility and predicts potential conflict risk before individuals share a room.

This gap results in:

- Increased roommate conflicts

- Reduced productivity and mental well-being

- Financial misunderstandings

- Early termination of accommodation agreements

Therefore, there is a need for a structured, modular, and configurable compatibility evaluation system that can assess lifestyle alignment, predict conflict risk, and assist institutions or co-living providers in making informed roommate allocations.


✨ Current Solution

At present, individuals searching for shared accommodation primarily rely on:

- Local brokers or agents

- Social media groups (WhatsApp, Telegram, Facebook Marketplace)

- Word-of-mouth referrals

- Random allocation by hostel or PG management

- Rental listing platforms that focus only on property availability

While these approaches help users find available rooms, they do not evaluate interpersonal compatibility between roommates.

Roommate allocation is typically based on:

- Vacancy availability

- Gender

- Budget similarity

- Basic preferences

There is no structured evaluation of lifestyle alignment such as sleep schedules, cleanliness standards, study habits, social behavior, or conflict sensitivity.

Even existing digital rental platforms focus primarily on property discovery rather than compatibility modeling. They do not provide:

- Configurable compatibility scoring

- Conflict risk prediction

- Structured preference comparison

- Pre-roommate agreement mechanisms

As a result, compatibility assessment is informal, subjective, and reactive — often addressed only after conflicts arise.

This highlights the absence of a modular, open-source compatibility framework designed specifically for shared living environments.


✨ Project Goals and Milestones

🎯 General Goals

• To design and implement a modular, open-source lifestyle compatibility engine for structured roommate allocation.

• To develop a configurable compatibility scoring framework that allows adjustable weight parameters.

• To introduce a conflict risk prediction layer based on rule-based compatibility analysis.

• To design a clean and scalable API architecture for integration with hostels, universities, or co-living platforms.

• To provide a digital roommate agreement generation system for structured shared-living commitments.

• To ensure clean documentation, modular codebase, and contribution-friendly open-source structure.

• To provide intelligent roommate recommendations based on compatibility scores.

• To offer visual analytics such as radar charts for lifestyle comparison.

📌 Milestones

Phase 1 – Core Architecture

• Requirement analysis and compatibility parameter definition
• ER diagram and database schema design
• Backend server setup and API structure
• User and accommodation data models

Phase 2 – Compatibility Engine

• Implementation of weighted compatibility scoring
• Development of configurable scoring model (JSON-based weights)
• Match explanation logic
• Conflict risk classification system

Phase 3 – Practical Integration Layer

• Digital roommate agreement generator
• Agreement storage and retrieval
• Frontend integration with match results
• Visual compatibility analytics (Radar chart / risk indicators)

Phase 4 – Refinement & Open Source Readiness

• Code refactoring and modularization
• API documentation
• Contribution guide and setup instructions
• Testing and performance validation
• Final demonstration and deployment


✨ Project Approach

1️⃣ Requirement & Parameter Analysis

Identify measurable lifestyle attributes such as:

- Sleep schedule

- Cleanliness level

- Smoking preference

- Study habits

- Noise tolerance

- Personality type

Define scoring weight structure and compatibility logic.

2️⃣ Modular Database & Architecture Design

• ER diagram creation
• Schema design for Users, Preferences, Accommodations, Agreements
• Clear separation of models, routes, and controllers
• Scalable backend architecture using Node.js + Express
• MongoDB for structured preference storage

Focus: Clean, reusable, modular design.

3️⃣ Compatibility Engine Implementation

• Weighted scoring mechanism
• Configurable weight configuration file
• Score normalization (0–100%)
• Rule-based conflict risk triggers
• Transparent match explanation output

This layer functions independently and can be reused as a framework.

4️⃣ Conflict Prediction Layer

• Classification into Low / Moderate / High Risk
• Rule-based mismatch detection
• Lifestyle gap threshold logic
• Explanation of risk factors

5️⃣ Agreement & Visualization Layer

• Generate digital roommate agreement
• Customizable shared-living rules
• PDF export option
• Radar chart comparison of lifestyle factors
• Visual conflict indicator

6️⃣ Open Source & Documentation Strategy

• MIT license compliance
• Clean repository structure
• README with architecture explanation
• API documentation
• Contribution guide
• Modular folder organization


✨ System Features

The StayMatch platform provides several features designed to improve compatibility-based roommate allocation and reduce shared-living conflicts.

1. Lifestyle Compatibility Matching – Evaluates compatibility between users based on lifestyle preferences such as sleep schedule, cleanliness, study habits, and noise tolerance.

2. Configurable Compatibility Engine – Uses a JSON-based configuration system that allows administrators to modify scoring weights without altering the core algorithm.

3. Conflict Risk Prediction – Identifies potential conflicts between roommates using rule-based mismatch detection.

4. Match Explanation System – Provides transparent explanations showing why two users are considered compatible or incompatible.

5. Digital Roommate Agreement Generator – Generates structured agreements that define shared living rules and expectations.

6. Compatibility Visualization – Displays compatibility comparisons using radar charts and visual analytics.

7. Guest Mode Access – Allows users to explore the platform without creating an account.

8. Smart Match Recommendation System – Ranks potential roommates based on compatibility scores and suggests the most suitable matches.

9. Lifestyle Compatibility Radar Chart – Provides graphical comparison of lifestyle parameters between users.

10. Compatibility Feedback System – Allows users to provide feedback on the accuracy of compatibility predictions to improve future recommendations.


✨ Project Outcomes

• A fully functional Open-Source Lifestyle Compatibility Engine.

• A configurable roommate matching system that institutions can adapt by modifying weight configurations.

• Transparent compatibility scoring with detailed match explanations.

• Conflict risk prediction before room allocation.

• Digital roommate agreement generation to formalize shared living expectations.

• Visual compatibility analytics using radar charts for lifestyle comparison.

• Smart recommendation of potential roommates based on compatibility ranking.

• Feedback mechanism to improve the compatibility evaluation process.

• Clean modular backend architecture suitable for further extension.

• Contribution-ready open-source repository with proper documentation.

• A deployable and scalable framework for universities and co-living platforms.


✨ Assumptions

• Users provide reasonably accurate preference information.

• Lifestyle parameters are measurable and comparable.

• Institutions may customize weight configuration as per policy.

• The system initially handles a moderate user base.

• Risk classification is rule-based in the current version (no ML dependency).


✨ References

• Elmasri & Navathe – Fundamentals of Database Systems

• Korth & Silberschatz – Database System Concepts

• MongoDB Official Documentation

• Node.js Documentation

• Express.js Guide

• React Official Documentation

• Research literature on social compatibility modeling and roommate matching frameworks


✨ Technology Stack

The StayMatch system is implemented using a modern full-stack web development architecture that supports scalability, modularity, and open-source extensibility.

1. Frontend Technologies

The frontend of the system is responsible for providing an interactive interface where users can enter their lifestyle preferences, view compatibility matches, and analyze compatibility metrics.

HTML5 – Used for structuring the web pages and forms for user data input.

CSS3 – Used for styling and designing responsive user interfaces.

JavaScript (ES6) – Enables dynamic interaction between the user interface and backend APIs.

React.js – A component-based JavaScript library used to build dynamic and scalable user interfaces.

Chart.js – Used to visualize compatibility comparisons through radar charts and analytical dashboards.

2. Backend Technologies

The backend handles business logic, compatibility scoring, conflict prediction, API management, and agreement generation.

Node.js – Provides a runtime environment for executing server-side JavaScript.

Express.js – A lightweight web framework used to build RESTful APIs and manage server routing.

3. Database

The system stores user preferences, accommodation data, compatibility scores, and roommate agreements.

MongoDB – A NoSQL document-oriented database used for flexible and scalable data storage.

Mongoose – An Object Data Modeling (ODM) library used to manage MongoDB schemas and database interactions.

4. Compatibility Engine

The core innovation of the system is implemented through a configurable compatibility evaluation framework.

JavaScript-based compatibility scoring algorithm

JSON-based weight configuration system that allows institutions to adjust the importance of lifestyle parameters without modifying the core code.

5. Authentication and Security

User authentication and secure access to system APIs are handled using:

JSON Web Tokens (JWT) – For secure authentication and session management.

bcrypt.js – For password hashing and secure credential storage.

6. Agreement Generation

To formalize shared living rules between matched roommates:

PDFKit / HTML-PDF – Used to dynamically generate digital roommate agreements in PDF format.

7. Deployment and Hosting

The system can be deployed using cloud-based platforms for scalability and accessibility.

MongoDB Atlas – Cloud-hosted database service.

Render / Railway – Backend server hosting.

Vercel / Netlify – Frontend deployment.

8. Development Tools

The following tools are used during development and collaboration:

Visual Studio Code – Primary development environment.

Git & GitHub – Version control and open-source collaboration.

Postman – API testing and debugging.


🔬 Technical Innovation

StayMatch introduces a configurable compatibility engine where scoring weights can be dynamically adjusted without modifying core logic. The system separates compatibility evaluation from application logic, enabling reuse as a standalone framework. Additionally, the system incorporates rule-based conflict risk modeling, visual compatibility analytics using radar charts, and a recommendation system that ranks potential roommate matches based on lifestyle similarity.


## Backend Architecture

The backend of StayMatch follows a modular **Node.js + Express** architecture to ensure scalability, maintainability, and clear separation of concerns.

backend/

├── models        → Database schemas (User preferences, accommodation data)

├── controllers   → Business logic for handling compatibility evaluation and API responses

├── routes        → API endpoints for user interaction and data operations

├── config        → Configuration files such as database connection setup

└── server.js     → Application entry point that initializes the Express server

## Repository Structure

StayMatch is organized with a clean separation between backend services and frontend interface.

FossHack/

├── backend

    ├── models

        └── User.js

    ├── controllers

    ├── routes

    ├── config

    └── server.js

├── index.html

├── script.js

├── style.css

├── README.md

└── LICENSE

## Future Improvements

• Machine learning based compatibility prediction  
• Mobile application for roommate matching  
• Real-time chat between potential roommates  
• Smart conflict prediction using behavioral patterns  
• Integration with university housing systems  

