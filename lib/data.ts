export const questions = [
  {
    number: "01",
    question: "How do we build AI systems that clinicians can actually trust?",
    context:
      "Trust isn't a feature you bolt on at the end. It's designed in — through transparency, uncertainty quantification, and feedback loops that keep the human in the loop.",
  },
  {
    number: "02",
    question: "When a model is uncertain, does it know — and does it say so?",
    context:
      "Most deployed ML systems return a confidence score with no epistemic grounding. I'm interested in systems that can distinguish 'I don't know' from 'I'm wrong'.",
  },
  {
    number: "03",
    question: "What does it mean to generate synthetic data that preserves truth?",
    context:
      "For energy grids and clinical systems, synthetic data has to capture distributional structure, temporal dependencies, and edge cases — not just look realistic.",
  },
];

export const atlasNodes = [
  {
    id: "xai",
    label: "Explainable AI",
    x: 30,
    y: 20,
    description: "SHAP-based explanations, saliency maps, counterfactual reasoning for clinical decisions.",
    color: "sage",
  },
  {
    id: "medical",
    label: "Medical AI",
    x: 60,
    y: 12,
    description: "ICU deterioration prediction, EHR analysis, clinician-in-the-loop alert systems.",
    color: "copper",
  },
  {
    id: "uncertainty",
    label: "Uncertainty\nQuantification",
    x: 80,
    y: 38,
    description: "Calibrated confidence, Bayesian approaches, communicating model uncertainty to domain experts.",
    color: "sage",
  },
  {
    id: "nlp",
    label: "Clinical NLP",
    x: 48,
    y: 52,
    description: "Transformer adaptation for medical text, domain shift, class imbalance in clinical notes.",
    color: "sage",
  },
  {
    id: "energy",
    label: "Energy\nForecasting",
    x: 18,
    y: 62,
    description: "Day-ahead load prediction, renewable grid integration, temporal pattern recognition.",
    color: "copper",
  },
  {
    id: "synthetic",
    label: "Synthetic\nTime-Series",
    x: 55,
    y: 78,
    description: "Diffusion-based generation of realistic demand curves for sparse-data grid regimes.",
    color: "sage",
  },
  {
    id: "agentic",
    label: "Agentic\nSystems",
    x: 82,
    y: 68,
    description: "Multi-step LLM agents with reflection loops, tool use, and retrieval-augmented reasoning.",
    color: "copper",
  },
  {
    id: "humanloop",
    label: "Human-in-\nthe-Loop",
    x: 25,
    y: 40,
    description: "Expert-in-the-loop ML pipelines, active learning, feedback-driven model refinement.",
    color: "copper",
  },
];

export const atlasEdges: Array<[string, string]> = [
  ["xai", "medical"],
  ["xai", "humanloop"],
  ["xai", "uncertainty"],
  ["medical", "nlp"],
  ["medical", "humanloop"],
  ["uncertainty", "nlp"],
  ["uncertainty", "agentic"],
  ["nlp", "medical"],
  ["energy", "synthetic"],
  ["energy", "humanloop"],
  ["synthetic", "agentic"],
  ["agentic", "uncertainty"],
];

export const selectedWork = [
  {
    id: "intexr",
    index: "001",
    title: "IntExR",
    subtitle: "Interpretable Explainability for Clinical Risk Models",
    description:
      "A framework for generating clinician-facing explanations of ICU deterioration predictions. Rather than returning a risk score, IntExR surfaces the three most actionable features driving each prediction — with uncertainty bounds — in language tuned to clinical reasoning patterns.",
    tags: ["XAI", "Clinical AI", "SHAP", "Python", "FastAPI"],
    domain: "Medical AI",
    year: "2024–Present",
    highlight: "Reduces alert fatigue by grounding predictions in patient-specific context rather than population-level statistics.",
    aspect: "large",
  },
  {
    id: "energy",
    index: "002",
    title: "Energy System Research",
    subtitle: "Synthetic Demand Curves for Grid Forecasting",
    description:
      "Score-based diffusion models conditioned on temperature, seasonality, and grid topology to generate realistic synthetic electricity demand data. Enables robust day-ahead forecasting in low-data regimes common to emerging renewable installations.",
    tags: ["Diffusion Models", "Time-Series", "PyTorch", "Energy"],
    domain: "Energy AI",
    year: "2024–Present",
    highlight: "~12% MAPE improvement over interpolation baselines in sub-100 sample regimes.",
    aspect: "small",
  },
  {
    id: "sentiment",
    index: "003",
    title: "Market Sentiment Prediction",
    subtitle: "NLP-Driven Signal Extraction from Financial Text",
    description:
      "Fine-tuned financial transformer models on earnings call transcripts and news corpora to extract directional sentiment signals. Applied domain-adaptive pretraining to handle financial jargon and context-dependent polarity.",
    tags: ["NLP", "Transformers", "FinBERT", "Sentiment Analysis"],
    domain: "Applied NLP",
    year: "2023",
    highlight: "9% F1 improvement over baseline via domain-adaptive pretraining on financial text.",
    aspect: "wide",
  },
];

export const researchNotes = [
  {
    date: "June 2025",
    title: "Why calibration matters more than accuracy in clinical AI",
    excerpt:
      "A model can be 90% accurate and still kill someone if its errors cluster in ways clinicians can't predict. Calibration — the alignment between predicted probability and actual outcomes — is the metric that matters.",
    readTime: "4 min",
    tag: "Medical AI",
  },
  {
    date: "May 2025",
    title: "Diffusion models as time-series data augmenters",
    excerpt:
      "The key insight: noise schedules designed for images don't transfer to temporal data. Temporal coherence requires a different inductive bias — one that respects autocorrelation structure.",
    readTime: "6 min",
    tag: "Energy AI",
  },
  {
    date: "April 2025",
    title: "Reflection loops are what make agents useful, not just capable",
    excerpt:
      "An agent that retrieves, generates, and submits is a sophisticated autocomplete. An agent that retrieves, critiques, revises, and only then responds — that's the architecture worth building.",
    readTime: "5 min",
    tag: "Agentic Systems",
  },
];

export const currentFocus = [
  {
    label: "Reading",
    value: "Thinking Fast and Slow · Uncertainty in Deep Learning (Gal) · papers on conformal prediction",
  },
  {
    label: "Building",
    value: "An agentic research assistant with structured reflection loops and citation verification",
  },
  {
    label: "Exploring",
    value: "How explanation quality — not just prediction quality — affects clinician decision-making",
  },
  {
    label: "Asking",
    value: "Can a language model serve as a reliable uncertainty communicator for domain experts who aren't ML practitioners?",
  },
];

export const beyondItems = [
  {
    label: "Mentoring",
    text: "I mentor first-year Rutgers Honors students on breaking into research. The first step is always the hardest — and the most under-supported.",
  },
  {
    label: "Conviction",
    text: "Explainability is not a feature. It's a design constraint that should be present from the first architecture decision.",
  },
  {
    label: "Learning loop",
    text: "Paper → minimal implementation → find where it breaks → understand why. Reading alone doesn't build understanding.",
  },
  {
    label: "On hype",
    text: "The models that will matter in high-stakes domains are the ones that know what they don't know — and say so clearly.",
  },
];
