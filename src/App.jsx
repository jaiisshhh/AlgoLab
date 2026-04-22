const visualizers = [
  {
    title: "Pathfinding Studio",
    eyebrow: "Grid Intelligence",
    description:
      "Build mazes, place walls, and watch Dijkstra's and A* turn chaos into the shortest possible route.",
    stats: ["Dijkstra's", "A*", "Custom grids"],
    url: "https://path-viz-pathfinding-visualizer.vercel.app/",
    accent: "teal",
    image: "/images/pathfinding.png",
  },
  {
    title: "Sorting Motion",
    eyebrow: "Array Transformations",
    description:
      "See every comparison, swap, and divide step unfold with sorting algorithms that make time complexity feel real.",
    stats: ["Merge Sort", "Quick Sort", "Bubble Sort"],
    url: "https://sortviz-visualizer.vercel.app/",
    accent: "orange",
    image: "/images/sorting.png",
  },
  {
    title: "Scheduler Deck",
    eyebrow: "CPU Simulation",
    description:
      "Understand process scheduling with visual timelines for FCFS, SJF, and Round Robin across competing jobs.",
    stats: ["FCFS", "SJF", "Round Robin"],
    url: "https://os-process-scheduling-vizualizer.vercel.app/",
    accent: "blue",
    image: "/images/scheduling.png",
  },
];

const featurePoints = [
  {
    title: "One home for all three tools",
    text: "Algo Lab gives your projects a single identity, which makes the whole set feel like a product instead of separate demos.",
  },
  {
    title: "Built for visual learning",
    text: "The design focuses on motion, contrast, and structure so each section reinforces exploration and discovery.",
  },
  {
    title: "Ready to grow with React",
    text: "Cards, data, navigation, themes, and future filters can all be managed as reusable components instead of static HTML.",
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
                Bring scheduling, pathfinding, and sorting into one bold home:
                <span> Algo Lab.</span>
              </h1>
              <p className="hero-text">
                Turn three separate visualizers into one polished experience
                with a strong identity, a cleaner user journey, and a design
                that feels modern from the first second.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#visualizers">
                  Explore the labs
                </a>
                <a className="button button-secondary" href="#why">
                  Why it works
                </a>
              </div>

              <div className="hero-metrics">
                <div>
                  <strong>3</strong>
                  <span>Core visualizers</span>
                </div>
                <div>
                  <strong>1</strong>
                  <span>Unified brand system</span>
                </div>
                <div>
                  <strong>∞</strong>
                  <span>Room to expand</span>
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
                  <span className="panel-label">Pathfinding</span>
                  <strong>Search the shortest route</strong>
                </div>
                <div className="panel-card">
                  <span className="panel-label">Sorting</span>
                  <strong>Compare movement and speed</strong>
                </div>
                <div className="panel-card">
                  <span className="panel-label">Scheduling</span>
                  <strong>Visualize CPU decisions</strong>
                </div>
                <div className="panel-card glass-card">
                  <span className="panel-label">Next step</span>
                  <strong>Add algorithm details, controls, and themes</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="visualizers">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Featured labs</p>
              <h2>Your three visualizers, presented like a real product</h2>
              <p>
                Each card uses a different accent while staying inside one calm,
                premium color system. That gives variety without losing visual
                consistency.
              </p>
            </div>

            <div className="card-grid">
              {visualizers.map((item) => (
                <article className={`lab-card ${item.accent}`} key={item.title}>
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
                    <a
                      className="card-link"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open visualizer
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="why">
          <div className="container">
            <div className="section-heading narrow">
              <p className="section-kicker">Why this landing works better</p>
              <h2>
                A cleaner structure helps the visualizers feel more credible
              </h2>
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
