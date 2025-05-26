    const questions = {
        "Genetics": [
            "What is the basic unit of heredity?",
            "How many chromosomes do humans have?",
            "What is the difference between DNA and RNA?"
        ],
        "Fertility": [
            "What is the main hormone that triggers ovulation?",
            "How long does the average menstrual cycle last?",
            "What is the role of the fallopian tubes in fertility?"
        ],
        "Cancer": [
            "What is the difference between benign and malignant tumors?",
            "What are the main types of cancer treatment?",
            "How does cancer spread in the body?"
        ],
        "Aging": [
            "What are telomeres and why are they important?",
            "What is the role of free radicals in aging?",
            "How does cellular senescence contribute to aging?"
        ],
        "Artificial Intelligence": [
            "What is the difference between machine learning and deep learning?",
            "How does a neural network work?",
            "What is the role of training data in AI?"
        ],
        "Diagnostics": [
            "What is the difference between MRI and CT scans?",
            "How does an ultrasound work?",
            "What are the advantages of PET scans?"
        ],
        "Medical Devices": [
            "How does a pacemaker regulate heart rhythm?",
            "What is the purpose of a defibrillator?",
            "How do medical implants interact with the body?"
        ],
        "Bioinformatics": [
            "What is sequence alignment in bioinformatics?",
            "How is big data used in genomics?",
            "What is the role of algorithms in DNA analysis?"
        ],
        "Immunology": [
            "What is the difference between T cells and B cells?",
            "How do antibodies work?",
            "What is the role of the immune system in fighting infections?"
        ]
    };

    const answerChoices = {
        "Genetics": [
            ["Gene", "Cell", "Protein"],
            ["23 pairs", "46 pairs", "24 pairs"],
            ["DNA is double-stranded, RNA is single-stranded", "DNA contains uracil, RNA contains thymine", "DNA is found in cytoplasm, RNA in nucleus"]
        ],
        "Fertility": [
            ["Luteinizing Hormone", "Estrogen", "Progesterone"],
            ["28 days", "21 days", "35 days"],
            ["Transport eggs to uterus", "Produce hormones", "Store sperm"]
        ],
        "Cancer": [
            ["Benign is non-cancerous, malignant is cancerous", "Benign spreads, malignant doesn't", "Benign is genetic, malignant is environmental"],
            ["Surgery, radiation, chemotherapy", "Antibiotics, vaccines, surgery", "Diet, exercise, meditation"],
            ["Through blood and lymph systems", "Through nervous system", "Through digestive system"]
        ],
        "Aging": [
            ["Protective caps on chromosomes", "Energy producers in cells", "Protein builders"],
            ["Damage cells and DNA", "Build muscle", "Produce energy"],
            ["Cells stop dividing", "Cells multiply faster", "Cells become immortal"]
        ],
        "Artificial Intelligence": [
            ["ML is subset of AI, deep learning is subset of ML", "ML uses data, deep learning doesn't", "ML is faster than deep learning"],
            ["Through interconnected nodes and layers", "Through single processor", "Through cloud computing"],
            ["To teach the AI patterns", "To store results", "To display graphics"]
        ],
        "Diagnostics": [
            ["MRI uses magnets, CT uses X-rays", "MRI is faster than CT", "MRI is cheaper than CT"],
            ["Using sound waves", "Using radiation", "Using magnetic fields"],
            ["Shows metabolic activity", "Shows bone structure", "Shows blood flow"]
        ],
        "Medical Devices": [
            ["Sends electrical signals", "Pumps blood", "Filters blood"],
            ["Restart heart rhythm", "Stop bleeding", "Lower blood pressure"],
            ["Through biocompatible materials", "Through wireless signals", "Through chemical reactions"]
        ],
        "Bioinformatics": [
            ["Comparing DNA sequences", "Counting cells", "Measuring proteins"],
            ["To identify patterns", "To store patient records", "To display images"],
            ["To find genetic variations", "To count cells", "To measure blood pressure"]
        ],
        "Immunology": [
            ["T cells attack directly, B cells make antibodies", "T cells are larger", "B cells are faster"],
            ["Bind to antigens", "Produce energy", "Transport oxygen"],
            ["Identify and destroy pathogens", "Produce hormones", "Digest food"]
        ]
    };

    const correctAnswers = {
        "Genetics": [
            "Gene",
            "23 pairs",
            "DNA is double-stranded, RNA is single-stranded"
        ],
        "Fertility": [
            "Luteinizing Hormone",
            "28 days",
            "Transport eggs to uterus"
        ],
        "Cancer": [
            "Benign is non-cancerous, malignant is cancerous",
            "Surgery, radiation, chemotherapy",
            "Through blood and lymph systems"
        ],
        "Aging": [
            "Protective caps on chromosomes",
            "Damage cells and DNA",
            "Cells stop dividing"
        ],
        "Artificial Intelligence": [
            "ML is subset of AI, deep learning is subset of ML",
            "Through interconnected nodes and layers",
            "To teach the AI patterns"
        ],
        "Diagnostics": [
            "MRI uses magnets, CT uses X-rays",
            "Using sound waves",
            "Shows metabolic activity"
        ],
        "Medical Devices": [
            "Sends electrical signals",
            "Restart heart rhythm",
            "Through biocompatible materials"
        ],
        "Bioinformatics": [
            "Comparing DNA sequences",
            "To identify patterns",
            "To find genetic variations"
        ],
        "Immunology": [
            "T cells attack directly, B cells make antibodies",
            "Bind to antigens",
            "Identify and destroy pathogens"
        ]
    };

    const moreQuestions = {
        "Genetics": [
            "What is the main focus of epigenetics?",
            "Which technology has made genetic testing more accessible?",
            "What is a key application of genetic engineering in agriculture?"
        ],
        "Fertility": [
            "What is the purpose of fertility preservation techniques?",
            "Which factors can significantly impact male fertility?",
            "What is the main advantage of preimplantation genetic testing (PGT)?"
        ],
        "Cancer": [
            "What is the role of cancer stem cells in treatment resistance?",
            "How do anti-angiogenic therapies work?",
            "What is the significance of the tumor microenvironment?"
        ],
        "Aging": [
            "What role do mitochondria play in the aging process?",
            "How does caloric restriction affect aging?",
            "What is the potential benefit of stem cell therapy in aging?"
        ],
        "Artificial Intelligence": [
            "What is the main application of Natural Language Processing?",
            "How are computer vision systems being used in healthcare?",
            "What is the key principle behind reinforcement learning?"
        ],
        "Diagnostics": [
            "What is the main advantage of point-of-care testing?",
            "How do liquid biopsies differ from traditional biopsies?",
            "What is the role of artificial intelligence in digital pathology?"
        ],
        "Medical Devices": [
            "What is the main benefit of wearable medical devices?",
            "How do brain-computer interfaces help patients?",
            "What is the advantage of nanomedicine devices?"
        ],
        "Bioinformatics": [
            "How has cloud computing impacted bioinformatics?",
            "What is the focus of metagenomics research?",
            "Why is structural bioinformatics important for drug design?"
        ],
        "Immunology": [
            "What is the role of the gut microbiome in immune function?",
            "What happens in autoimmune diseases?",
            "How does mRNA vaccine technology work?"
        ]
    };
    const moreAnswerChoices = {
        "Genetics": [
            [
                "How environmental factors affect gene expression without changing DNA",
                "How genes are inherited from parents",
                "How DNA is replicated in cells",
                "How proteins are synthesized"
            ],
            [
                "Advanced sequencing technologies",
                "Traditional laboratory methods",
                "Manual DNA analysis",
                "Basic genetic screening"
            ],
            [
                "Creating disease-resistant crops",
                "Studying basic plant biology",
                "Analyzing plant DNA structure",
                "Measuring plant growth"
            ]
        ],
        "Fertility": [
            [
                "To help individuals maintain future reproductive options",
                "To increase current fertility rates",
                "To prevent pregnancy",
                "To treat existing infertility"
            ],
            [
                "Sperm quality and lifestyle factors",
                "Only genetic factors",
                "Only environmental factors",
                "Only medical conditions"
            ],
            [
                "Ensuring the health of future offspring",
                "Increasing pregnancy rates",
                "Reducing treatment costs",
                "Shortening treatment time"
            ]
        ],
        "Cancer": [
            [
                "They can self-renew and give rise to different cancer cells",
                "They only affect initial tumor growth",
                "They are easily destroyed by chemotherapy",
                "They only appear in late-stage cancer"
            ],
            [
                "By targeting blood vessel formation",
                "By killing all cancer cells",
                "By preventing cell division",
                "By boosting the immune system"
            ],
            [
                "It influences cancer progression and treatment response",
                "It only affects early-stage tumors",
                "It has no impact on treatment",
                "It only affects benign tumors"
            ]
        ],
        "Aging": [
            [
                "They produce energy and generate reactive oxygen species",
                "They only affect cell division",
                "They only impact muscle function",
                "They only affect brain cells"
            ],
            [
                "It activates cellular repair mechanisms",
                "It only affects weight loss",
                "It only impacts energy levels",
                "It only affects metabolism"
            ],
            [
                "By replenishing aged cells and tissues",
                "By only treating symptoms",
                "By preventing aging",
                "By stopping cell division"
            ]
        ],
        "Artificial Intelligence": [
            [
                "Understanding and generating human language",
                "Only processing numbers",
                "Only storing data",
                "Only displaying information"
            ],
            [
                "Medical imaging and diagnosis",
                "Only patient records",
                "Only scheduling appointments",
                "Only billing systems"
            ],
            [
                "Learning through trial and error",
                "Only following fixed rules",
                "Only processing data",
                "Only storing information"
            ]
        ],
        "Diagnostics": [
            [
                "Providing rapid results at the patient's location",
                "Only reducing costs",
                "Only increasing accuracy",
                "Only saving time"
            ],
            [
                "They are non-invasive and use blood samples",
                "They are more expensive",
                "They are less accurate",
                "They take longer to process"
            ],
            [
                "Automated analysis of tissue samples",
                "Only storing images",
                "Only displaying results",
                "Only sharing data"
            ]
        ],
        "Medical Devices": [
            [
                "Enabling proactive healthcare management",
                "Only reducing costs",
                "Only increasing comfort",
                "Only improving aesthetics"
            ],
            [
                "Translating brain signals into commands",
                "Only monitoring brain activity",
                "Only treating headaches",
                "Only improving sleep"
            ],
            [
                "Targeted drug delivery to specific areas",
                "Only reducing costs",
                "Only increasing comfort",
                "Only improving aesthetics"
            ]
        ],
        "Bioinformatics": [
            [
                "Providing scalable resources for processing genomic data",
                "Only storing data",
                "Only sharing information",
                "Only displaying results"
            ],
            [
                "Studying genetic material from environmental samples",
                "Only analyzing human DNA",
                "Only studying plant DNA",
                "Only examining animal DNA"
            ],
            [
                "Understanding molecular structure for drug development",
                "Only storing protein data",
                "Only analyzing DNA sequences",
                "Only studying cell structure"
            ]
        ],
        "Immunology": [
            [
                "Training the immune system and protecting against pathogens",
                "Only digesting food",
                "Only producing vitamins",
                "Only maintaining weight"
            ],
            [
                "The immune system attacks the body's own tissues",
                "Only foreign pathogens are attacked",
                "Only viruses are targeted",
                "Only bacteria are affected"
            ],
            [
                "Teaching cells to produce specific proteins",
                "Only using live viruses",
                "Only using weakened viruses",
                "Only using dead viruses"
            ]
        ]
    };

    const moreCorrectAnswers = {
        "Genetics": [
            "How environmental factors affect gene expression without changing DNA",
            "Advanced sequencing technologies",
            "Creating disease-resistant crops"
        ],
        "Fertility": [
            "To help individuals maintain future reproductive options",
            "Sperm quality and lifestyle factors",
            "Ensuring the health of future offspring"
        ],
        "Cancer": [
            "They can self-renew and give rise to different cancer cells",
            "By targeting blood vessel formation",
            "It influences cancer progression and treatment response"
        ],
        "Aging": [
            "They produce energy and generate reactive oxygen species",
            "It activates cellular repair mechanisms",
            "By replenishing aged cells and tissues"
        ],
        "Artificial Intelligence": [
            "Understanding and generating human language",
            "Medical imaging and diagnosis",
            "Learning through trial and error"
        ],
        "Diagnostics": [
            "Providing rapid results at the patient's location",
            "They are non-invasive and use blood samples",
            "Automated analysis of tissue samples"
        ],
        "Medical Devices": [
            "Enabling proactive healthcare management",
            "Translating brain signals into commands",
            "Targeted drug delivery to specific areas"
        ],
        "Bioinformatics": [
            "Providing scalable resources for processing genomic data",
            "Studying genetic material from environmental samples",
            "Understanding molecular structure for drug development"
        ],
        "Immunology": [
            "Training the immune system and protecting against pathogens",
            "The immune system attacks the body's own tissues",
            "Teaching cells to produce specific proteins"
        ]
    }


    export { questions, answerChoices, correctAnswers, moreQuestions, moreAnswerChoices, moreCorrectAnswers };

    
