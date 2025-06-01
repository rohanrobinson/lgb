const passages = {
    "Genetics": `Genetics is the study of genes, genetic variation, and heredity in living organisms. Genes are segments of DNA that contain instructions for building proteins, which are essential for the structure and function of our cells. Each gene is like a recipe that tells our cells how to make specific proteins. These proteins determine our traits, from eye color to how our bodies process food.

    The human genome contains about 20,000-25,000 genes, and each person has two copies of most genes - one inherited from each parent. This is why we often share traits with our parents. However, genes can have different versions, called alleles, which is why siblings can look different from each other even though they share the same parents.

    Modern genetics has revolutionized medicine, allowing us to understand and treat genetic disorders, develop personalized medicine, and even edit genes to correct mutations. The field continues to evolve with new technologies like CRISPR, which allows scientists to precisely edit DNA sequences.`,

    "Fertility": `Fertility is the natural capability to produce offspring. In humans, fertility involves a complex interplay of hormones, reproductive organs, and timing. The menstrual cycle, which typically lasts 28 days, is controlled by several hormones including estrogen, progesterone, and luteinizing hormone (LH).

    During ovulation, which usually occurs around day 14 of the cycle, a mature egg is released from the ovary and travels through the fallopian tube. This is the most fertile period in a woman's cycle. The egg can survive for about 24 hours after ovulation, while sperm can live in the female reproductive tract for up to 5 days.

    Various factors can affect fertility, including age, lifestyle choices, medical conditions, and environmental factors. Understanding these factors is crucial for family planning and reproductive health. Modern medicine offers various treatments for fertility issues, from hormone therapy to assisted reproductive technologies like in vitro fertilization (IVF).`,

    "Cancer": `Cancer research is a dynamic field focused on understanding how cancer develops, spreads, and can be treated. Cancer occurs when cells in the body begin to grow and divide uncontrollably, forming tumors. These cells can spread to other parts of the body through a process called metastasis.

    There are two main types of tumors: benign and malignant. Benign tumors are non-cancerous and don't spread to other parts of the body. Malignant tumors are cancerous and can invade nearby tissues and spread to other parts of the body through the blood and lymph systems.

    Modern cancer treatment typically involves a combination of approaches, including surgery, radiation therapy, and chemotherapy. Recent advances in immunotherapy and targeted therapy have revolutionized cancer treatment by helping the body's immune system fight cancer or targeting specific molecules involved in cancer growth.`,

    "Aging": `Aging research explores the biological processes that lead to the gradual decline in physical and mental functions as we grow older. One key area of study is telomeres, which are protective caps at the ends of our chromosomes. Each time a cell divides, telomeres get shorter, and when they become too short, the cell can no longer divide and becomes senescent.

    Free radicals, unstable molecules that can damage cells, are another focus of aging research. These molecules are produced naturally in the body and can cause oxidative stress, leading to cellular damage. The body has natural defense mechanisms against free radicals, but these become less effective with age.

    Cellular senescence, the process where cells stop dividing, is a natural part of aging but can contribute to age-related diseases. Understanding these processes helps researchers develop interventions that might slow down or prevent age-related decline.`,

    "Artificial Intelligence": `Artificial Intelligence (AI) is transforming how we live and work. At its core, AI involves creating computer systems that can perform tasks typically requiring human intelligence. Machine learning, a subset of AI, enables computers to learn from data without being explicitly programmed.

    Deep learning, a more advanced form of machine learning, uses neural networks inspired by the human brain. These networks consist of interconnected nodes that process information in layers, allowing the system to learn complex patterns. The more data these systems are trained on, the better they become at recognizing patterns and making predictions.

    Training data is crucial for AI systems. It's like teaching a child - the more examples they see, the better they learn. This is why companies collect vast amounts of data to train their AI systems. The quality and diversity of this data directly impact how well the AI system performs.`,

    "Diagnostics": `Medical diagnostics is the process of identifying diseases and conditions through various imaging and testing methods. MRI (Magnetic Resonance Imaging) and CT (Computed Tomography) scans are two of the most common diagnostic tools. MRI uses powerful magnets and radio waves to create detailed images of the body's internal structures, while CT scans use X-rays to create cross-sectional images.

    Ultrasound imaging uses high-frequency sound waves to create images of internal organs. It's particularly useful for examining soft tissues and is commonly used in pregnancy monitoring. The sound waves bounce off tissues and create echoes that are converted into images.

    PET (Positron Emission Tomography) scans are valuable for detecting metabolic activity in the body. They're particularly useful in cancer diagnosis and treatment planning, as they can show how tissues are functioning rather than just their structure.`,

    "Medical Devices": `Medical devices are instruments, machines, or implants used to diagnose, prevent, or treat medical conditions. Pacemakers, for example, are small devices implanted in the chest to help control abnormal heart rhythms. They send electrical signals to the heart to maintain a regular heartbeat.

    Defibrillators are another crucial medical device that can save lives during cardiac emergencies. They deliver an electric shock to the heart to restore normal rhythm during life-threatening arrhythmias. Modern defibrillators can be implanted in the body or used externally by emergency responders.

    Medical implants interact with the body through biocompatible materials that are designed to work harmoniously with human tissue. These materials must be carefully selected to avoid rejection and ensure long-term functionality. The field of medical devices continues to evolve with advances in materials science and miniaturization.`,

    "Bioinformatics": `Bioinformatics combines biology, computer science, and information technology to analyze and interpret biological data. Sequence alignment is a fundamental concept in bioinformatics, where researchers compare DNA or protein sequences to identify similarities and differences. This helps in understanding evolutionary relationships and identifying functional elements in genomes.

    Big data plays a crucial role in genomics, where researchers analyze massive amounts of genetic information. This data can reveal patterns and associations that would be impossible to detect manually. Modern sequencing technologies can generate terabytes of data from a single experiment.

    Algorithms are essential tools in DNA analysis, helping researchers identify genes, predict protein structures, and understand genetic variations. These computational methods allow scientists to process and analyze biological data much faster than traditional laboratory methods.`,

    "Immunology": `Immunology is the study of the immune system, our body's defense against infections and diseases. T cells and B cells are two main types of white blood cells that play crucial roles in our immune response. T cells directly attack infected cells and help coordinate the immune response, while B cells produce antibodies that target specific pathogens.

    Antibodies are proteins that recognize and bind to specific molecules on pathogens, called antigens. This binding can neutralize the pathogen directly or mark it for destruction by other immune cells. The immune system can produce millions of different antibodies, each targeting a specific antigen.

    The immune system's role in fighting infections involves a complex network of cells and molecules working together. When a pathogen enters the body, the immune system must quickly identify it, mount an appropriate response, and remember it for future encounters. This memory is the basis of vaccination and long-term immunity.`
};

const morePassages = {
    "Genetics": `Genetic engineering and biotechnology have opened new frontiers in genetic research. Scientists can now manipulate DNA sequences to create genetically modified organisms (GMOs) that can produce valuable proteins, resist diseases, or grow in challenging environments. This technology has applications in agriculture, medicine, and industrial processes.

    Epigenetics, another fascinating aspect of genetics, studies how environmental factors can affect gene expression without changing the DNA sequence. These modifications can be passed down through generations and explain why identical twins can develop different traits despite having the same DNA.

    Genetic testing has become increasingly accessible, allowing individuals to learn about their ancestry, potential health risks, and carrier status for genetic conditions. This information can guide medical decisions and help people understand their genetic heritage. The field continues to advance with new technologies that make genetic analysis faster, more accurate, and more affordable.`,

    "Fertility": `Fertility preservation has become an important aspect of reproductive medicine, especially for individuals facing medical treatments that might affect their future fertility. Techniques like egg freezing, sperm banking, and ovarian tissue preservation offer hope for future family planning.

    Male fertility factors are equally important in conception. Sperm quality, count, and motility can significantly impact fertility. Lifestyle factors such as diet, exercise, and stress management can influence male reproductive health. Environmental factors like exposure to certain chemicals or radiation can also affect sperm production and quality.

    Assisted reproductive technologies (ART) have evolved significantly, with new methods like intracytoplasmic sperm injection (ICSI) and preimplantation genetic testing (PGT) improving success rates. These technologies help couples overcome various fertility challenges while ensuring the health of future offspring.`,

    "Cancer": `Cancer prevention and early detection strategies have become increasingly sophisticated. Regular screenings, genetic risk assessment, and lifestyle modifications can significantly reduce cancer risk. Vaccines like HPV vaccine have proven effective in preventing certain types of cancer.

    Cancer stem cells are a specialized population of cells that can self-renew and give rise to different types of cancer cells. Understanding these cells is crucial for developing more effective treatments, as they may be responsible for cancer recurrence and resistance to therapy.

    The tumor microenvironment, including surrounding blood vessels, immune cells, and extracellular matrix, plays a crucial role in cancer progression. New treatments targeting this environment, such as anti-angiogenic therapy and immune checkpoint inhibitors, have shown promising results in various cancer types.`,

    "Aging": `The role of mitochondria in aging has become a major focus of research. These cellular powerhouses produce energy but also generate reactive oxygen species that can damage cells. As we age, mitochondrial function declines, contributing to various age-related conditions.

    Caloric restriction and intermittent fasting have shown promising results in extending lifespan in various organisms. These dietary approaches appear to activate cellular repair mechanisms and improve metabolic health, potentially slowing down the aging process.

    Stem cell therapy and regenerative medicine offer new approaches to combat aging. By replenishing or rejuvenating aged cells and tissues, these therapies could potentially reverse some aspects of age-related decline and improve quality of life in older adults.`,

    "Artificial Intelligence": `Natural Language Processing (NLP) has revolutionized how computers understand and generate human language. From chatbots to translation services, NLP enables machines to process and respond to text and speech in increasingly sophisticated ways.

    Computer vision systems can now identify objects, recognize faces, and interpret complex scenes with remarkable accuracy. These systems are being used in autonomous vehicles, medical imaging, and security systems, transforming various industries.

    Reinforcement learning, where AI systems learn through trial and error, has achieved remarkable success in complex tasks like game playing and robotics. This approach mimics how humans learn from experience and has led to breakthroughs in developing more adaptable and intelligent systems.`,

    "Diagnostics": `Point-of-care testing has revolutionized diagnostic medicine by bringing testing capabilities directly to patients. These portable devices can provide rapid results for various conditions, from blood glucose levels to infectious diseases, enabling faster treatment decisions.

    Liquid biopsies represent a breakthrough in cancer diagnostics, allowing doctors to detect cancer and monitor treatment response through simple blood tests. This non-invasive approach can identify circulating tumor DNA and other biomarkers, offering a less painful alternative to traditional tissue biopsies.

    Digital pathology combines traditional microscopy with digital imaging and artificial intelligence. This technology enables remote diagnosis, automated analysis of tissue samples, and more accurate detection of abnormalities in medical images.`,

    "Medical Devices": `Wearable medical devices have transformed patient monitoring and healthcare delivery. Smart watches and other wearables can track vital signs, detect falls, and monitor chronic conditions, enabling proactive healthcare management.

    Brain-computer interfaces represent a cutting-edge development in medical devices. These systems can translate brain signals into commands, helping patients with paralysis or neurological disorders regain mobility and communication abilities.

    Nanomedicine devices, operating at the molecular level, offer new possibilities for targeted drug delivery and precise medical interventions. These microscopic devices can navigate through the body to deliver treatments directly to affected areas, minimizing side effects.`,

    "Bioinformatics": `Cloud computing has revolutionized bioinformatics by providing scalable resources for processing massive genomic datasets. This technology enables researchers to collaborate globally and access powerful computing resources without maintaining expensive infrastructure.

    Metagenomics, the study of genetic material from environmental samples, has opened new frontiers in understanding microbial communities. This field helps us understand the human microbiome and its role in health and disease.

    Structural bioinformatics focuses on predicting and analyzing the three-dimensional structures of biological molecules. This knowledge is crucial for drug design and understanding protein function, as the structure of a molecule often determines its biological activity.`,

    "Immunology": `The gut microbiome plays a crucial role in immune system development and function. The trillions of microorganisms living in our digestive tract help train our immune system and protect against harmful pathogens.

    Autoimmune diseases occur when the immune system mistakenly attacks the body's own tissues. Understanding the mechanisms behind these conditions, from rheumatoid arthritis to multiple sclerosis, is crucial for developing better treatments.

    Vaccine development has entered a new era with mRNA technology, as demonstrated by the rapid development of COVID-19 vaccines. This approach uses genetic instructions to teach cells to produce specific proteins, triggering an immune response without using live or weakened viruses.`
}

const questions = {
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

const answerChoices = {
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

const correctAnswers = {
    "Genetics": [0, 0, 0],
    "Fertility": [0, 0, 0],
    "Cancer": [0, 0, 0],
    "Aging": [0, 0, 0],
    "Artificial Intelligence": [0, 0, 0],
    "Diagnostics": [0, 0, 0],
    "Medical Devices": [0, 0, 0],
    "Bioinformatics": [0, 0, 0],
    "Immunology": [0, 0, 0]
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
};

export default passages;
export { morePassages, questions, answerChoices, correctAnswers, moreCorrectAnswers };

