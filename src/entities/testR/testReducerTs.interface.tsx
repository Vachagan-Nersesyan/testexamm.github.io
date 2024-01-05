export interface InitialStateType {
    allInfo: AllInfoType,
    allInfoArr: Array<AllInfoAType>,
    wrongQuestArr: Array<AllInfoAType>,
    subjectName: string,
    examYear: number,
    examType: string
}

export interface AllExamInfoType {
    subjectName: string,
    examYear: number,
    examType: string
}

export interface AllInfoType {
    chooseAnswerQuest: string,
    shortAnswerQuest: string,
    shortAnswerBQuest: string,
    chooseAnswerBQuest: string,
    shortAnswerCQuest: string,
    shortAnswerDQuest: string,
    shortAnswerEQuest: string,

    wrongChooseAnswerQuest: string,
    wrongShortAnswerQuest: string
}


export interface AllInfoAType {
    id: number,
    countValue: string,
    selectedValue: string,
    isLoopEnd: boolean,
    lastIndex: number
}