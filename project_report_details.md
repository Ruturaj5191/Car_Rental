# Car Rental System - Complete Project Report

---

# CHAPTER 1: INTRODUCTION

---

## 1.1 Introduction of Project

This project is developed as part of the academic curriculum for **Master of Computer Application** at **Siddhant Institute of Computer Application**. The application is designed to simulate a real-world software solution for a commercial car rental business, demonstrating the practical application of modern full-stack web development technologies to solve a real-world business problem.

The "Car Rental System" is a comprehensive, full-stack web application designed to digitalise and streamline the vehicle rental industry. Traditionally, the car rental process is heavily reliant on manual human intervention, starting from physical visits to the rental office to maintaining paper-based ledger books for customer records and car availability. This project seeks to eliminate these inefficiencies by providing a centralised cloud-based platform. Through this system, customers can register, browse a live inventory of vehicles, check their availability for specific dates, and book a car seamlessly from a computer or mobile device. Concurrently, it offers an administrative interface where business owners can easily add new vehicles, manage maintenance statuses, monitor upcoming bookings, and track overall business revenue. By merging a modern frontend built with React with a robust Node.js and Express backend, the project ensures real-time updates and an exceptional user experience.

### 1.1.1 Problem Statement
The Indian car rental market is rapidly growing and is projected to reach USD 14.5 billion by 2027. Despite this exponential uptake, a significant majority of small-to-medium car rental agencies still rely on outdated manual booking systems. These legacy workflows are plagued by scheduling conflicts, lack of transparent pricing, data duplication errors, and an inability to provide customers with a convenient, on-demand digital booking channel. The absence of a unified software platform for managing vehicles, users, and payments results in lost revenue, dissatisfied customers, and operational chaos. This project directly addresses these challenges by developing a technologically robust, all-in-one digital platform.

### 1.1.2 Motivation
The primary motivation for building this system stems from the observable gap between the rapidly digitising Indian consumer market and the stubbornly analogue operations of the vehicle rental sector. The COVID-19 pandemic further accelerated the demand for contactless, online-first service models. Customers now prefer self-service portals where they can compare vehicles, view transparent pricing, and complete transactions without human interaction. This project is motivated by the desire to create a system that meets this modern demand while simultaneously equipping business owners with powerful data-driven management tools.

### 1.1.3 Technology Overview (MERN/PERN Stack)
The application is architected on the **PERN Stack** (PostgreSQL/MySQL, Express.js, React.js, Node.js), a widely adopted full-stack JavaScript ecosystem:

| Layer       | Technology        | Role                                                                 |
|-------------|-------------------|----------------------------------------------------------------------|
| Frontend    | React.js + Vite   | Renders the user interface as a Single Page Application (SPA).       |
| Styling     | Tailwind CSS / MUI| Provides responsive, mobile-first design components.                 |
| Backend     | Node.js + Express | Handles HTTP requests, business logic, and RESTful API routing.      |
| Database    | MySQL/PostgreSQL  | Stores structured relational data with Sequelize ORM.                |
| Payment     | Razorpay SDK      | Processes secure online payments (UPI, Card, Net Banking).           |
| Auth        | JWT + bcrypt      | Manages user sessions and password encryption.                       |

---

## 1.2 Abstract

The Car Rental System is a modern, web-based application designed to streamline the process of renting vehicles for both customers and business administrators. Built utilizing the highly efficient MERN stack (MongoDB, Express.js, React.js, Node.js), the system provides a seamless and user-friendly interface for customers to browse available cars, check real-time availability based on specific date ranges, and secure bookings through an integrated online payment gateway (Razorpay). For administrators, it features a robust, centralized dashboard to easily manage the vehicle fleet, track incoming bookings, and monitor business activity. The primary objective of this project is to replace traditional, manual renting systems with an automated, 24/7 accessible digital platform.

The system supports three distinct user roles — **Customer**, **Administrator**, and **Car Register (Vendor)** — each with tailored interfaces and access privileges. Customers benefit from features including dynamic search filters, automatic fare calculation based on per-day or per-kilometre rates, and encrypted payment processing. Administrators gain a bird's-eye view of all operations through a central control panel. Third-party vehicle owners (vendors) can register their personal automobiles for listing on the platform after undergoing a document verification and approval workflow managed by the administrator.

The project utilises industry best practices in software engineering, including the **Model-View-Controller (MVC)** design pattern, **RESTful API** architecture, **role-based access control (RBAC)**, and **responsive web design (RWD)**, making it a deployable, production-grade solution.

---

## 1.3 Need for System

The traditional car rental process often involves customers visiting physical offices or making multiple phone calls to inquire about car availability. Businesses maintain records manually in ledgers or using disjointed spreadsheet software, which does not provide real-time updates. Payments are usually handled offline or through unintegrated third-party transfers.

### Critical Business Needs Addressed:

- **Prevent Double Booking:** Lack of a centralized real-time availability calendar frequently leads to scheduling conflicts. When two customers attempt to book the same car for overlapping dates using a manual register, one inevitably faces cancellation and frustration. The proposed system implements a date-overlap checking algorithm at the database level, ensuring a vehicle is automatically blocked from further bookings once reserved.

- **Time Efficiency:** The manual booking process is time-consuming for both the customer and the business owner. A customer may spend 30–60 minutes completing a rental transaction in person. With this system, the entire process — from browsing to payment confirmation — takes under 5 minutes.

- **Secure Transactions:** There is a strong need for integrated, instant, and secure online payment methods. Handling cash introduces the risks of counterfeiting, theft, and disputes. Razorpay's PCI-DSS compliant infrastructure ensures that all card and UPI transactions are processed with bank-grade encryption.

- **Business Management:** Administrators face difficulty in actively tracking fleet status, analyzing booking history, and managing inventory without a unified dashboard. Spreadsheets do not scale and are error-prone. A dedicated dashboard with tabular and graphical data views eliminates this problem.

- **Accessibility:** A digital platform makes the business accessible to customers anytime and anywhere, significantly enhancing convenience. Unlike a physical office with fixed working hours, this web application operates 24 hours a day, 7 days a week, 365 days a year.

- **Data Integrity & Backup:** Manual records (paper ledgers) are susceptible to physical damage (fire, water), theft, and human transcription errors. A cloud-hosted relational database guarantees data redundancy, automated backups, and ACID-compliant transactions.

### Comparison: Manual System vs. Proposed System

| Parameter              | Manual (Existing) System           | Proposed Digital System                  |
|------------------------|------------------------------------|------------------------------------------|
| Booking Speed          | 30–60 minutes                      | Under 5 minutes                          |
| Availability Check     | Phone call / physical visit        | Instant online check                     |
| Double Booking Risk    | High                               | Eliminated via date-overlap algorithm    |
| Payment Mode           | Cash / manual UPI verification     | Razorpay (UPI, Card, Net Banking)        |
| Data Storage           | Paper ledgers / spreadsheets       | Cloud-hosted relational database         |
| Accessibility          | Office hours only                  | 24/7 from any device                     |
| Business Analytics     | Non-existent                       | Real-time dashboard with metrics         |

---

## 1.4 Scope of System

The scope of this project encompasses the development of a fully functional web application encompassing three main modules:

### Module 1: Customer Module
Provides features for user authentication, browsing a dynamic car catalog, filtering vehicles, checking exact date-based availability, calculating rental totals automatically, and completing secure online payments via Razorpay. Specific features include:
- **Self-Registration & Login:** Customers register with their name, email, phone, and password. Passwords are hashed using `bcrypt` before storage. Login generates a JWT token for session management.
- **Car Browsing & Search:** A responsive grid layout displays all available cars with images, fuel type, seating capacity, and per-day pricing. Advanced filters allow sorting by category, price range, and city.
- **Date-Based Availability:** The customer selects a start date and end date. The system queries all existing bookings for the chosen car and returns an instant availability status.
- **Fare Calculation:** The system supports two billing modes: **Per Day** (daily rental rate × number of days) and **Per Kilometre** (rate per km × estimated distance). The total is computed automatically before checkout.
- **Payment & Confirmation:** The Razorpay checkout overlay launches directly within the application. Upon successful payment, the booking status updates to `CONFIRMED`, and the car is flagged as unavailable for the reserved dates.
- **Booking History & Feedback:** Customers can view past and upcoming bookings, submit ratings, and provide written feedback for each completed rental.
- **Tour Packages:** Customers can browse pre-designed travel packages, view itineraries, inclusions/exclusions, and book tours for groups.

### Module 2: Admin Module
Provides secure administrative access to a specialized dashboard for managing all CRUD (Create, Read, Update, Delete) operations on the car inventory, overseeing customer bookings, tracking platform data, and keeping vehicle availability statuses up to date. Specific features include:
- **Fleet Management:** Add, edit, or delete car listings with full specification fields (brand, model, year, seats, fuel type, transmission, images, pricing).
- **Booking Oversight:** View all customer bookings with status filters (Pending, Confirmed, Completed, Cancelled). Approve or reject cancellation requests.
- **Vendor Approval Workflow:** Review car registration requests from third-party vendors, inspect uploaded legal documents (RC Book, Insurance, PUC Certificate, ID Proof), and approve or reject submissions with administrative remarks.
- **Category Management:** Create and manage vehicle categories (e.g., Sedan, SUV, Hatchback, Luxury) that customers use for filtering.
- **Tour Package Management:** Create, edit, and publish curated tour packages with routes, pricing, and schedules.
- **Contact/Enquiry Management:** View and respond to customer contact form submissions.

### Module 3: Car Register (Vendor) Module
Operates as a multi-tenant feature where third-party vehicle owners can register on the platform, submit their vehicle details alongside legal documentation, and list their cars for rent subject to administrative approval:
- **Vendor Registration:** A separate signup flow for vehicle owners, creating accounts with the `CAR_REGISTER` role.
- **Vehicle Submission:** Vendors fill out a detailed form including car specifications, pricing preferences, and upload mandatory documents (RC Book, Insurance Copy, PUC Certificate, Government ID Proof).
- **Status Tracking:** Vendors can track the approval status of their submissions (Pending → Approved/Rejected) along with any admin remarks.

---

## 1.5 Operating Environment – Hardware and Software

### Hardware Requirements (Server & Developer Machine):
- **Processor:** Minimum Intel Core i3 / AMD Ryzen 3 or higher.
- **RAM:** 4 GB minimum (8 GB recommended for smooth server operations and database hosting).
- **Storage:** 50 GB of available hard disk space.
- **Network:** High-speed, continuous internet connection for cloud hosting.

### Software Requirements:
- **Architecture Stack:** MERN/PERN Stack (MySQL/PostgreSQL, Express, React, Node).
- **Frontend:** React.js bootstrapped with **Vite** for maximum performance, styled with **Tailwind CSS** and **Material UI** for responsive, mobile-first design elements.
- **Backend Server:** Node.js runtime utilising the **Express.js** framework to handle API routing.
- **Database:** A relational database (MySQL or PostgreSQL) communicating via the **Sequelize** Object-Relational Mapper (ORM) to ensure robust relationships between tables.
- **Development Tools:** Visual Studio Code (IDE), Git for version control, Postman for API testing.

### Software Stack Summary Table:

| Component          | Technology / Tool       | Version       | Purpose                                   |
|--------------------|-------------------------|---------------|-------------------------------------------|
| Frontend Framework | React.js                | 18.x          | Component-based UI rendering              |
| Build Tool         | Vite                    | 5.x           | Fast HMR and optimised production builds  |
| CSS Framework      | Tailwind CSS            | 3.x           | Utility-first responsive styling          |
| UI Components      | Material UI (MUI)       | 5.x           | Pre-built accessible React components     |
| Runtime            | Node.js                 | 20.x LTS      | Server-side JavaScript execution          |
| API Framework      | Express.js              | 4.x           | RESTful route handling and middleware      |
| Database           | MySQL / PostgreSQL      | 8.x / 16.x    | Relational data storage with SQL          |
| ORM                | Sequelize               | 6.x           | Object-Relational Mapping for DB queries  |
| Payment Gateway    | Razorpay                | Latest SDK    | Online payment processing                 |
| Authentication     | JSON Web Token (JWT)    | Latest        | Stateless session management              |
| Encryption         | bcrypt.js               | Latest        | Password hashing                          |
| Version Control    | Git + GitHub            | Latest        | Source code management                    |
| API Testing        | Postman                 | Latest        | Manual endpoint testing and debugging     |

---

# CHAPTER 2: PROPOSED SYSTEM

---

## 2.1 Proposed System

The proposed system is an end-to-end, automated online Car Rental web application. It completely digitalizes the vehicle renting experience. Customers can intuitively navigate through the platform to view detailed car specifications, check if a specific car is open for booking on their desired dates, and instantly reserve it by executing a secure online transaction. The system immediately registers the transaction and updates the status of the car to "Booked" for those particular dates to prevent any overlap. Administrators are equipped with a dedicated, protected control panel designed to effortlessly manage the automobile inventory and monitor operational metrics in real-time.

### Detailed System Workflow:

**Step 1 — User Registration & Authentication:**
The customer visits the platform landing page and creates a new account by providing their name, email, phone number, and a secure password. The backend hashes the password using `bcrypt` (with a salt round of 10) and stores the credentials in the `Users` table. Upon subsequent login, the server validates the credentials and issues a **JSON Web Token (JWT)** that is stored client-side (in `localStorage` or `httpOnly` cookies). This token is attached as an `Authorization: Bearer <token>` header in every subsequent API request to authenticate the user without re-entering credentials.

**Step 2 — Vehicle Discovery & Filtering:**
Once logged in, the customer navigates to the Cars page, which fetches all active car records from the database via a `GET /api/cars` endpoint. The UI renders these as responsive cards showing the car image, name, brand, fuel type, seats, and price. The customer can apply filters such as category (SUV, Sedan, Luxury), fuel type (Petrol, Diesel, Electric), and city to narrow down results.

**Step 3 — Date Selection & Availability Verification:**
The customer selects their desired **pickup date**, **drop-off date**, and **time**. The system sends these values along with the `car_id` to a `POST /api/bookings/check-availability` endpoint. The backend queries the `Bookings` table for any existing reservations where the date ranges overlap with the requested dates. If no overlap is found, the car is marked "Available" and the user proceeds; otherwise, a clear "Not Available" message is displayed.

**Step 4 — Fare Calculation:**
Based on the selected billing type (Per Day or Per Km), the system automatically calculates the total rental amount:
- **Per Day:** `total = price_per_day × number_of_days`
- **Per Km:** `total = price_per_km × estimated_distance_km`
The user reviews the breakdown — subtotal, applicable taxes, and grand total — before proceeding to pay.

**Step 5 — Payment Execution:**
The frontend calls `POST /api/payments/create-order` which uses the Razorpay Node SDK to generate a unique `order_id` with the calculated amount. The Razorpay checkout modal is launched on the frontend. The user completes payment via UPI, Debit/Credit Card, or Net Banking. Upon success, Razorpay returns a `payment_id` and a `signature`. The backend verifies the signature using HMAC SHA256 hashing (`crypto.createHmac('sha256', secret).update(order_id + "|" + payment_id).digest('hex')`). If the signature matches, the booking `payment_status` is updated to `SUCCESS`.

**Step 6 — Booking Confirmation:**
The car status is tagged as booked for the selected date range. The customer receives an on-screen confirmation with booking details. The booking entry is now visible in both the customer's history and the admin's booking management panel.

---

## 2.2 Feasibility Study

A thorough feasibility analysis was performed across three critical dimensions before development commenced:

### 2.2.1 Technical Feasibility
The project utilizes the widely adopted, open-source MERN/PERN stack. These technologies are highly scalable, well-documented, and perfectly suited for handling the expected web traffic, API integrations, and database operations without requiring specialized enterprise hardware.

**Key Technical Validations:**
- **React.js** is maintained by Meta (Facebook) and has over 220,000 GitHub stars, ensuring long-term community support and stability.
- **Node.js** uses the V8 JavaScript engine (by Google), providing near-native execution speeds for server-side code.
- **Sequelize ORM** abstracts raw SQL queries into clean JavaScript objects, reducing development time while maintaining query optimisation through eager/lazy loading.
- **Razorpay** provides a well-documented Node.js SDK with sandbox/test mode for development, allowing full payment flow testing without real money.
- All chosen technologies are **cross-platform** (Windows, macOS, Linux), ensuring developer flexibility.

### 2.2.2 Economic Feasibility
Leveraging largely open-source frameworks and cloud-based database tiers keeps the initial development and deployment costs minimal. Furthermore, automating the booking procedure significantly reduces the manual labor overhead, providing a high return on investment.

**Cost Analysis:**

| Item                        | Cost (Approx.)          |
|-----------------------------|-------------------------|
| React, Node, Express        | Free (Open Source)      |
| MySQL / PostgreSQL           | Free (Community Edition)|
| Razorpay Test Mode           | Free                    |
| VS Code, Git, Postman        | Free                    |
| Cloud Hosting (e.g., Render) | Free Tier Available     |
| Domain Name (optional)       | ₹500–₹1000/year        |
| **Total Estimated Cost**     | **Under ₹1,000**        |

### 2.2.3 Operational Feasibility
The user interface has been designed with a high degree of usability in mind. Both customers with minimal technical expertise and administrative staff can navigate and utilize the system without requiring extensive training.

**Key Operational Benefits:**
- The Single Page Application (SPA) architecture ensures zero page reloads during navigation, creating a native-app-like feel.
- Form validations and clear error messages guide users through every action.
- The admin dashboard uses tabular layouts, search bars, and action buttons that mirror enterprise software patterns familiar to most office workers.
- The system can be deployed on a single server instance, requiring no complex DevOps orchestration for a small-to-medium business.

---

## 2.3 Objectives of Proposed System

The system has been designed with the following concrete objectives:

1. **To establish a 24/7 accessible, centralized online platform for car rentals** — eliminating the constraints of physical office hours and geographic boundaries.
2. **To implement a dynamic date-range availability algorithm to eliminate double bookings** — by querying existing booking records for date overlaps before confirming any new reservation.
3. **To integrate a secure and reliable payment gateway (Razorpay) ensuring instant booking confirmation** — supporting UPI, Debit/Credit Cards, and Net Banking with cryptographic signature verification.
4. **To provide an administrative dashboard designed for straightforward vehicle and user management** — enabling CRUD operations on cars, categories, bookings, vendors, and tour packages from a single interface.
5. **To deliver a premium, responsive, and fast user interface that enhances customer satisfaction** — using Vite for sub-second hot reloads during development and optimised production bundles.
6. **To implement role-based access control (RBAC)** — ensuring that customers, admins, and vendors can only access the features and data relevant to their assigned role.
7. **To support a multi-tenant vendor model** — allowing third-party car owners to list their vehicles on the platform after undergoing an admin-approved verification process.

---

## 2.4 Users of System

The system architecture defines three distinct user roles, each with clearly scoped permissions:

### Role 1: Customer / Renter
Individuals who create an account on the platform to browse, evaluate, and rent vehicles. They are responsible for managing their individual profiles, conducting secure payments, and viewing their respective booking histories.

**Permissions:**
- Register, login, and manage personal profile
- Browse car catalog with filters
- Check date-based availability
- Make bookings and complete Razorpay payments
- View personal booking history
- Submit feedback and ratings for completed rentals
- Browse and book tour packages
- Submit contact/enquiry forms
- Request booking cancellations

### Role 2: System Administrator (Admin)
The business owner or managerial staff possessing elevated access privileges. They are authorized to add or modify car listings, oversee all incoming customer bookings, manage user access, and maintain the overarching system.

**Permissions:**
- All customer permissions, plus:
- Full CRUD access to the Cars inventory
- Manage vehicle Categories
- View and manage ALL customer bookings across the platform
- Approve or reject vendor car registration requests (with remarks)
- Approve or reject customer cancellation requests
- Create, edit, and publish Tour Packages
- View contact form submissions and customer enquiries
- Access dashboard analytics and business metrics

### Role 3: Car Register User (Vendor)
A specialised user account for third-party car owners who want to list their vehicles on the platform for rental income.

**Permissions:**
- Register and login via the vendor portal
- Submit car details with full specifications and pricing
- Upload mandatory legal documents (RC Book, Insurance, PUC, ID Proof)
- Track the approval/rejection status of submitted vehicles
- View admin remarks on rejected submissions
- Create and submit tour packages for admin approval

---

# CHAPTER 3: ANALYSIS AND DESIGN

---

## 3.1 System Requirements (Functional and Non-Functional Requirements)

### Functional Requirements:

| ID    | Requirement               | Description                                                                                                    |
|-------|---------------------------|----------------------------------------------------------------------------------------------------------------|
| FR-01 | User Management           | Registration, secure login, profile management, and role-based access control (Admin vs. Customer vs. Vendor). |
| FR-02 | Vehicle Catalog           | Displaying a digital fleet with rich data including images, specifications (fuel type, seats, transmission), and pricing. |
| FR-03 | Availability Engine       | A calendar-based system allowing users to select pickup/drop-off dates and verifying vehicle availability before allowing payment. |
| FR-04 | Payment Processing        | Integration with Razorpay to process UPI, Card, and Netbanking payments securely.                              |
| FR-05 | Admin Controls            | An exclusive panel enabling the addition, modification, or deletion of car entries and tracking of all platform transactional events. |
| FR-06 | Vendor Registration       | Allow third-party car owners to submit vehicle details and legal documents for admin review.                   |
| FR-07 | Cancellation Management   | Customers can request booking cancellations; admins can approve or reject with reasons.                        |
| FR-08 | Feedback System           | Customers can rate and review cars after completing a rental.                                                   |
| FR-09 | Tour Package Module       | Admin/Vendors can create tour packages; customers can browse and book them.                                    |
| FR-10 | Event Booking             | Customers can submit event-based car requests specifying quantity, dates, and locations.                       |
| FR-11 | Contact Management        | Platform visitors can submit enquiries via a contact form, viewable by admin.                                  |

### Non-Functional Requirements:

| ID     | Requirement   | Description                                                                                                                    |
|--------|---------------|--------------------------------------------------------------------------------------------------------------------------------|
| NFR-01 | Security      | Passwords must be securely hashed (e.g., using `bcrypt`). API routes must be protected using JSON Web Tokens (JWT).            |
| NFR-02 | Performance   | The application backend must provide quick response times, and the frontend should be optimized for rapid loading.             |
| NFR-03 | Usability     | The web interface must utilize Responsive Web Design (RWD) principles to function identically on all screen sizes.             |
| NFR-04 | Reliability   | The backend must include robust error handling to prevent server crashes and gracefully handle payment failures.                |
| NFR-05 | Scalability   | The database and API architecture must support horizontal scaling as the number of vehicles and users grows.                   |
| NFR-06 | Maintainability | Code must follow modular MVC patterns, making it easy for future developers to understand, debug, and extend.                |

---

## 3.2 Entity Relationship Diagram (ERD)

The core entities and their relationships map out as follows:

### Entity Descriptions:

- **User Entity:** Has a one-to-many relationship with the Booking entity. A single registered user can place multiple distinct bookings over time.

- **Car Entity:** Has a one-to-many relationship with the Booking entity. One specific vehicle can be associated with many different bookings across various dates.

- **Booking Entity:** Serves as the associative relationship bridging Users and Cars. A given booking belongs exactly to one User and reserves one specific Car, uniquely identified by a start and end date.

- **Category Entity:** Has a one-to-many relationship with the Car entity. Each category (e.g., 'SUV', 'Sedan') can contain multiple cars, but each car belongs to exactly one category.

- **Cancel Request Entity:** Has a many-to-one relationship with both the Booking and User entities. A user can submit cancellation requests for their bookings.

- **Feedback Entity:** Bridges Users, Bookings, and Cars. A feedback entry is tied to a specific user, for a specific booking, about a specific car.

- **Tour Package Entity:** Standalone entity created by Admins or Vendors. Has a one-to-many relationship with Tour Bookings.

- **Tour Booking Entity:** Links Users to Tour Packages with booking details and payment status.

### ER Diagram Relationships Summary:

```
Users (1) ────────── (N) Bookings
Cars (1) ─────────── (N) Bookings
Categories (1) ────── (N) Cars
Users (1) ────────── (N) Cancel_Requests
Bookings (1) ──────── (N) Cancel_Requests
Users (1) ────────── (N) Feedback
Bookings (1) ──────── (1) Feedback
Cars (1) ─────────── (N) Feedback
Car_Register_Users (1) ── (N) Car_Registration_Requests
Users (1) ────────── (N) Event_Requests
Tour_Packages (1) ── (N) Tour_Bookings
Users (1) ────────── (N) Tour_Bookings
```

---

## 3.3 Table / Database Structures

The system architecture includes three main panels: **User**, **Admin**, and **Car-Register**. The database structure below outlines all the key entities (tables) utilized across these panels:

### 1. Users Table (Customer Panel):
| Field Name   | Data Type  | Constraints / Notes            |
|--------------|------------|--------------------------------|
| `id`         | Integer    | Primary Key, Auto Increment    |
| `name`       | String     | NOT NULL                       |
| `email`      | String     | UNIQUE, NOT NULL               |
| `phone`      | String     | UNIQUE, NOT NULL               |
| `password`   | String     | Hashed via bcrypt, NOT NULL    |
| `role`       | String     | Default: `'user'`              |
| `otp`        | Integer    | For OTP-based verification      |
| `otp_expiry` | Timestamp  | Expiry time for issued OTP     |
| `created_at` | Timestamp  | Auto-generated on creation     |

---

### 2. Admins Table (Admin Panel):
| Field Name   | Data Type  | Constraints / Notes            |
|--------------|------------|--------------------------------|
| `id`         | Integer    | Primary Key, Auto Increment    |
| `name`       | String     | NOT NULL                       |
| `email`      | String     | UNIQUE, NOT NULL               |
| `password`   | String     | Hashed via bcrypt, NOT NULL    |
| `role`       | String     | Default: `'admin'`             |

---

### 3. Car Register Users Table (Car-Register Panel):
| Field Name      | Data Type  | Constraints / Notes            |
|-----------------|------------|--------------------------------|
| `id`            | Integer    | Primary Key, Auto Increment    |
| `name`          | String     | NOT NULL                       |
| `phone`         | String     | NOT NULL                       |
| `email`         | String     | UNIQUE, NOT NULL               |
| `password_hash` | String     | Hashed via bcrypt, NOT NULL    |
| `role`          | String     | Default: `'CAR_REGISTER'`      |
| `status`        | String     | Default: `'ACTIVE'`            |
| `created_at`    | Timestamp  | Auto-generated                 |
| `updated_at`    | Timestamp  | Auto-updated on modification   |

---

### 4. Cars Table:
| Field Name     | Data Type  | Constraints / Notes                 |
|----------------|------------|-------------------------------------|
| `id`           | Integer    | Primary Key, Auto Increment         |
| `name`         | String     | NOT NULL                            |
| `brand`        | String     | NOT NULL                            |
| `car_details`  | Text       | Detailed description of the vehicle |
| `cars_image`   | String     | Image URL (cloud-hosted)            |
| `category_id`  | Integer    | Foreign Key → Categories            |
| `vehicle_type` | Enum       | e.g., `'CAR'`                       |
| `price_per_day`| Decimal    | Daily rental rate in ₹              |
| `price_per_km` | Decimal    | Per-kilometre charge in ₹           |
| `is_available` | Boolean    | Current availability flag           |
| `city`         | String     | City where vehicle is stationed     |
| `year`         | Integer    | Year of manufacture                 |
| `seats`        | Integer    | Seating capacity                    |
| `fuel_type`    | String     | Petrol / Diesel / Electric / CNG    |
| `rating`       | Decimal    | Average customer rating (1–5)       |
| `badge`        | String     | e.g., 'Popular', 'New', 'Premium'   |
| `is_active`    | Boolean    | Soft-delete flag                    |
| `created_at`   | Timestamp  | Auto-generated                      |

---

### 5. Bookings Table:
| Field Name           | Data Type  | Constraints / Notes                        |
|----------------------|------------|--------------------------------------------|
| `id`                 | Integer    | Primary Key, Auto Increment                |
| `user_id`            | Integer    | Foreign Key → Users                        |
| `car_id`             | Integer    | Foreign Key → Cars                         |
| `pickup_location`    | String     | Address of pickup point                    |
| `drop_location`      | String     | Address of drop-off point                  |
| `start_date`         | Date       | Rental start date                          |
| `end_date`           | Date       | Rental end date                            |
| `start_time`         | String     | Pickup time                                |
| `distance_km`        | Decimal    | Estimated travel distance                  |
| `rate_per_day`       | Decimal    | Snapshot of daily rate at time of booking   |
| `rate_per_km`        | Decimal    | Snapshot of per-km rate at time of booking  |
| `total_amount`       | Decimal    | Computed grand total                       |
| `status`             | String     | `'PENDING'`, `'CONFIRMED'`, `'COMPLETED'` |
| `booking_mode`       | Enum       | `'RENTAL'`, `'TRANSFER'`                  |
| `billing_type`       | Enum       | `'PER_DAY'`, `'PER_KM'`                   |
| `payment_status`     | Enum       | `'PENDING'`, `'SUCCESS'`, `'FAILED'`       |
| `razorpay_order_id`  | String     | Razorpay generated order identifier        |
| `razorpay_payment_id`| String     | Razorpay transaction identifier            |
| `razorpay_signature` | String     | HMAC signature for verification            |
| `created_at`         | Timestamp  | Auto-generated                             |

---

### 6. Car Registration Requests Table:
| Field Name             | Data Type  | Constraints / Notes                     |
|------------------------|------------|-----------------------------------------|
| `id`                   | Integer    | Primary Key, Auto Increment             |
| `car_user_id`          | Integer    | Foreign Key → Car Register Users        |
| `name`                 | String     | Vehicle name                            |
| `brand`                | String     | Vehicle brand                           |
| `category_id`          | Integer    | Requested category                      |
| `vehicle_type`         | Enum       | `'CAR'`                                 |
| `car_details`          | Text       | Description                             |
| `city`                 | String     | City of the vehicle                     |
| `year`                 | Integer    | Year of manufacture                     |
| `seats`                | Integer    | Seating capacity                        |
| `fuel_type`            | String     | Fuel type                               |
| `cars_image`           | String     | Image URL                               |
| `requested_category_id`| Integer    | Category requested by vendor            |
| `approved_category_id` | Integer    | Category assigned by admin              |
| `price_per_day`        | Decimal    | Daily rate proposed                     |
| `price_per_km`         | Decimal    | Per-km rate proposed                    |
| `rc_book`              | String     | Document URL — Registration Certificate |
| `insurance_copy`       | String     | Document URL — Insurance Policy         |
| `puc_certificate`      | String     | Document URL — Pollution Certificate    |
| `id_proof`             | String     | Document URL — Government ID            |
| `status`               | String     | `'PENDING'`, `'APPROVED'`, `'REJECTED'` |
| `admin_remark`         | Text       | Admin feedback on submission            |
| `created_at`           | Timestamp  | Auto-generated                          |
| `updated_at`           | Timestamp  | Auto-updated                            |

---

### 7. Categories Table:
| Field Name   | Data Type  | Constraints / Notes            |
|--------------|------------|--------------------------------|
| `id`         | Integer    | Primary Key, Auto Increment    |
| `name`       | String     | e.g., 'SUV', 'Sedan', 'Luxury'|
| `is_active`  | Boolean    | Default: `true`                |

---

### 8. Cancel Requests Table:
| Field Name   | Data Type  | Constraints / Notes            |
|--------------|------------|--------------------------------|
| `id`         | Integer    | Primary Key, Auto Increment    |
| `booking_id` | Integer    | Foreign Key → Bookings         |
| `user_id`    | Integer    | Foreign Key → Users            |
| `reason`     | String     | Cancellation reason category   |
| `message`    | Text       | Detailed cancellation message  |
| `status`     | String     | Default: `'PENDING'`           |
| `created_at` | Timestamp  | Auto-generated                 |

---

### 9. Event Requests Table:
| Field Name       | Data Type  | Constraints / Notes                  |
|------------------|------------|--------------------------------------|
| `id`             | Integer    | Primary Key, Auto Increment          |
| `user_id`        | Integer    | Foreign Key → Users                  |
| `event_type`     | String     | e.g., 'Wedding', 'Corporate'        |
| `city`           | String     | Event city                           |
| `start_date`     | Date       | Event start date                     |
| `end_date`       | Date       | Event end date                       |
| `start_time`     | String     | Event start time                     |
| `cars_qty`       | Integer    | Number of cars required              |
| `badge`          | String     | Vehicle tier preference              |
| `min_seats`      | Integer    | Minimum seating requirement          |
| `billing_type`   | String     | `'PER_DAY'` or `'PER_KM'`           |
| `distance_km`    | Decimal    | Estimated distance                   |
| `pickup_location`| String     | Pickup address                       |
| `pickup_lat`     | Decimal    | Pickup GPS latitude                  |
| `pickup_lng`     | Decimal    | Pickup GPS longitude                 |
| `drop_location`  | String     | Drop-off address                     |
| `drop_lat`       | Decimal    | Drop-off GPS latitude                |
| `drop_lng`       | Decimal    | Drop-off GPS longitude               |
| `phone`          | String     | Contact phone for the event          |
| `note`           | Text       | Additional instructions              |
| `status`         | String     | Default: `'PENDING'`                 |
| `created_at`     | Timestamp  | Auto-generated                       |

---

### 10. Feedback Table:
| Field Name   | Data Type  | Constraints / Notes            |
|--------------|------------|--------------------------------|
| `id`         | Integer    | Primary Key, Auto Increment    |
| `user_id`    | Integer    | Foreign Key → Users            |
| `booking_id` | Integer    | Foreign Key → Bookings         |
| `car_id`     | Integer    | Foreign Key → Cars             |
| `message`    | Text       | Customer review text           |
| `rating`     | Integer    | Rating from 1 to 5             |
| `created_at` | Timestamp  | Auto-generated                 |

---

### 11. Tours Packages Table:
| Field Name        | Data Type  | Constraints / Notes                        |
|-------------------|------------|--------------------------------------------|
| `id`              | Integer    | Primary Key, Auto Increment                |
| `title`           | String     | Tour package name                          |
| `description`     | Text       | Detailed tour description                  |
| `duration`        | String     | e.g., '3 Days / 2 Nights'                 |
| `price`           | Decimal    | Price per person in ₹                      |
| `images`          | Text       | JSON array of image URLs                   |
| `routes`          | Text       | JSON array of route stops                  |
| `itinerary`       | Text       | Day-wise activity breakdown                |
| `inclusions`      | Text       | What is included (meals, fuel, etc.)       |
| `exclusions`      | Text       | What is not included                       |
| `tour_date`       | Date       | Scheduled tour date                        |
| `tour_time`       | Time       | Departure time                             |
| `status`          | Enum       | `'PENDING'`, `'APPROVED'`, `'REJECTED'`    |
| `created_by`      | Integer    | ID of the creator (Admin or Vendor)        |
| `created_by_role` | Enum       | `'ADMIN'` or `'CAR_REGISTER'`             |
| `is_active`       | Boolean    | Soft-delete / visibility flag              |
| `created_at`      | Timestamp  | Auto-generated                             |
| `updated_at`      | Timestamp  | Auto-updated                               |

---

### 12. Tour Bookings Table:
| Field Name    | Data Type  | Constraints / Notes                                |
|---------------|------------|-----------------------------------------------------|
| `id`          | Integer    | Primary Key, Auto Increment                         |
| `user_id`     | Integer    | Foreign Key → Users                                 |
| `tour_id`     | Integer    | Foreign Key → Tours Packages                        |
| `booking_date`| Date       | Date the booking was made                           |
| `start_date`  | Date       | Tour start date                                    |
| `num_persons` | Integer    | Number of travellers                                |
| `total_amount`| Decimal    | `price × num_persons`                               |
| `status`      | Enum       | `'PENDING'`, `'CONFIRMED'`, `'CANCELLED'`, `'COMPLETED'` |
| `created_at`  | Timestamp  | Auto-generated                                      |
| `updated_at`  | Timestamp  | Auto-updated                                        |

---

### 13. Contact Table:
| Field Name   | Data Type  | Constraints / Notes              |
|--------------|------------|----------------------------------|
| `id`         | Integer    | Primary Key, Auto Increment      |
| `name`       | String     | Visitor's name                   |
| `email`      | String     | Visitor's email                  |
| `phone`      | String     | Visitor's phone number           |
| `subject`    | String     | Subject line of the enquiry      |
| `message`    | Text       | Detailed message body            |
| `created_at` | Timestamp  | Auto-generated                   |

---

# CHAPTER 4: ANNEXURES

---

## 4.1 Drawbacks and Limitations

While the proposed system mitigates numerous physical problems, it does face certain constraints:

1. **Internet Dependency:** The foremost limitation is its absolute reliance on an active internet connection; users cannot interact with the system or verify bookings without network access. There is no offline mode or Progressive Web App (PWA) caching strategy implemented in the current version.

2. **Physical Identity Verification Gap:** Software applications inherently cannot verify physical identities or the driving skills of the renter. Although the platform can accept a driving license upload, fraud detection still requires manual human intervention during the physical key handover at the rental location.

3. **No Vehicle Condition Tracking:** Currently, the system assumes the car is returned properly without digital checks on the fuel level, odometer reading, or minor physical vehicle damage. These parameters still must be catalogued manually by an employee during the return inspection.

4. **Single Language Support:** The current interface is developed exclusively in English. This limits accessibility for non-English-speaking customers, particularly in regional Indian markets where vernacular language support may be critical for adoption.

5. **No Real-Time Notifications:** The system does not currently implement WebSocket-based or push notification mechanisms. Booking confirmations and status changes are visible only when the user manually refreshes the dashboard.

6. **Static Pricing Model:** The current system operates on fixed pricing per day or per kilometre. It does not feature dynamic "surge" pricing based on high market demand, weekends, or holiday seasons.

7. **Limited Analytics:** While the admin dashboard shows booking data, advanced business intelligence features (e.g., revenue forecasting charts, customer segmentation analysis, fleet utilisation heat maps) are not yet implemented.

---

## 4.2 Proposed Enhancements

To increase efficiency and expand the business model in the future, several enhancements have been identified:

1. **GPS and IoT Integration:** Equipping the physical fleet with GPS trackers that sync to the admin dashboard, allowing the agency to track stolen vehicles or mileage overruns in real-time. IoT sensors could also monitor engine health and fuel levels remotely.

2. **Mobile Application:** Deploying native Android and iOS applications (using React Native) to take advantage of push notifications for booking reminders, late-return alerts, and promotional offers. Mobile apps also enable features like camera access for instant damage documentation.

3. **AI-Powered Damage Detection:** Integrating machine learning APIs where customers take a photo of the car upon return, and the system automatically flags newly sustained scratches, dents, or body damage by comparing pre-rental and post-rental images.

4. **Dynamic Surge Pricing:** Implementing an algorithm that automatically adjusts rental prices based on real-time demand patterns. For example, prices could increase by 15–25% during weekends, public holidays, or festive seasons, and decrease during low-demand weekdays.

5. **Multi-Language & Localisation:** Adding support for multiple regional Indian languages (Hindi, Marathi, Tamil, etc.) to dramatically increase market penetration across Tier-2 and Tier-3 cities.

6. **Automated KYC Verification:** Integrating with services like Digilocker API or third-party OCR platforms to instantly verify driving licenses and Aadhaar cards during the online checkout process, eliminating the need for manual verification at pickup.

7. **Email & SMS Notifications:** Integrating with services like SendGrid (Email) and Twilio/MSG91 (SMS) to send automated booking confirmations, payment receipts, return reminders, and promotional marketing campaigns.

8. **Advanced Analytics Dashboard:** Integrating charting libraries (e.g., Chart.js, Recharts) to provide the admin with revenue vs. time graphs, most-booked car rankings, customer acquisition funnels, and fleet utilisation percentages.

---

## 4.3 Conclusion

In conclusion, the developed Car Rental System successfully fulfils its core objective: bridging the gap between consumers and car rental agencies in a seamless, digital environment. By leveraging cutting-edge web technologies — **React.js** for a fluid graphical interface, **Node.js** combined with **Express.js** for a high-performance backend API, and a relational database with **Sequelize ORM** for strict, structured data handling — the project completely eradicates the slow, error-prone manual entry system.

The integration of the **Razorpay payment gateway** ensures that financial transactions are processed with bank-grade security, providing instant confirmation and eliminating the risks associated with cash handling. The **date-availability synchronization algorithm** at the database level guarantees that double bookings are mathematically impossible, directly addressing the most critical pain point of the traditional system.

The multi-role architecture — supporting Customers, Administrators, and third-party Vendors — demonstrates the platform's scalability and its potential to operate as a marketplace model where the business can expand its fleet without owning every vehicle.

The system achieves high standards of **security** (via JWT and bcrypt), mitigates risks of **data loss** (via cloud-hosted databases), and offers a **highly scalable foundation** that can support rapid business growth and fleet expansion. The project stands as a practical, deployable solution capable of streamlining daily rental operations effectively, and serves as a testament to the power of modern full-stack web development in solving real-world business challenges.

---

## 4.4 Bibliography

1. **MDN Web Docs.** (n.d.). JavaScript / HTML / CSS Reference. Retrieved from [https://developer.mozilla.org/](https://developer.mozilla.org/)

2. **React Documentation.** (n.d.). Building User Interfaces. Retrieved from [https://react.dev/](https://react.dev/)

3. **Node.js Foundation.** (n.d.). Node.js API Reference. Retrieved from [https://nodejs.org/docs/](https://nodejs.org/docs/)

4. **Sequelize.** (n.d.). Sequelize ORM Documentation. Retrieved from [https://sequelize.org/](https://sequelize.org/)

5. **Express.js.** (n.d.). Fast, unopinionated, minimalist web framework. Retrieved from [https://expressjs.com/](https://expressjs.com/)

6. **Razorpay.** (n.d.). Payment Gateway Developer Documentation. Retrieved from [https://razorpay.com/docs/](https://razorpay.com/docs/)

7. **Vite.** (n.d.). Next Generation Frontend Tooling. Retrieved from [https://vite.dev/](https://vite.dev/)

8. **Tailwind CSS.** (n.d.). A Utility-First CSS Framework. Retrieved from [https://tailwindcss.com/](https://tailwindcss.com/)

9. **JSON Web Tokens (JWT).** (n.d.). Introduction to JSON Web Tokens. Retrieved from [https://jwt.io/](https://jwt.io/)

10. **Sommerville, I.** (2015). *Software Engineering* (10th Edition). Pearson. (For SDLC referencing)

11. **Pressman, R. S.** (2014). *Software Engineering: A Practitioner's Approach* (8th Edition). McGraw-Hill Education.

---
