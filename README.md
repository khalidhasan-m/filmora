# 🎬 Filmora — Movie & TV Explorer

A modern, responsive web application to discover, search, and explore movies and TV shows from around the world. Powered by the free TVMaze REST API with real-time title search, genre filtering, rich modal details, and seamless light/dark mode support.

---

## 🌟 Key Features

- **Live TVMaze API Integration**: Real-time searching across thousands of shows and series with debounced queries.
- **Interactive Details Modal**: Deep dive into show overviews, high-resolution backdrops, critic ratings, air dates, networks, and official links.
- **Genre Filtering & Sorting**: Filter by popular categories (Drama, Action, Comedy, Sci-Fi, Thriller, etc.) and sort by popularity, rating, release year, or title.
- **Day & Night Mode**: Instant theme toggle with local storage persistence and zero-white-flash on page reload.
- **Smooth Skeleton Loading**: Preserves layout stability and prevents content shifting while fetching data.
- **Resilient Error Handling**: Includes a custom 404 page and an application Error Boundary to gracefully catch runtime errors.
- **Fully Responsive**: Optimized for all devices from mobile screens to ultrawide displays with accessible semantic HTML.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Tooling**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Data Source**: [TVMaze API](https://www.tvmaze.com/api)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📂 Project Structure

```text
Filmora/
├── public/
│   └── favicon.svg           # Custom vector cinema favicon
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable UI primitives (Button, EmptyState, SectionHeader)
│   │   ├── ErrorBoundary.jsx # React class error boundary
│   │   ├── Footer.jsx        # App footer with navigation & social links
│   │   ├── HeroBanner.jsx    # Cinematic landing hero banner with stats
│   │   ├── MovieCard.jsx     # Responsive movie poster card
│   │   ├── MovieDetailsModal.jsx # Detailed show modal overlay
│   │   ├── Navbar.jsx        # Sticky navigation with mobile menu
│   │   ├── PageLayout.jsx    # Shared page scaffold
│   │   ├── SearchBar.jsx     # Search input, genre pills & sorting controls
│   │   ├── SkeletonCard.jsx  # Card loading shimmer placeholder
│   │   └── ThemeToggle.jsx   # Animated Sun/Moon theme switcher
│   ├── context/
│   │   └── ThemeContext.jsx  # Theme provider & persistence
│   ├── data/
│   │   └── homeData.js       # Static highlights and genre metadata
│   ├── lib/
│   │   ├── api.js            # TVMaze API client methods
│   │   ├── useDocumentTitle.js # Dynamic document title & SEO hook
│   │   └── utils.js          # HTML strippers, date & rating formatters
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with trending titles & genres
│   │   ├── Movies.jsx        # Full movie catalog with search & filters
│   │   ├── ErrorPage.jsx     # Error state presentation
│   │   └── NotFound.jsx      # Custom 404 page
│   ├── App.jsx               # Router & ErrorBoundary root
│   ├── index.css             # Tailwind v4 configuration & theme variables
│   └── main.jsx              # React application entry point
├── index.html                # HTML entrypoint with metadata & anti-flash script
├── package.json              # Project dependencies & scripts
└── vite.config.js            # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/khalidhasan-m/Filmora.git
   cd Filmora
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

- `npm run dev` — Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build` — Compiles and optimizes assets for production deployment into `dist/`.
- `npm run preview` — Locally preview the production build.
- `npm run lint` — Runs Oxlint across all project files.

---

## 👤 Author

- **Khalid Hasan**
- GitHub: [@khalidhasan-m](https://github.com/khalidhasan-m)
- Portfolio: [khalidhasan.vercel.app](https://portfolio-nextjs-virid-sigma.vercel.app/)
- LinkedIn: [in/khalidhasanmeskat](https://www.linkedin.com/in/khalidhasanmeskat)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).