export interface Company {
  id: string;
  name: string;
  sector: string;
  tagline: string;
  description: string;
  ceoName: string;
  location: string;
  founded: number;
  focus: string;
  funding?: string;
  website?: string;
}

export const sectors = [
  "Oncology",
  "Gene Therapy",
  "Genomics & CRISPR",
  "Diagnostics",
  "Medical Devices",
  "Immunotherapy",
  "Drug Discovery",
  "Bioinformatics & AI",
  "Fertility",
];

export const companies: Company[] = [
  // Oncology
  {
    id: "genentech",
    name: "Genentech",
    sector: "Oncology",
    tagline: "Pioneering the use of biotechnology to develop cancer medicines.",
    description:
      "Genentech is a founding member of the biotechnology industry and a member of the Roche Group. The company has pioneered cancer immunotherapy and targeted therapies, producing landmark drugs like Herceptin and Avastin that transformed how solid tumors are treated.",
    ceoName: "Alexander Hardy",
    location: "South San Francisco, CA",
    founded: 1976,
    focus: "Oncology, immunology, and neuroscience",
    website: "https://www.gene.com",
  },
  {
    id: "merck",
    name: "Merck",
    sector: "Oncology",
    tagline: "Makers of Keytruda, the world's leading cancer immunotherapy.",
    description:
      "Merck's PD-1 inhibitor Keytruda (pembrolizumab) revolutionized oncology and is now approved across more than 30 cancer indications. The company continues to invest heavily in combination immuno-oncology strategies and next-generation checkpoint inhibitors.",
    ceoName: "Robert Davis",
    location: "Rahway, NJ",
    founded: 1891,
    focus: "Immuno-oncology and precision cancer medicine",
    website: "https://www.merck.com",
  },
  {
    id: "bristol-myers-squibb",
    name: "Bristol Myers Squibb",
    sector: "Oncology",
    tagline: "Discovering, developing, and delivering transformative medicines.",
    description:
      "BMS brought Opdivo (nivolumab) and Yervoy (ipilimumab) to market, establishing combination checkpoint blockade as a cornerstone of cancer treatment. Their portfolio spans hematologic malignancies and solid tumors across multiple lines of therapy.",
    ceoName: "Christopher Boerner",
    location: "Princeton, NJ",
    founded: 1989,
    focus: "Immuno-oncology, hematology, and cardiovascular",
    website: "https://www.bms.com",
  },

  // Gene Therapy
  {
    id: "spark-therapeutics",
    name: "Spark Therapeutics",
    sector: "Gene Therapy",
    tagline: "Challenging the inevitability of genetic disease.",
    description:
      "Spark Therapeutics developed Luxturna, the first directly administered in vivo gene therapy approved in the US, restoring vision in patients with a rare inherited retinal disease. Now a Roche subsidiary, Spark continues to develop AAV-based therapies for hemophilia and neurological disorders.",
    ceoName: "Joseph La Barge",
    location: "Philadelphia, PA",
    founded: 2013,
    focus: "AAV gene therapies for inherited diseases",
    website: "https://sparktx.com",
  },
  {
    id: "bluebird-bio",
    name: "bluebird bio",
    sector: "Gene Therapy",
    tagline: "Pursuing potentially curative gene therapies for severe diseases.",
    description:
      "bluebird bio focuses on lentiviral vector-based gene therapies for serious genetic diseases including sickle cell disease, beta-thalassemia, and cerebral adrenoleukodystrophy. Their Zynteglo and Lyfgenia therapies represent some of the most advanced gene therapy approvals to date.",
    ceoName: "Andrew Obenshain",
    location: "Cambridge, MA",
    founded: 1992,
    focus: "Lentiviral gene therapy for hemoglobinopathies and rare disease",
    website: "https://www.bluebirdbio.com",
  },
  {
    id: "regenxbio",
    name: "REGENXBIO",
    sector: "Gene Therapy",
    tagline: "Unlocking the full potential of gene therapy with NAV Technology.",
    description:
      "REGENXBIO's proprietary NAV Technology Platform leverages adeno-associated virus (AAV) vectors to deliver potentially curative genetic medicines. The company is advancing programs across ophthalmology, neurology, and metabolic diseases, and licenses its technology widely across the industry.",
    ceoName: "Kenneth Mills",
    location: "Rockville, MD",
    founded: 2008,
    focus: "AAV gene therapy platform and licensing",
    website: "https://regenxbio.com",
  },

  // Genomics & CRISPR
  {
    id: "illumina",
    name: "Illumina",
    sector: "Genomics & CRISPR",
    tagline: "Sequencing and array-based solutions for genetic analysis.",
    description:
      "Illumina dominates the DNA sequencing market, with its short-read sequencing platforms powering the vast majority of genomic research and clinical sequencing worldwide. The company's instruments and reagents underpin everything from cancer genomics to population-scale studies.",
    ceoName: "Jacob Thaysen",
    location: "San Diego, CA",
    founded: 1998,
    focus: "Next-generation sequencing instruments and consumables",
    website: "https://www.illumina.com",
  },
  {
    id: "editas-medicine",
    name: "Editas Medicine",
    sector: "Genomics & CRISPR",
    tagline: "Translating CRISPR genome editing into transformative medicines.",
    description:
      "Editas Medicine is a clinical-stage company developing CRISPR-based genome editing medicines. Founded by pioneers of the CRISPR field, the company is focused on ocular diseases and oncology, with an in vivo editing program targeting Leber congenital amaurosis 10.",
    ceoName: "Gilmore O'Neill",
    location: "Cambridge, MA",
    founded: 2013,
    focus: "In vivo and ex vivo CRISPR genome editing",
    website: "https://www.editasmedicine.com",
  },
  {
    id: "beam-therapeutics",
    name: "Beam Therapeutics",
    sector: "Genomics & CRISPR",
    tagline: "Precise base editing to create a new class of medicines.",
    description:
      "Beam Therapeutics pioneered base editing technology, which enables precise single-letter changes to DNA without creating double-strand breaks. The company is advancing programs in hematology and liver diseases, aiming to correct disease-causing mutations more safely than traditional CRISPR cutting approaches.",
    ceoName: "John Evans",
    location: "Cambridge, MA",
    founded: 2017,
    focus: "Base editing for hematology and liver disease",
    funding: "Publicly traded (BEAM)",
    website: "https://www.beamtx.com",
  },

  // Diagnostics
  {
    id: "guardant-health",
    name: "Guardant Health",
    sector: "Diagnostics",
    tagline: "Conquering cancer with data.",
    description:
      "Guardant Health develops liquid biopsy tests that detect cancer DNA circulating in the blood. Their Guardant360 test guides treatment decisions in late-stage cancer, while Shield is their FDA-authorized blood test for colorectal cancer screening — the first of its kind.",
    ceoName: "Helmy Eltoukhy",
    location: "Redwood City, CA",
    founded: 2012,
    focus: "Liquid biopsy and cell-free DNA diagnostics",
    website: "https://guardanthealth.com",
  },
  {
    id: "natera",
    name: "Natera",
    sector: "Diagnostics",
    tagline: "Transforming disease management through genetic testing.",
    description:
      "Natera's cell-free DNA testing platform spans prenatal screening (Panorama), oncology (Signatera for minimal residual disease monitoring), and organ health (Prospera for transplant rejection). Their personalized molecular residual disease tests are reshaping how oncologists monitor treatment response.",
    ceoName: "Steve Chapman",
    location: "Austin, TX",
    founded: 2004,
    focus: "Cell-free DNA testing for prenatal, oncology, and organ health",
    website: "https://www.natera.com",
  },
  {
    id: "exact-sciences",
    name: "Exact Sciences",
    sector: "Diagnostics",
    tagline: "Helping people get the most out of life.",
    description:
      "Exact Sciences developed Cologuard, the leading non-invasive colorectal cancer screening test, which detects altered DNA and blood in stool. The company also markets Oncotype DX, a genomic test that guides chemotherapy decisions in early-stage breast cancer.",
    ceoName: "Kevin Conroy",
    location: "Madison, WI",
    founded: 1995,
    focus: "Cancer screening and detection",
    website: "https://www.exactsciences.com",
  },

  // Medical Devices
  {
    id: "intuitive-surgical",
    name: "Intuitive Surgical",
    sector: "Medical Devices",
    tagline: "Pioneering minimally invasive care through robotic surgery.",
    description:
      "Intuitive Surgical's da Vinci Surgical System is the world's leading robotic-assisted surgery platform, used in millions of procedures annually across urology, gynecology, thoracic, and colorectal surgery. The company is expanding into single-port surgery and flexible robotics for endoluminal procedures.",
    ceoName: "Gary Guthart",
    location: "Sunnyvale, CA",
    founded: 1995,
    focus: "Robotic-assisted minimally invasive surgery",
    website: "https://www.intuitive.com",
  },
  {
    id: "medtronic",
    name: "Medtronic",
    sector: "Medical Devices",
    tagline: "Engineering the extraordinary.",
    description:
      "Medtronic is the world's largest standalone medical device company, with products ranging from cardiac rhythm management and neuromodulation to spinal implants and insulin pumps. They invented the first wearable external cardiac pacemaker and continue to lead in implantable device innovation.",
    ceoName: "Geoff Martha",
    location: "Dublin, Ireland (operations: Fridley, MN)",
    founded: 1949,
    focus: "Cardiac, neuro, diabetes, and surgical technologies",
    website: "https://www.medtronic.com",
  },
  {
    id: "boston-scientific",
    name: "Boston Scientific",
    sector: "Medical Devices",
    tagline: "Advancing science for life.",
    description:
      "Boston Scientific develops minimally invasive medical devices for interventional cardiology, electrophysiology, endoscopy, urology, and neuromodulation. The company's WATCHMAN device for stroke prevention in atrial fibrillation is one of the most commercially successful structural heart therapies.",
    ceoName: "Michael Mahoney",
    location: "Marlborough, MA",
    founded: 1979,
    focus: "Interventional cardiology, electrophysiology, and endoscopy",
    website: "https://www.bostonscientific.com",
  },

  // Immunotherapy
  {
    id: "moderna",
    name: "Moderna",
    sector: "Immunotherapy",
    tagline: "Delivering on the promise of mRNA science to create a new generation of medicines.",
    description:
      "Moderna's mRNA platform was validated at scale by its COVID-19 vaccine and is now being applied to cancer vaccines, respiratory diseases, rare diseases, and HIV. Their individualized neoantigen therapy (INT) with Merck represents one of the most watched mRNA oncology programs in development.",
    ceoName: "Stéphane Bancel",
    location: "Cambridge, MA",
    founded: 2010,
    focus: "mRNA therapeutics and vaccines",
    website: "https://www.modernatx.com",
  },
  {
    id: "regeneron",
    name: "Regeneron",
    sector: "Immunotherapy",
    tagline: "Science to medicine, medicine to patients.",
    description:
      "Regeneron's antibody discovery platform has produced Dupixent (dupilumab), the world's best-selling biological drug, used for atopic dermatitis, asthma, and other inflammatory conditions. Their bispecific antibody and VelociSuite technologies are fueling a robust immuno-oncology pipeline.",
    ceoName: "Leonard Schleifer",
    location: "Tarrytown, NY",
    founded: 1988,
    focus: "Antibody discovery for inflammation and oncology",
    website: "https://www.regeneron.com",
  },
  {
    id: "iovance-biotherapeutics",
    name: "Iovance Biotherapeutics",
    sector: "Immunotherapy",
    tagline: "Tumor infiltrating lymphocyte therapy for solid tumors.",
    description:
      "Iovance Biotherapeutics develops tumor infiltrating lymphocyte (TIL) cell therapies, harvesting T cells from a patient's own tumor and expanding them to fight cancer. Their Amtagvi (lifileucel) became the first FDA-approved TIL therapy, for metastatic melanoma.",
    ceoName: "Frederick Vogt",
    location: "San Carlos, CA",
    founded: 2012,
    focus: "TIL cell therapy for solid tumors",
    website: "https://www.iovance.com",
  },

  // Drug Discovery
  {
    id: "recursion-pharmaceuticals",
    name: "Recursion Pharmaceuticals",
    sector: "Drug Discovery",
    tagline: "Decoding biology to radically improve lives.",
    description:
      "Recursion combines high-throughput cellular imaging, machine learning, and massive biological datasets to map how perturbations affect cells. Their platform generates terabytes of imaging data weekly, enabling them to identify novel drug candidates and repurpose existing compounds at unprecedented scale.",
    ceoName: "Chris Gibson",
    location: "Salt Lake City, UT",
    founded: 2013,
    focus: "AI-driven drug discovery using cellular phenomics",
    website: "https://www.recursion.com",
  },
  {
    id: "schrodinger",
    name: "Schrödinger",
    sector: "Drug Discovery",
    tagline: "Transforming the way therapeutics and materials are discovered.",
    description:
      "Schrödinger's physics-based computational platform predicts how molecules will behave in the body with high accuracy, dramatically reducing the time and cost of early-stage drug discovery. The company partners with most major pharmaceutical companies and also runs its own internal drug pipeline.",
    ceoName: "Ramy Farid",
    location: "New York, NY",
    founded: 1990,
    focus: "Computational chemistry and physics-based drug design",
    website: "https://www.schrodinger.com",
  },
  {
    id: "exscientia",
    name: "Exscientia",
    sector: "Drug Discovery",
    tagline: "Putting AI at the heart of drug design.",
    description:
      "Exscientia was the first company to advance an AI-designed drug molecule into clinical trials. Their Centaur Chemist platform designs optimized small molecules for novel targets, dramatically compressing the preclinical timeline and reducing the number of compounds synthesized before identifying a clinical candidate.",
    ceoName: "Andrew Hopkins",
    location: "Oxford, UK",
    founded: 2012,
    focus: "AI-first small molecule drug design",
    website: "https://www.exscientia.ai",
  },

  // Bioinformatics & AI
  {
    id: "tempus",
    name: "Tempus",
    sector: "Bioinformatics & AI",
    tagline: "Making precision medicine a reality.",
    description:
      "Tempus has built one of the world's largest libraries of clinical and molecular data, connecting genomic sequencing with de-identified patient records to generate insights for oncology and other diseases. Their AI models help physicians identify optimal treatments for individual patients and accelerate clinical trial matching.",
    ceoName: "Eric Lefkofsky",
    location: "Chicago, IL",
    founded: 2015,
    focus: "AI-powered precision medicine and genomic data analytics",
    website: "https://www.tempus.com",
  },
  {
    id: "flatiron-health",
    name: "Flatiron Health",
    sector: "Bioinformatics & AI",
    tagline: "Learning from the experience of every cancer patient.",
    description:
      "Flatiron Health's oncology-specific EHR platform and real-world evidence datasets are used by cancer centers, pharma companies, and regulators to understand how treatments perform in real-world populations. As a Roche company, Flatiron data has supported multiple FDA submissions.",
    ceoName: "Amy Abernethy",
    location: "New York, NY",
    founded: 2012,
    focus: "Oncology real-world data and AI-driven clinical insights",
    website: "https://flatiron.com",
  },
  {
    id: "veeva-systems",
    name: "Veeva Systems",
    sector: "Bioinformatics & AI",
    tagline: "Cloud software for the global life sciences industry.",
    description:
      "Veeva Systems provides cloud-based software for clinical data management, regulatory submissions, quality management, and commercial operations across the life sciences industry. Their Veeva Vault Clinical Suite is the leading platform for managing clinical trial data and documents.",
    ceoName: "Peter Gassner",
    location: "Pleasanton, CA",
    founded: 2007,
    focus: "Cloud software for clinical, regulatory, and commercial life sciences",
    website: "https://www.veeva.com",
  },

  // Fertility
  {
    id: "progyny",
    name: "Progyny",
    sector: "Fertility",
    tagline: "Transforming the family-building experience.",
    description:
      "Progyny is a leading fertility benefits management company that partners with employers to offer comprehensive fertility coverage. Their Smart Cycle benefit bundles IVF, egg freezing, and genetic testing in evidence-based packages, improving success rates while controlling costs.",
    ceoName: "Pete Anevski",
    location: "New York, NY",
    founded: 2008,
    focus: "Employer fertility benefits and care management",
    website: "https://progyny.com",
  },
  {
    id: "cooper-surgical",
    name: "CooperSurgical",
    sector: "Fertility",
    tagline: "Advancing women's health and fertility.",
    description:
      "CooperSurgical is a leading provider of products and services for the IVF laboratory, offering cryostorage devices, culture media, genetic testing services, and lab equipment. Their acquisition of TMRW Life Sciences brought intelligent cryostorage technology that tracks embryos with barcodes and AI.",
    ceoName: "Holly Sheffield",
    location: "Trumbull, CT",
    founded: 1990,
    focus: "IVF laboratory products and women's health",
    website: "https://www.coopersurgical.com",
  },
  {
    id: "genomic-prediction",
    name: "Genomic Prediction",
    sector: "Fertility",
    tagline: "Preimplantation genetic testing for polygenic conditions.",
    description:
      "Genomic Prediction developed LifeView, the first preimplantation genetic test using polygenic risk scores to identify embryos at risk for complex conditions including Type 1 diabetes, heart disease, and low birth weight. Their technology brings population genomics into the IVF laboratory.",
    ceoName: "Laurent Tellier",
    location: "North Brunswick, NJ",
    founded: 2017,
    focus: "Polygenic preimplantation genetic testing",
    website: "https://genomicprediction.com",
  },
];
