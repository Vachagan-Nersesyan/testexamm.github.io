import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './testStl.module.css'
import { OwnProps } from './testTs.interface'
import { useDispatch, useSelector } from 'react-redux'
import { getAllExamInfoCountFunc, getAllQuestionsCount, getAllQuestionsCountFunc, getAllWrongQuestionsCountFunc } from 'entities/testR/testReducer'
import { AppStateType } from 'entities/store/redux-store'
import { useNavigate } from 'react-router-dom'
import { AllExamInfoType } from 'entities/testR/testReducerTs.interface'

export const TestComp: React.FC<OwnProps> = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const allInfoArr = useSelector((state: AppStateType) => state.testR.allInfoArr)

    // const [chAnsQuest, setChAnsQuest] = useState({
    //     chooseAnswerQuest: '',
    //     shortAnswerQuest: '',
    //     shortAnswerBQuest: '',
    //     chooseAnswerBQuest: '',
    //     shortAnswerCQuest: '',
    //     shortAnswerDQuest: '',
    //     shortAnswerEQuest: '',
    //     wrongChooseAnswerQuest: '',
    //     wrongShortAnswerQuest: '',
    // });

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setChAnsQuest((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };



    const [selectedValue, setSelectedValue] = useState('');
    const [countValue, setCountValue] = useState('');
    const [getVariant, setVariant] = useState<boolean | null>(null);



    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        // Update the state with the selected value
        setSelectedValue(event.target.value);

        // You can perform additional actions here based on the selected value
        console.log("Selected value: " + event.target.value);
    };

    const [infoArr, setInfoArr] = useState(allInfoArr)

    useEffect(() => {
        setInfoArr(allInfoArr)
    }, [allInfoArr])

    const saveInfo = (tp: boolean | null) => {
        let obj = {
            id: infoArr.length,
            countValue,
            selectedValue,
            isLoopEnd: false,
            lastIndex: 0
        }

        if (tp) {
            dispatch(getAllQuestionsCountFunc({ info: obj }))

        } else {
            dispatch(getAllWrongQuestionsCountFunc({ info: obj }))

        }

    }


    const allWrInfoArr = useSelector((state: AppStateType) => state.testR.wrongQuestArr)
    const [infoWrArr, setInfoWRArr] = useState(allWrInfoArr)

    useEffect(() => {
        setInfoWRArr(allWrInfoArr)
    }, [allWrInfoArr])

    // const saveWrQInfo = () => {
    //     let obj = {
    //         id: infoArr.length,
    //         countValue,
    //         selectedValue,
    //         isLoopEnd: false,
    //         lastIndex: 0
    //     }

    //     dispatch(getAllWrongQuestionsCountFunc({ info: obj }))

    // }

    // const chosenAnswerQuestionAnswerCompFunc = () => {
    //     // dispatch(getAllQuestionsCount({ info: chAnsQuest }))
    //     // console.log(infoArr,'infoArrinfoArr')
    //     navigate('/test')

    // }

    const [chAnsQuest, setChAnsQuest] = useState<AllExamInfoType>({
        examYear: 0,
        examType: '',
        subjectName: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setChAnsQuest((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const getAllExamOthInfoCompFunc = () => {
        dispatch(getAllExamInfoCountFunc({ info: chAnsQuest }))
        navigate('/test')

    }


    const allCategoryArr = [
        {
            id: 0,
            name: 'Ընտրովի պատասխաններ',
            uniqName: 'choose',
            variant: true
        },
        {
            id: 1,
            name: 'Կարճ պատասխաններ',
            uniqName: 'short',
            variant: true
        },
        {
            id: 2,
            name: 'Կարճ և տարբերակներով պատասխաններ',
            uniqName: 'shortandvariant',
            variant: true
        },
        {
            id: 3,
            name: 'Սխալ Ընտրովի պատասխաններ',
            uniqName: 'wrchoose',
            variant: false
        },
        {
            id: 4,
            name: 'Սխալ Կարճ պատասխաններ',
            uniqName: 'wrshort',
            variant: false
        },
        {
            id: 5,
            name: 'Սխալ Կարճ և տարբերակներով պատասխաններ',
            uniqName: 'wrshortandvariant',
            variant: false
        },
    ]


    return (
        <div className={styles.test_content}>
            <div className={styles.test_content_container}>
                <div className={styles.test_content_title}>
                    Խնդրում ենք լրացրեք դաշտերը
                </div>
                <div className={styles.test_content_in_items}>
                    <div className={styles.test_content_in_items_1}>
                        <div className={styles.test_content_in_items_1_1}>
                            Խնդրում ենք նշեք քննության տարեթիվը
                        </div>
                        <div className={styles.test_content_in_items_1_2}>
                            <input type="number" name='examYear' onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className={styles.test_content_in_items_1}>
                        <div className={styles.test_content_in_items_1_1}>
                            Խնդրում ենք նշեք քննության տեսակը
                        </div>
                        <div className={styles.test_content_in_items_1_2}>
                            <input type="text" name='examType' onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className={styles.test_content_in_items_1}>
                        <div className={styles.test_content_in_items_1_1}>
                            Խնդրում ենք նշեք քննության առարկայի անունը
                        </div>
                        <div className={styles.test_content_in_items_1_2}>
                            <input type="text" name='subjectName' onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
                <div className={styles.test_content_inp_content}>
                    <div className={styles.test_content_inp_content_in_items}>
                        {
                            allCategoryArr.map((val) => {
                                return (
                                    <div className={styles.test_content_inp_content_in_items_im}>
                                        <div className={styles.test_content_in_items_1_1}>
                                            {val.name}
                                        </div>
                                        <div className={styles.test_content_in_items_1_2_b}>
                                            <input type="number" onChange={(e) => {
                                                setCountValue(e.target.value)
                                                setSelectedValue(val.uniqName)
                                                setVariant(val.variant)

                                            }} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={styles.test_content_inp_content_in_items_btn}>
                        <button onClick={() => saveInfo(getVariant)}>Հաստատել</button>
                    </div>

                    <div className={styles.test_content_inp_content_in_items_results_content}>
                        {
                            infoArr.map((val) => {
                                return (
                                    <div className={styles.test_content_inp_content_in_items_results_content_items}>
                                        {val.selectedValue} {val.countValue}
                                    </div>
                                )
                            })
                        }
                        {
                            infoWrArr.map((val) => {
                                return (
                                    <div className={styles.test_content_inp_content_in_items_results_content_items}>
                                        {val.selectedValue} {val.countValue}
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className={styles.test_content_inp_content_in_items_sec_btn}>
                        <button onClick={getAllExamOthInfoCompFunc}>Send</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestComp