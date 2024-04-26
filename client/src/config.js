let API_URL;

if (process.env.NODE_ENV === "production") {
  API_URL = 'https://production-url.com'; // Replace with actual production URL
} else if (process.env.NODE_ENV === "test") {
  API_URL = 'http://localhost:5000'; // Test environment URL
} else {
  API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Default to local development URL
}

export default API_URL;
