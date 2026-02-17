# Exergy Physics

> **An interactive browser for exploring humanity's collective understanding of physics. Navigate through physics theories and concepts organized chronologically and visually mapped by their historical development.**

---

## 🔭 The Philosophy

**Exergy Physics** presents physics knowledge as a navigable tree structure, where each concept is colored according to when it was developed—from the oldest theories (redshifted) to the most recent (blueshifted). This visualization reflects how our understanding of physics has evolved over time, creating a cosmic map of human knowledge.

## 🚀 Features

* **Chronological Color Mapping**: Physics concepts are visualized using a redshift-to-blueshift color scheme, where older theories appear redder and newer ones appear more violet/blue, spanning from 1637 to today.
* **Hierarchical Organization**: Browse physics knowledge organized by major categories: Classical Mechanics, Quantum Physics, Relativity, Thermodynamics, Electromagnetism, and Particle Physics.
* **Interactive Exploration**: Click on any concept to view detailed summaries and access Wikipedia articles for deeper learning.
* **Smart Search**: Quickly find specific physics theories and concepts using the built-in search functionality.
* **Year-Based Sorting**: Each hierarchy level is automatically sorted by year, showing the chronological development of physics concepts.

## 🛠️ Getting Started

### Prerequisites

Since this is a standard web-based application, all you need is a modern browser (Chrome, Firefox, Safari, or Edge): https://exergy-connect.github.io/physics/

### Running Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start exploring physics concepts!

The application uses:
- `index.html` - Main application interface
- `data.js` - Physics knowledge base with theories, years, and summaries

## 🗺️ How it Works

1. **Browse**: Navigate through the hierarchical tree structure of physics concepts
2. **Explore**: Click on parent nodes to expand and see their children
3. **Learn**: Click on leaf nodes (individual concepts) to view summaries and access Wikipedia
4. **Search**: Use the search bar to quickly find specific theories or concepts
5. **Visualize**: Observe the color gradient that represents the chronological development of physics knowledge

## 🤝 Contributing

We welcome contributions to expand and improve this physics knowledge browser:

* Add more physics concepts and theories to the knowledge base
* Improve summaries and descriptions of existing concepts
* Enhance the visualization and user interface
* Add new features for exploring physics knowledge

To contribute:
1. Add or update entries in `data.js` following the existing structure
2. Each concept should include: `name`, `year`, and optionally `summary`
3. Ensure proper hierarchical organization within the existing categories

## 📚 Data Source

The physics knowledge base, including concept summaries, historical dates, and key people associated with each theory, was generated using **Auto** (Cursor's AI agent router), powered by large language models. The content was created through AI-assisted research and synthesis of physics knowledge, with careful review to ensure accuracy of historical dates, theoretical descriptions, and attribution of key contributors.

**LLM Model Information:**
- **Agent Router**: Auto (Cursor AI)
- **Primary Model**: GPT-4o (as of 2026-02-07)
- **Generation Date**: February 2026

The data structure, hierarchical organization, and summaries were all generated with AI assistance to create a comprehensive and navigable representation of physics knowledge.

## 📑 Papers Analyzed

The following papers have been analyzed and integrated into the knowledge base:

1. **Riemann, B. (1854)** - "On the Hypotheses which lie at the Bases of Geometry"
   - Paper ID: `riemann-1854-geometry`
   - Established foundations of differential geometry and n-dimensional manifolds

2. **Feynman, R. P. (1949)** - "Space-Time Approach to Quantum Electrodynamics"
   - Paper ID: `feynman-1949-space-time`
   - Introduced space-time approach to QED calculations

3. **Rovelli, C. (1996)** - "Relational Quantum Mechanics"
   - Paper ID: `rovelli-1996-rqm`
   - Proposed relational interpretation of quantum mechanics

4. **Ellman, R. (1998)** - "Analysis of The Anomalous Orbital-Energy Changes Observed in Spacecraft Flybys of Earth"
   - Paper ID: `ellman-1998-flybys`
   - Analyzed Earth flyby anomaly and its connection to Pioneer anomaly

5. **Anderson, J. D., et al. (1998)** - "Indication, from Pioneer 10/11, Galileo, and Ulysses Data, of an Apparent Anomalous, Weak, Long-Range Acceleration"
   - Paper ID: `anderson-1998-pioneer`
   - Documented the Pioneer anomaly observation

6. **Shamir, L. (2024)** - "An empirical consistent redshift bias: A possible direct reproducible observation of Zwicky's TL theory"
   - Paper ID: `shamir-2024-redshift`
   - Observed systematic redshift bias based on galaxy rotation direction, potentially providing first empirical evidence for Zwicky's tired-light theory

*Note: Additional papers are available in the `data/papers/` directory and will be added to this index as they are analyzed.*

## 🔬 Current Status & Future Work

**First Pass Complete**: This initial version represents a first-pass implementation of the physics knowledge browser, establishing the foundational structure, data model, and visualization framework.

**Next Phase**: We will now apply the model to analyze specific physics papers in detail. This detailed paper analysis will be used to:
- Refine and update the data model structure
- Enhance the accuracy and depth of content entries
- Expand the knowledge base with detailed insights from primary sources
- Improve the relationships between theories, assumptions, claims, and predictions
- Add anomaly tracking and their relationships to violated assumptions and claims

This iterative approach ensures that the knowledge base evolves from a high-level overview to a detailed, paper-grounded representation of physics knowledge.

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

**© 2026 Exergy ∞ LLC** *Turning conceptual potential into structural reality.*
