// Ensure .env variables are being loaded correctly

require('dotenv').config();

// Check required environment variables
const requiredEnvVars = ['PORT', 'DB_CONNECTION', 'SECRET_KEY'];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`ERROR: Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

console.log('All required environment variables are present.');
