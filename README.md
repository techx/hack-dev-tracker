# HackMIT Development Team Productivity Tracker

## Overview
This productivity tracker is designed to help the HackMIT development team track project progress, manage team members, and maintain all state in a Postgres database. The application features individual project pages with progress bars, task completion toggles, GitHub PR and issue link attachments, and team member management capabilities.

## Setup Instructions

### Prerequisites
- Node.js
- npm or yarn
- Python 3
- pip
- PostgreSQL

### Backend Setup
1. Navigate to the `server` directory.
2. Install the required Python packages: `pip install -r requirements.txt`.
3. Set up the PostgreSQL database and note down the credentials.
4. Create a `.env` file in the `server` directory with the following content, replacing `your_database_uri` with your actual database URI:
   ```
   SQLALCHEMY_DATABASE_URI=your_database_uri
   ```
5. Run the Flask server: `flask run`.

### Frontend Setup
1. Navigate to the `client` directory.
2. Install the required Node packages: `npm install` or `yarn install`.
3. Start the development server: `npm start` or `yarn start`.
4. The application should now be accessible at `http://localhost:3000`.

## Usage Instructions

### Landing Page
- Displays overall progress for each project.
- Lists all team members with their associated projects.
- Navigate to individual project pages by clicking on a project.

### Project Page
- Displays the name of the project and a master progress bar.
- Lists project goals with individual progress bars.
- Add, remove, or toggle completion of tasks.
- Attach links to GitHub PRs and issues.

### Team Members Management
- Add or remove team members.
- Assign team members to specific tasks.

## Testing
- Ensure that all functionalities are working as expected.
- Test the application's user experience thoroughly.

## Contributing
- Create a feature branch for new changes.
- Use pull requests for code review.
- Address feedback and merge changes after approval.

For more detailed information, refer to the project documentation and code comments.
