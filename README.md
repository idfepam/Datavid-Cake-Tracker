# Datavid Cake Tracker

Datavid Cake Tracker is a management tool designed to help track the birthdays of Datavid members, making it easier to celebrate everyone in a remote multinational company.

## Features

- Add a Datavid member with their details.
- View a list of all Datavid members.
- Sort the member list by the closest upcoming birthdays.
- Comprehensive API documentation using Swagger.

## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [System Architecture](#system-architecture)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Python 3.x
- Node.js (with npm)
- MySQL

### Clone the Repository

git clone https://github.com/idfepam/Datavid-Cake-Tracker.git
cd datavid-cake-tracker


## Backend Setup

### Required installation steps

These steps assume installation for a Unix-based OS. To install it with Windows, see the appropriate documentation for Windows commands.

#### Mostly automatic install

1. Create a virtual environment:

    python -m venv venv
    

2. Activate the virtual environment:

    - On Windows:
        .\\venv\Scripts\activate

    - On macOS/Linux:
        source venv/bin/activate

3. Install backend dependencies:

    pip install -r requirements.txt


4. Configure MySQL Database:

    Update `backend/cake_tracker/settings.py` with your MySQL database credentials:
    
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'datavid_cake_tracker',
            'USER': 'your_db_user',
            'PASSWORD': 'your_db_password',
            'HOST': 'localhost',
            'PORT': '3306',
        }
    }


5. Make migrations and migrate:

    python manage.py makemigrations
    python manage.py migrate


6. Create a superuser:

    python manage.py createsuperuser


7. Run the Django development server:

    python manage.py runserver


## Frontend Setup

### Required installation steps

1. Navigate to the frontend directory:

    cd ../frontend


2. Install frontend dependencies:

    npm install


3. Start the React development server:

    npm start


## Usage

- React Frontend: Open your browser and go to `http://localhost:3000`.
- Swagger Documentation: Access API documentation at `http://localhost:8000/swagger/`.

## API Documentation

The API is documented using Swagger. To view the documentation, navigate to `http://localhost:8000/swagger/`.

## System Architecture

### Frontend

- React.js
  - Components: `AddMember`, `MemberList`
  - Axios for API requests
  - CSS for styling

### Backend

- Django & DRF
  - Models: `Member`
  - Views: `MemberViewSet`
  - Serializers: `MemberSerializer`
  - URL routing with DRF's DefaultRouter
  - Swagger for API documentation

### Database

- MySQL
  - Table: `members_member`
  - Fields: `id`, `first_name`, `last_name`, `birth_date`, `country`, `city`

### APIs

- `GET /api/members/`: Retrieve all members
- `POST /api/members/`: Create a new member
- `GET /api/members/sorted_by_birthday/`: Retrieve members sorted by closest birthdays

### UML Diagram

  +---------------------------------+
  |             React               |
  |---------------------------------|
  | - AddMember                     |
  | - MemberList                    |
  |---------------------------------|
  | + fetchMembers()                |
  | + fetchSortedMembers()          |
  | + handleSortToggle()            |
  +---------------------------------+
                |
                V
  +---------------------------------+
  |             Django              |
  |---------------------------------|
  | + MemberViewSet                 |
  |   - list()                      |
  |   - create()                    |
  |   - sorted_by_birthday()        |
  |---------------------------------|
  | + MemberSerializer              |
  | + Member                        |
  +---------------------------------+
                |
                V
  +---------------------------------+
  |             MySQL               |
  |---------------------------------|
  | + members_member                |
  |   - id                          |
  |   - first_name                  |
  |   - last_name                   |
  |   - birth_date                  |
  |   - country                     |
  |   - city                        |
  +---------------------------------+



### Solution Design

## Overview

The Datavid Cake Tracker is designed using a modern web development stack, ensuring scalability, maintainability, and ease of use. The system is divided into three main components: the frontend, the backend, and the database.
Frontend

    React.js: The frontend is built with React, a popular JavaScript library for building user interfaces. It uses functional components and hooks for state management.
        Components: The main components are AddMember for adding new members and MemberList for displaying the list of members.
        API Requests: Axios is used to handle HTTP requests to the backend API.
        Styling: Basic CSS is used for styling the components, ensuring a clean and user-friendly interface.

## Backend

    Django & DRF: The backend is built with Django, a high-level Python web framework, and Django Rest Framework (DRF) for creating RESTful APIs.
    Models: The Member model represents a Datavid member, with fields for first name, last name, birth date, country, and city.
    Views: The MemberViewSet handles CRUD operations for members and includes a custom action for sorting members by the closest birthdays.
    Serializers: The MemberSerializer serializes the Member model for API responses.
    Swagger: Swagger is integrated using drf-yasg for auto-generating API documentation.

## Database

    MySQL: MySQL is used as the database for storing member information. The database schema is managed through Django's ORM, ensuring consistency and ease of migrations.

## API Endpoints

    GET /api/members/: Retrieve all members.
    POST /api/members/: Create a new member.
    GET /api/members/sorted_by_birthday/: Retrieve members sorted by closest birthdays.

## Sequence Diagram

The sequence diagram below outlines the main interactions in the system:

![image](https://github.com/idfepam/Datavid-Cake-Tracker/assets/105879784/666d252d-ca0c-4340-b0a1-9416cc68b06f)
