# YourNextSite.ca

This is a [Next.js](https://nextjs.org/) project for a modern, responsive website. It's built with TypeScript and styled with Tailwind CSS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/Your-Next-Site/yournextsite.ca.git
    ```
2.  Install the dependencies:
    ```sh
    bun install
    ```

### Running the Development Server

To run the app in development mode, run the following command:

```sh
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

-   `bun dev`: Runs the app in the development mode.
-   `bun run build`: Builds the app for production to the `.next` folder.
-   `bun run start`: Starts the production server.
-   `bun run lint`: Runs the linter to check for code quality.

## Technologies Used

-   [Next.js](https://nextjs.org/) - React framework for production
-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces
-   [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
-   [AWS SES](https://aws.amazon.com/ses/) - For sending emails

## Project Structure

```
.
├── app/
│   ├── api/
│   └── pages/
├── components/
│   └── ui/
├── lib/
├── public/
└── types/
```

-   `app/`: Contains the main application logic, including pages and API routes.
-   `components/`: Contains reusable UI components.
-   `lib/`: Contains utility functions.
-   `public/`: Contains static assets like images and fonts.
-   `types/`: Contains TypeScript type definitions.

## Deployment

This app is ready to be deployed on [Vercel](https://vercel.com/), the creators of Next.js. For more information, see the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

