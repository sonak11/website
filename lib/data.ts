export const research = [
  {
    id: "medical-ai",
    title: "Explainable AI for Clinical Decision Support",
    domain: "Medical AI",
    description:
      "Building SHAP-based explanation layers over gradient-boosted models to surface feature importance for ICU deterioration prediction. The goal: give clinicians a reason, not just a score.",
    tags: ["XAI", "SHAP", "Clinical NLP", "Python"],
    status: "Active",
    highlight: "Clinician-in-the-loop pipeline reduces false-positive alert fatigue by surfacing uncertainty estimates alongside predictions.",
  },
  {
    id: "energy-forecasting",
    title: "Synthetic Time-Series Generation for Grid Forecasting",
    domain: "Energy AI",
    description:
      "Generating realistic synthetic demand curves using diffusion-based generative models to augment sparse sensor data in renewable energy grids — enabling better day-ahead load forecasting.",
    tags: ["Diffusion Models", "Time-Series", "PyTorch", "Energy"],
    status: "Active",
    highlight: "Synthetic augmentation improves MAPE by ~12% on low-data regimes compared to naive interpolation baselines.",
  },
  {
    id: "agentic-nlp",
    title: "NLP Pipeline Robustness in Low-Resource Medical Domains",
    domain: "NLP Research",
    description:
      "IEEE fellowship work on adapting transformer-based NLP models to handle medical abbreviations, domain shift, and class imbalance in clinical text classification tasks.",
    tags: ["NLP", "Transformers", "BERT", "Clinical Text"],
    status: "Published",
    highlight: "Fellowship research presented at IEEE workshop; achieved 9% F1 improvement over baseline via domain-adaptive pretraining.",
  },
];

export const projects = [
  {
    id: "agent-workflow",
    title: "Agentic Research Assistant",
    description:
      "A multi-step LLM agent that decomposes complex research questions into sub-tasks, retrieves from indexed papers, and synthesizes structured summaries — with reflection loops to self-correct citations.",
    stack: ["LangGraph", "OpenAI API", "FAISS", "FastAPI", "React"],
    domain: "Agentic Systems",
    link: "#",
  },
  {
    id: "icu-alert",
    title: "ICU Early Warning Dashboard",
    description:
      "End-to-end ML pipeline ingesting EHR vitals streams, outputting risk scores with SHAP waterfall explanations rendered in a clinician-facing Next.js dashboard.",
    stack: ["XGBoost", "SHAP", "Next.js", "PostgreSQL", "Docker"],
    domain: "Medical AI",
    link: "#",
  },
  {
    id: "energy-synthetic",
    title: "GridSynth — Synthetic Energy Data Generator",
    description:
      "Open-source tool for generating synthetic electricity demand profiles using score-based diffusion. Includes configurable temperature and seasonality conditioning.",
    stack: ["PyTorch", "Diffusion Models", "NumPy", "Streamlit"],
    domain: "Energy AI",
    link: "#",
  },
  {
    id: "rad-collab",
    title: "RAD Collaboratory Research Tool",
    description:
      "Data pipeline and analysis tooling built for the RAD Collaboratory lab — automated ingestion, preprocessing, and visualization of experimental datasets.",
    stack: ["Python", "Pandas", "Plotly", "Airflow"],
    domain: "Research Infrastructure",
    link: "#",
  },
];

export const timeline = [
  {
    year: "2024 – Present",
    role: "Medical AI Researcher",
    org: "Rutgers University",
    description:
      "Developing explainable AI systems for clinical decision support. Focus on uncertainty quantification and clinician-readable model outputs.",
    type: "research",
  },
  {
    year: "2024 – Present",
    role: "IEEE NLP Fellow",
    org: "IEEE",
    description:
      "Selected fellow researching NLP robustness in low-resource medical domains. Work presented at IEEE workshop on clinical NLP.",
    type: "fellowship",
  },
  {
    year: "2023 – 2024",
    role: "Cornell Break Through Tech AI Fellow",
    org: "Cornell Tech",
    description:
      "Intensive AI/ML fellowship at Cornell Tech. Built production ML systems, studied algorithmic fairness, and collaborated with industry partners on applied AI projects.",
    type: "fellowship",
  },
  {
    year: "2023 – Present",
    role: "RAD Collaboratory Researcher",
    org: "RAD Collaboratory",
    description:
      "Research engineer building data pipelines and ML tooling for experimental research workflows. Emphasis on reproducibility and automation.",
    type: "research",
  },
  {
    year: "2023 – Present",
    role: "Honors College Peer Mentor",
    org: "Rutgers Honors College",
    description:
      "Mentoring incoming Honors students on research pathways, academic planning, and navigating early undergraduate research opportunities.",
    type: "leadership",
  },
];

export const learningNotes = [
  {
    date: "Jun 2025",
    title: "Diffusion models as time-series generators",
    excerpt:
      "Score-based models condition well on seasonal priors. Key insight: noise schedule matters more than architecture depth for temporal coherence.",
    tag: "Energy AI",
  },
  {
    date: "May 2025",
    title: "Why SHAP alone isn't enough for clinicians",
    excerpt:
      "Clinicians need explanations that map to clinical reasoning patterns, not feature importances. Investigating counterfactual explanations as a complement.",
    tag: "Medical AI",
  },
  {
    date: "Apr 2025",
    title: "LangGraph for reflection loops in agentic systems",
    excerpt:
      "State machines make agent behavior auditable. Reflection nodes that re-rank retrieved context cut hallucination rate significantly on closed-domain tasks.",
    tag: "Agentic Systems",
  },
];
