Here is the formatted version of your code for a `README.md`:

```markdown
# GitHub Roast App

This web application allows you to "roast" GitHub users based on their repositories, followers, following, contributions, and other metrics using the Google Gemini API. The app fetches the user's GitHub profile data and generates a fun and light-hearted roast using the **Gemini AI model**.

## Features

- Enter any **GitHub username** to roast them.
- Fetch GitHub data like **followers**, **following**, **repositories**, and **contributions**.
- Generate a light-hearted roast based on the GitHub profile information.
- Built with **Next.js** for the frontend and **Vercel** for hosting.

## Technologies Used

- **Next.js** - React-based framework for building the frontend.
- **Google Gemini API** - AI model for generating content (roasts).
- **Axios** - For making HTTP requests to fetch GitHub profile data.
- **Vercel** - For deployment and hosting.

## Project Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/github-roast-app.git
cd github-roast-app
```

### 2. Install Dependencies
Install the necessary packages with npm:
```bash
npm install
```

### 3. Set up Environment Variables
Create a `.env.local` file in the root of the project and add your Gemini API key:
```env
GEMINI_API_KEY=your-gemini-api-key-here
```

### 4. Run the Development Server
Start the Next.js development server locally:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Deploying to Vercel

### 1. Push to GitHub
Make sure your project is pushed to a GitHub repository.

### 2. Create a Vercel Account
Sign up for a Vercel account.

### 3. Connect Your Repository
Once logged in, click "New Project" and select your GitHub repository.

### 4. Set Environment Variables on Vercel
In the Vercel dashboard:
- Go to the **Settings** tab of your project.
- Add the `GEMINI_API_KEY` environment variable with the appropriate API key.

### 5. Deploy
Click on **Deploy** to deploy the app to Vercel. The URL will be something like `your-project-name.vercel.app`.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -am 'Add feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.
```

This format provides a clean and organized structure for your `README.md` file, with proper markdown syntax for sections, code blocks, and clear instructions for setting up and deploying the project.