# hack-dev-tracker

This project is designed to track the productivity and progress of projects for the HackMIT development team. It includes features for managing project goals, tasks, team members, and overall progress.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
=======
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
