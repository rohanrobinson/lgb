
let paperTitleToId = {
    "Foundation Generalist Medical AI Models": 1, 
    "Large language models encode clinical knowledge": 2,
    "The genomic landscape of pediatric acute lymphoblastic leukemia": 3, 
    "Directed Evolution: Bringing New Chemistry to Life": 4,
    "Exploring tRNAs and their modifications and crosstalk using Nano-tRNAseq": 5, 
    "Geroscience: Linking Aging to Chronic Disease": 6,
    "Global Healthspan Summit 2023: closing the gap between healthspan and lifespan": 7,
    "Estimating the Lifetime Medical Cost Burden of an Allogeneic Hematopoietic Cell Transplantation Patient": 8, 
    "Towards AI-driven longevity research: An overview": 9, 
    "Preclinical evaluation of proteolytic targeting of LCK as a therapeutic approach in T cell acute lymphoblastic leukemia": 10, 
    "Cradle - Milestone White paper 1": 11, 
    "Digital twins for health: a scoping review": 12, 
    "Cancer cells impair monocyte-mediated T cell stimulation to evade immunity": 13, 
    "ReXplain: Translating Radiology into Patient-Friendly Video Reports": 14,
    "Physical and biological aspects of renal vitrification": 15,
    "Mapping the effectiveness and risks of GLP-1 receptor agonists": 16
}

let paperIdToQA = {
    1: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    2: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    3: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    4: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    5: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    6: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    7: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    8: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    9: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },  
    10: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    11: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    12: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    13: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    14: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    15: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    },
    16: {
        "questions": ["question 1", "question 2", "question 3", "question 4"],
        "answer-choices": [["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"], ["A", "B", "C", "D"]],
        "correct-answer": ["A", "B", "C", "D"]
    }
   
};

function getId(paperTitle) {

    if (paperTitle in paperTitleToId) {
        return paperTitleToId[paperTitle];
    }
    else {
        return "this is an error in trying to get the paper id";
    }
}

function getQA_Content(id) {
    if (id in paperIdToQA) {
        return paperIdToQA[id];
    }

    else {
        return "This is an error in trying to get the questions/answers with this paper";
    }
}

export function getQuestionsAndAnswers(paperTitle) {

    var id = getId(paperTitle);

    // use Id to get a set of Questions and Answers
    var QA_content = getQA_Content(id);

    return QA_content; 
}



