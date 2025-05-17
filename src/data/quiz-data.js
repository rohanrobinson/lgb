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

    export { questions, answerChoices, correctAnswers };

    
