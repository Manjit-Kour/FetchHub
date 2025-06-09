# GitHub Repo Fetcher

A simple React-based app to fetch and display GitHub repositories of a given user. Includes an option to fetch forked repositories as well.

## Features
- Enter a GitHub username to fetch public repositories
- Checkbox to toggle including forked repositories in the results
- Displays repository name, description, stars, and other details
- Handles loading and error states gracefully

## How it works
- User inputs a GitHub username
- If the "Include Forked Repos" checkbox is checked, the app fetches both original and forked repos
- Otherwise, only original repos are fetched and displayed

## Tech Stack
- React.js
- Axios for API requests
- GitHub REST API

## How to run locally
1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
