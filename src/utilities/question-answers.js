
let paperTitleToId = {
    "CRISPR editing in the lung with novel lipids": 1, 
    "Foundation Generalist Medical AI Models": 2, 
    "Large language models encode clinical knowledge": 3,
    "An End-To-End Pipeline for Fully Automatic Morphological Quantification of Mouse Brain Structures From MRI Imagery": 4, 
    "The genomic landscape of pediatric acute lymphoblastic leukemia": 5, 
    "Directed Evolution: Bringing New Chemistry to Life": 6,
    "Increasing the success potential of promising biotech companies this is an error": 7, 
    "Exploring tRNAs and their modifications and crosstalk using Nano-tRNAseq": 8, 
    "Geroscience: Linking Aging to Chronic Disease": 9,
    "Global Healthspan Summit 2023: closing the gap between healthspan and lifespan": 10,
    "Estimating the Lifetime Medical Cost Burden of an Allogeneic Hematopoietic Cell Transplantation Patient": 11, 
    "Towards AI-driven longevity research: An overview": 12, 
    "Preclinical evaluation of proteolytic targeting of LCK as a therapeutic approach in T cell acute lymphoblastic leukemia": 13, 
    "Cradle - Milestone White paper 1": 14, 
    "Digital twins for health: a scoping review": 15, 
    "Cancer cells impair monocyte-mediated T cell stimulation to evade immunity": 16, 
    "ReXplain: Translating Radiology into Patient-Friendly Video Reports": 17,
    "Physical and biological aspects of renal vitrification": 18

}

let paperIdToQA = {
    1: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    2: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    3: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    4: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    5: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    6: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    7: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    8: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    9: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    10: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    11: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    12: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    13: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    14: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    15: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    16: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    17: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
    18: [
        ["question 1", "question 2", "question 3", "question 4"],
        ["A", "B", "C", "D"],
        ["correct answer"],
    ],
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
        return "this is an error in trying to get the questions/answers with this paper";
    }
}

export function getQuestionsAndAnswers(paperTitle) {

    var id = getId(paperTitle);

    // use Id to get a set of Questions and Answers
    var QA_content = getQA_Content(id);

    return QA_content; 
}



