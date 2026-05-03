const visualizers = [
  {
    title: "Pathfinding Studio",
    eyebrow: "Grid Intelligence",
    description:
      "Build mazes and watch Dijkstra’s and A* find the shortest path.",
    stats: ["Dijkstra's", "A*", "Custom grids"],
    url: "https://path-viz-pathfinding-visualizer.vercel.app/",
    accent: "teal",
    image: "/images/pathfinding.png",
  },
  {
    title: "Sorting Motion",
    eyebrow: "Array Transformations",
    description: "See comparisons and swaps unfold across sorting algorithms.",
    stats: ["Merge Sort", "Quick Sort", "Bubble Sort"],
    url: "https://sortviz-visualizer.vercel.app/",
    accent: "orange",
    image: "/images/sorting.png",
  },
  {
    title: "Scheduler Deck",
    eyebrow: "CPU Simulation",
    description: "Visualize how CPU scheduling algorithms manage processes.",
    stats: ["FCFS", "SJF", "Round Robin"],
    url: "https://os-process-scheduling-vizualizer.vercel.app/",
    accent: "blue",
    image: "/images/scheduling.png",
  },
];

const featurePoints = [
  {
    title: "Understand, not memorize",
    text: "Watch algorithms step through each operation so you actually grasp how they work.",
  },
  {
    title: "Learn by experimenting",
    text: "Change inputs, control speed, and see how different algorithms behave.",
  },
  {
    title: "Compare approaches",
    text: "See differences in efficiency and behavior across multiple algorithms in real time.",
  },
];

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="site-header">
        <div className="container nav-bar">
          <a className="brand" href="#top">
            <span className="brand-mark">A</span>
            <span className="brand-copy">
              <strong>Algo Lab</strong>
              <small>Visualize. Understand. Build.</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#visualizers">Labs</a>
            <a href="#why">Why it works</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="hero-badge">
                Your algorithm playground, unified
              </div>
              <h1>
                Visualize algorithms. Understand them faster.
                <span> Algo Lab.</span>
              </h1>
              <p className="hero-text">
                Explore how algorithms work step-by-step. Compare approaches,
                control inputs, and build intuition through visualization.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#visualizers">
                  Explore the labs
                </a>
              </div>

              <div className="hero-metrics">
                <div>
                  <strong>3</strong>
                  <span>Core modules</span>
                </div>
                <div>
                  <strong>1</strong>
                  <span>Interactive simulations</span>
                </div>
                <div>
                  <strong>∞</strong>
                  <span>Room for learning</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card panel-primary">
                <p>Live Collection</p>
                <h2>
                  Algorithm experiences designed to be seen, not memorized.
                </h2>
              </div>
              <div className="panel-grid">
                <div className="panel-card">
                  <span className="panel-label">Pathfinding: </span>
                  <strong>
                    Find shortest paths using Dijkstra, BFS, and more.
                  </strong>
                </div>
                <div className="panel-card">
                  <span className="panel-label">Sorting: </span>
                  <strong>Compare sorting algorithms step-by-step.</strong>
                </div>
                <div className="panel-card">
                  <span className="panel-label">Scheduling: </span>
                  <strong>Understand CPU scheduling decisions visually.</strong>
                </div>
                <div className="panel-card glass-card">
                  <span className="panel-label">Next step: </span>
                  <strong>
                    More algorithms, controls, and customization coming soon.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="visualizers">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Featured labs</p>
              <h2>Explore algorithms through interactive labs</h2>
              <p>
                Each lab lets you experiment with inputs, visualize execution,
                and compare different approaches in real time.
              </p>
            </div>

            <div className="card-grid">
              {visualizers.map((item) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`lab-card ${item.accent}`}
                  key={item.title}
                >
                  <div className={`card-visual ${item.accent}`}>
                    <img src={item.image} alt={`${item.title} preview`} />
                    <div className="preview-tint" />
                    <div className="preview-glow" />
                  </div>

                  <div className="card-content">
                    <div className="card-topline">{item.eyebrow}</div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <div className="chip-row">
                      {item.stats.map((stat) => (
                        <span className="chip" key={stat}>
                          {stat}
                        </span>
                      ))}
                    </div>

                    <span className="card-link">Launch →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="why">
          <div className="container">
            <div className="section-heading narrow">
              <p className="section-kicker">Why use Algo Lab?</p>
            </div>

            <div className="feature-grid">
              {featurePoints.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-layout">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark">A</span>
              <span className="brand-copy">
                <strong>Algo Lab</strong>
                <small>Visualize. Understand. Build.</small>
              </span>
            </a>
            <p>
              A unified home for exploring algorithms through interactive
              visualizers and better visual learning.
            </p>
          </div>

          <div className="footer-links" aria-label="Footer">
            <a href="#visualizers">Labs</a>
            <a href="#why">Why it works</a>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
