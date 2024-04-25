# HackMIT Development Tracker

## Introduction
The HackMIT Development Tracker is a web application designed to track the progress of various projects within the HackMIT development team. It allows for the management of project goals, tasks, and team members, with a focus on visualizing progress through a series of progress bars.

## Features
- Track project progress with master progress bars.
- Manage high-level goals and fine-grained tasks.
- Attach GitHub PRs and issues to tasks and goals.
- Add and manage team members across projects.
- Persist application state in a Postgres database.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- Python 3
- Flask
- PostgreSQL

### Clone the Repository
```bash
git clone https://github.com/techx/hack-dev-tracker.git
cd hack-dev-tracker
```

### Install Dependencies

#### Client
```bash
cd client
npm install
```

#### Server
```bash
cd server
pip install -r requirements.txt
```

### Database Setup
Ensure PostgreSQL is running and create a database for the application.

### Environment Variables
Set up the `.env` files in both the `client` and `server` directories with the following variables:

#### Client `.env`
```
REACT_APP_API_URL=http://localhost:5000
```

#### Server `.env`
```
SQLALCHEMY_DATABASE_URI=postgresql://postgres:SecurePassword123!@localhost/hack_dev_tracker
```

### Running the Application

#### Client
```bash
cd client
npm start
```
The client will be available at `http://localhost:3003`.

#### Server
```bash
cd server
flask run
```
The server will run on `http://localhost:5000`.

## Application Structure
- `client/src`: React frontend application.
- `server`: Flask backend application.
- `server/models.py`: Database models.
- `server/routes.py`: API routes.

## Testing
To run tests, navigate to the respective directory and use the test command:

#### Client
```bash
npm test
```

#### Server
```bash
python -m unittest
```

## Contributing
To contribute to the project:
1. Fork the repository.
2. Create a new branch for your feature.
3. Make changes and test.
4. Submit a pull request against the `main` branch.

## Contact
For any queries or contributions, please contact the repository maintainer at [email protected]

## License
This project is licensed under the MIT License - see the LICENSE file for details.
