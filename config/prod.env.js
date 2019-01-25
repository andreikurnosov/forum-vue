'use strict'

require('dotenv').config()

module.exports = {
  FIREBASE_NODE_ENV: JSON.stringify(process.env.FIREBASE_NODE_ENV),

  FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),

  FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),

  FIREBASE_DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),

  FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),

  FIREBASE_STORAGE_BUKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUKET),

  FIREBASE_MESSAGING_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_ID)
}
