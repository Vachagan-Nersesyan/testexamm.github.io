import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './finalTestStl.module.css'
import { InputState, OwnProps } from './finalTestTs.interface'
import { useSelector } from 'react-redux'
import { AppStateType } from 'entities/store/redux-store'

import pic from '../images/1.png'
import { AllInfoAType } from 'entities/testR/testReducerTs.interface'

const FinalTestComp: React.FC<OwnProps> = () => {

    const chAnsQuestCountItem = useSelector((state: AppStateType) => state.testR.allInfo)


    const [inputValues, setInputValues] = useState<InputState>({
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: '',
        num6: '',

    });

    // using array for wrong answers

    const [inputSecValues, setInputSecValues] = useState<string[]>(['', '', '']);

    const handleSecChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        // Limit the input length to 5 characters
        const newValue = event.target.value.length <= 5 ? event.target.value : inputSecValues[index];

        setInputSecValues((prevValues) => {
            const newInputValues = [...prevValues];
            newInputValues[index] = newValue;
            return newInputValues;
        });
    };




    const handleChange = (inputName: keyof InputState) => (event: ChangeEvent<HTMLInputElement>) => {
        // Limit the input length to 5 characters
        const newValue = event.target.value.length <= 1 ? event.target.value : inputValues[inputName];

        setInputValues((prevValues) => ({
            ...prevValues,
            [inputName]: newValue,
        }));
    };


    // first part items
    // const [infoSttngs, setInfoSttngs] = useState<number>(Math.ceil(Number(chAnsQuestCountItem.chooseAnswerQuest) / 19))
    let lastIndex = 0
    let isLoopEnd = false

    // second part items

    // const infoSecSettings = Math.ceil(Number(chAnsQuestCountItem.shortAnswerQuest) / 3)
    let isSecLoopEnd = false
    let lastSecIndex = 0





    const infoForthSettings = Math.ceil(Number(chAnsQuestCountItem.chooseAnswerBQuest) / 19)
    let isForthLoopEnd = false
    let lastForthIndex = 0

    const infoFivthSettings = Math.ceil(Number(chAnsQuestCountItem.shortAnswerCQuest) / 3)
    let isFivthLoopEnd = false
    let lastFivthIndex = 0

    const infoSixthSettings = Math.ceil(Number(chAnsQuestCountItem.shortAnswerDQuest) / 3)
    let isSixthLoopEnd = false
    let lastSixthIndex = 0


    // const infoSeventhSettings = Math.ceil(Number(chAnsQuestCountItem.shortAnswerEQuest) / 10)
    // let isSeventhLoopEnd = false
    // let lastSeventhIndex = 0

    // const infoEightSettings = Math.ceil(Number(chAnsQuestCountItem.wrongChooseAnswerQuest) / 3)
    // let isEightLoopEnd = false
    // let lastEightIndex = 0


    // const infoNinethSettings = Math.ceil(Number(chAnsQuestCountItem.wrongShortAnswerQuest) / 3)
    // let isNinethLoopEnd = false
    // let lastNinethIndex = 0


    // dd start

    let startIndex = 0
    let startIndexCount = 0
    let startSecIndexCount = 0
    let lastSeccIndex = 0

    let startSecIndex = 0
    let startIndexSecCount = 0
    let lastThirddIndex = 0


    let startThirdIndex = 0
    let startIndexThsirdCount = 0
    let startIndexThsirddCount = 0
    let lastThirdSIndex = 0



    // console.log(infoSeventhSettings, chAnsQuestCountItem.shortAnswerEQuest, 'infoSeventhSettingsinfoSeventhSettings')

    // console.log(infoSttngs, Math.ceil(Number(chAnsQuestCountItem.chooseAnswerQuest) / 19), 'infoSttngsinfoSttngsinfoSttngs')
    // console.log(chAnsQuestCountItem.chooseAnswerQuest, infoSttngs.toFixed(1)[infoSttngs.toFixed(1).length - 1], 'chAnsQuestCountItem.chooseAnswerQuest')


    // console.log(Math.ceil(Number(chAnsQuestCountItem.shortAnswerQuest) / 3), chAnsQuestCountItem.shortAnswerQuest, 'chAnsQuestCountItem.shortAnswerQuest')

    // console.log((Number(chAnsQuestCountItem.chooseAnswerQuest) / 19).toFixed(1), (Number(chAnsQuestCountItem.chooseAnswerQuest) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1], 'ss')

    // console.log(infoSecSettings - ((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount), 'startSecIndexCount')

    // console.log(infoThirdSettings, startSecIndex, 'infoThirdSettingsinfoThirdSettingsinfoThirdSettings')

    // debugger
    // let o = infoThirdSettings - ((infoThirdSettings - ((Math.floor((infoThirdSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount)))
    // console.log((o / 4) * 4, o, infoThirdSettings, 'ssss')

    // let o = infoThirdSettings - (infoThirdSettings - ((Math.floor((infoThirdSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount))
    // console.log(infoSecSettings - ((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount))
    // console.log(o - (Math.floor(o / 4) * 4), o, infoSecSettings - ((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount), 'infoThirdSettingsinfoThirdSettings')

    // console.log(infoThirdSettings, 'dddd')

    let countBg = 0



    const printFunc = () => {
        window.print()
    }


    const arrAllInfo = useSelector((state: AppStateType) => state.testR.allInfoArr)
    const [arrInfo, setArrInfo] = useState<Array<AllInfoAType>>(arrAllInfo)

    useEffect(() => {
        setArrInfo(arrAllInfo)
        console.log(arrInfo, 'arrInfoarrInfo')
    }, [arrAllInfo])

    let infoSttngs = 0
    let infoSecSettings = 0
    let infoThirdSettings = 0

    const subjectName = useSelector((state: AppStateType) => state.testR.subjectName)
    const examYear = useSelector((state: AppStateType) => state.testR.examYear)
    const examType = useSelector((state: AppStateType) => state.testR.examType)



    // wrong asnwer part

    const arrAllQuestInfo = useSelector((state: AppStateType) => state.testR.wrongQuestArr)
    const [arrWrInfo, setArrWrInfo] = useState<Array<AllInfoAType>>(arrAllQuestInfo)

    useEffect(() => {
        setArrWrInfo(arrAllQuestInfo)
        console.log(arrWrInfo, 'arrWrInfoarrWrInfoarrWrInfoarrWrInfo')
    }, [arrAllQuestInfo])


    let infoSeventhSettings = 0
    let infoEightSettings = 0
    let infoNinethSettings = 0


    return (
        <div className={styles.test_content_overlay}>
            <div className={styles.test_content}>
                <div className={styles.test_content_container}>
                    <div className={styles.test_content_first_content}>
                        <div className={styles.test_content_first_content_1}>
                            <div className={styles.test_content_first_content_1_1}>
                                <span className={styles.test_content_first_content_1_1_num}>{examYear}</span>թ․ {examType} քննություն
                            </div>
                            <div className={styles.test_content_first_content_1_2}>
                                <span>Պատասխանների ձևաթուղթ</span>
                                <span>{subjectName}</span>
                            </div>
                            <div className={styles.test_content_first_content_1_3}>
                                <div className={styles.test_content_first_content_1_3_1}>
                                    <input type="text" />
                                </div>
                                <div className={styles.test_content_first_content_1_3_2}>
                                    ազգանուն
                                </div>
                            </div>
                            <div className={styles.test_content_first_content_1_4}>
                                <div className={styles.test_content_first_content_1_4_1}>
                                    <div className={styles.test_content_first_content_1_3_1}>
                                        <input type="text" />
                                    </div>
                                    <div className={styles.test_content_first_content_1_3_2}>
                                        անուն
                                    </div>
                                </div>
                                <div className={styles.test_content_first_content_1_4_1}>
                                    <div className={styles.test_content_first_content_1_3_1}>
                                        <input type="text" />
                                    </div>
                                    <div className={styles.test_content_first_content_1_3_2}>
                                        հայրանուն
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.test_content_first_content_2}>
                            <div className={styles.test_content_first_content_2_1}></div>
                            <div className={styles.test_content_first_content_2_2}>
                                <div className={styles.test_content_first_content_2_2_1}>
                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                    </div>
                                </div>

                                <div className={styles.test_content_first_content_2_2_1}>
                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                    </div>
                                </div>

                                <div className={styles.test_content_first_content_2_2_1}>
                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                    </div>

                                </div>

                                <div className={styles.test_content_first_content_2_2_1}>
                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                    </div>

                                </div>

                                <div className={styles.test_content_first_content_2_2_1}>
                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                    </div>

                                </div>

                                <div className={styles.test_content_first_content_2_2_1}>
                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                    </div>

                                </div>
                            </div>
                            <div className={styles.test_content_first_content_1_3_2}>
                                Անձնական համար
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.test_content_second_content}>
                    <div className={styles.test_content_second_content_1}>
                        <img src={pic} alt="" />
                    </div>
                    <div className={styles.test_content_second_content_2}>
                        <div className={styles.test_content_second_content_2_1}></div>
                    </div>
                </div>
                <div className={styles.test_content_container}>
                    <div className={styles.test_content_third_content}>
                        <div className={styles.test_content_third_content_1}>
                            <div className={styles.test_content_third_content_1_overlay}>
                                <div className={styles.test_content_third_content_1_1}>
                                    Եղե՜ք ուջադիր
                                </div>
                                <div className={styles.test_content_third_content_1_2}>
                                    <ul>
                                        <li>
                                            Լրացրեք միայն սև գելային գրիչով
                                        </li>

                                        <li>
                                            Ընտրովի պատասխանով առաջադրանքներում Ձեր ընտրած տարբերակի համարին
                                            համապատասխանող վանդակում դրե՜ք X նշանը
                                        </li>

                                        <li>
                                            Թվերը գրե՜ք հետևյալ տեսքով
                                            <span>
                                                1
                                            </span>
                                            <span>
                                                2
                                            </span>
                                            <span>
                                                3
                                            </span>
                                            <span>
                                                4
                                            </span>
                                            <span>
                                                5
                                            </span>
                                            <span>
                                                6
                                            </span>
                                            <span>
                                                7
                                            </span>
                                            <span>
                                                8
                                            </span>
                                            <span>
                                                9
                                            </span>
                                            <span>
                                                0
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* second part */}
                        <div className={styles.test_content_third_content_2}>
                            <div className={styles.test_content_third_content_2_1}>
                                <div className={styles.test_content_third_content_2_1_1}>
                                    Թեստ N
                                </div>
                                <div className={styles.test_content_third_content_2_1_2}>
                                    <div className={styles.test_content_third_content_2_1_2_1}>
                                        <span>1</span>
                                        <input type="radio" name='short1' />
                                    </div>
                                    <div className={styles.test_content_third_content_2_1_2_1}>
                                        <span>2</span>
                                        <input type="radio" name='short1' />
                                    </div>
                                    <div className={styles.test_content_third_content_2_1_2_1}>
                                        <span>3</span>
                                        <input type="radio" name='short1' />
                                    </div>
                                    <div className={styles.test_content_third_content_2_1_2_1}>
                                        <span>4</span>
                                        <input type="radio" name='short1' />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.test_content_third_content_2_2}></div>
                        </div>
                        {/* third part */}


                        <div className={styles.ss}>

                            {
                                arrInfo.map((val) => {

                                    if (val.selectedValue === 'choose') {

                                        infoSttngs = Math.ceil(Number(val.countValue) / 19)
                                        let isLoopEnd = val.isLoopEnd
                                        let lastIndex = val.lastIndex
                                        return (
                                            [...new Array(infoSttngs)].map((val1, ind1) => {
                                                // debugger
                                                isLoopEnd = false
                                                return (
                                                    <div key={ind1} className={styles.test_content_third_content_3}>
                                                        {
                                                            ind1 !== 0 && ind1 !== [...new Array(infoSttngs)].length - 1
                                                                ?
                                                                null
                                                                :
                                                                <div className={styles.test_content_third_content_3_title}>
                                                                    Ընտրովի պատասխանով առաջադրանքներ
                                                                </div>
                                                        }
                                                        <div className={styles.test_content_third_content_3_2}>
                                                            <div className={styles.test_content_third_content_3_2_1}>
                                                                Պատասխանի համարը
                                                            </div>
                                                            <div className={styles.test_content_third_content_3_2_2}>
                                                                <span>a</span>
                                                                <span>b</span>
                                                                <span>c</span>
                                                                <span>d</span>
                                                            </div>
                                                            <div className={styles.test_content_third_content_3_2_3}>
                                                                {
                                                                    [...new Array(Number(val.countValue))].map((val, ind) => {
                                                                        // debugger
                                                                        // console.log(initialFIndex, 'initialFIndexinitialFIndex')

                                                                        if (!isLoopEnd && ind > lastIndex || ind === 0 && ind1 === 0) {
                                                                            // initialFIndex += 1
                                                                            if ((ind + 1) % 19 === 0) {
                                                                                isLoopEnd = true
                                                                                lastIndex = ind
                                                                                return null
                                                                            } else {
                                                                                countBg += 1
                                                                                return (
                                                                                    <div key={ind} className={styles.test_content_third_content_3_2_3_1}>
                                                                                        <div className={styles.test_content_third_content_3_2_3_1_1}>
                                                                                            {countBg}
                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_3_2_3_1_2}>
                                                                                            <form action="">
                                                                                                <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                                    <input type="radio" name='1' />
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                                    <input type="radio" name='1' />
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                                    <input type="radio" name='1' />
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                                    <input type="radio" name='1' />
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        }

                                                                    })
                                                                }
                                                            </div>
                                                            <div className={styles.test_content_third_content_3_2_2}>
                                                                <span>a</span>
                                                                <span>b</span>
                                                                <span>c</span>
                                                                <span>d</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                        )
                                    } else if (val.selectedValue === 'short') {

                                        infoSecSettings = Math.ceil(Number(val.countValue) / 3)
                                        let isSecLoopEnd = false
                                        let lastSecIndex = 0

                                        return (
                                            <>
                                                <div className={styles.test_content_third_content_3_content_d}>
                                                    {
                                                        Number((Number(val.countValue) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) >= 7
                                                            ?
                                                            null
                                                            :
                                                            <div className={styles.test_content_third_content_3_title}>
                                                                Կարճ պատասխանով առաջադրանքներ
                                                            </div>
                                                    }
                                                    <div className={styles.test_content_third_content_3_content_f}>
                                                        {
                                                            Number((Number(val.countValue) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) < 5
                                                                ?

                                                                [...new Array(infoSecSettings)].map((val1, ind) => {
                                                                    startIndex = 3
                                                                    startIndexCount = 2
                                                                    startSecIndexCount = 2
                                                                    // debugger
                                                                    if (ind > 1) {
                                                                        return null
                                                                    }
                                                                    isSecLoopEnd = false
                                                                    return (
                                                                        <div className={styles.test_content_third_content_4}>
                                                                            {/* <div className={styles.test_content_third_content_3_title}>
                                                    Կարճ պատասխանով առաջադրանքներ
                                                </div> */}
                                                                            <div className={styles.test_content_third_content_4_1_b}>
                                                                                <div className={styles.test_content_third_content_4_1_overlay}>
                                                                                    {
                                                                                        [...new Array(Number(val.countValue))].map((val1, ind1) => {
                                                                                            // debugger
                                                                                            if (!isSecLoopEnd && ind1 > lastSecIndex || ind === 0 && ind1 === 0) {
                                                                                                if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                                                    isSecLoopEnd = true
                                                                                                    lastSecIndex = ind1
                                                                                                    return null
                                                                                                } else {
                                                                                                    countBg += 1
                                                                                                    return (
                                                                                                        <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                                {countBg}
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )
                                                                                                }
                                                                                            } else if (ind1 === lastSecIndex) {
                                                                                                countBg += 1
                                                                                                return (
                                                                                                    (
                                                                                                        <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                                {countBg}
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )
                                                                                                )
                                                                                            }
                                                                                        })
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })

                                                                :

                                                                Number((Number(val.countValue) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) > 5 && Number((Number(chAnsQuestCountItem.chooseAnswerQuest) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) < 7
                                                                    ?
                                                                    [...new Array(infoSecSettings)].map((val2, ind) => {
                                                                        startIndex = 5
                                                                        startIndexCount = 1
                                                                        startSecIndexCount = 1
                                                                        // debugger
                                                                        if (ind > 0) {
                                                                            return null
                                                                        }
                                                                        isSecLoopEnd = false
                                                                        return (
                                                                            <div className={styles.test_content_third_content_4}>
                                                                                {/* <div className={styles.test_content_third_content_3_title}>
                                                    Կարճ պատասխանով առաջադրանքներ
                                                </div> */}
                                                                                <div className={styles.test_content_third_content_4_1_b}>
                                                                                    <div className={styles.test_content_third_content_4_1_overlay}>
                                                                                        {
                                                                                            [...new Array(Number(val.countValue))].map((val1, ind1) => {
                                                                                                // debugger
                                                                                                if (!isSecLoopEnd && ind1 > lastSecIndex || ind === 0 && ind1 === 0) {
                                                                                                    if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                                                        isSecLoopEnd = true
                                                                                                        lastSecIndex = ind1
                                                                                                        return null
                                                                                                    } else {
                                                                                                        countBg += 1
                                                                                                        return (
                                                                                                            <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                                                                                    </div>
                                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                    </div>
                                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                    </div>
                                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                    </div>
                                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        )
                                                                                                    }
                                                                                                } else if (ind1 === lastSecIndex) {
                                                                                                    countBg += 1
                                                                                                    return (
                                                                                                        (
                                                                                                            <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                                                                                    </div>
                                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                    </div>
                                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                    </div>
                                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                    </div>
                                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        )
                                                                                                    )
                                                                                                }
                                                                                            })
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                    :
                                                                    null
                                                        }
                                                    </div>
                                                </div>

                                                <div className={styles.test_content_third_content_3_content_d}>

                                                    <div className={styles.test_content_third_content_3_title}>
                                                        Կարճ պատասխանով առաջադրանքներ
                                                    </div>
                                                    <div className={styles.test_content_third_content_3_content_d_item}>
                                                        {
                                                            [...new Array(infoSecSettings)].map((val2, ind) => {
                                                                // ddddddddd
                                                                // debugger
                                                                if (startIndexCount !== 0) {
                                                                    startIndexCount--
                                                                    return null
                                                                }

                                                                // if (ind >= (Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount) {
                                                                //     return null
                                                                // }
                                                                lastSeccIndex = ind

                                                                console.log((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount, 'infoSecSettings - startSecIndexCount) / 4')
                                                                ind = startIndex + ind
                                                                // debugger
                                                                isSecLoopEnd = false
                                                                return (
                                                                    <div className={styles.test_content_third_content_4}>
                                                                        {/* <div className={styles.test_content_third_content_3_title}>
                                                Կարճ պատասխանով առաջադրանքներ
                                            </div>  */}
                                                                        <div className={styles.test_content_third_content_4_1_b}>
                                                                            <div className={styles.test_content_third_content_4_1_overlay}>
                                                                                {
                                                                                    [...new Array(Number(val.countValue))].map((val1, ind1) => {
                                                                                        // debugger
                                                                                        if (!isSecLoopEnd && ind1 > lastSecIndex || ind === 0 && ind1 === 0) {
                                                                                            if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                                                isSecLoopEnd = true
                                                                                                lastSecIndex = ind1
                                                                                                return null
                                                                                            } else {
                                                                                                countBg += 1
                                                                                                return (
                                                                                                    <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                            {countBg}
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )
                                                                                            }
                                                                                        } else if (ind1 === lastSecIndex) {
                                                                                            countBg += 1
                                                                                            return (
                                                                                                (
                                                                                                    <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                            {countBg}
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                )
                                                                                            )
                                                                                        }
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                        )

                                    } else if (val.selectedValue === 'shortandvariant') {

                                        infoThirdSettings = Math.ceil(Number(val.countValue) / 3)
                                        let isThirdLoopEnd = false
                                        let lastThirdIndex = 0

                                        return (
                                            <>
                                                {
                                                    [...new Array(infoSecSettings ? (4 - (infoSecSettings - ((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount))) : null)].map((val2, ind) => {
                                                        // debugger
                                                        startIndexSecCount = (infoSecSettings - ((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount))
                                                        startSecIndex = 4 - (infoSecSettings - ((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount))


                                                        return (
                                                            <div className={styles.test_content_third_content_4_b}>

                                                                <div className={styles.test_content_third_content_4_1_2}>
                                                                    <div className={styles.test_content_third_content_4_1_2_1}>
                                                                        <div className={styles.test_content_third_content_4_1_2_1_1}>
                                                                            {/* <div className={styles.test_content_third_content_4_1_2_1_1_1}></div> */}
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                                                A
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                                                B
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                                                C
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                                                D
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.test_content_third_content_4_1_2_1_2}>
                                                                            {
                                                                                [...new Array(Number(infoThirdSettings))].map((va1l, ind1) => {

                                                                                    if (!isThirdLoopEnd && ind1 > lastThirdIndex || ind === 0 && ind1 === 0) {
                                                                                        if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                                            isThirdLoopEnd = true
                                                                                            lastThirdIndex = ind1
                                                                                            return null
                                                                                        } else {
                                                                                            countBg += 1
                                                                                            return (
                                                                                                <div key={ind1} className={styles.test_content_third_content_4_1_1}>

                                                                                                    <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                        {countBg}
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>

                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )
                                                                                        }
                                                                                    } else if (ind1 === lastThirdIndex) {
                                                                                        countBg += 1
                                                                                        return (
                                                                                            (
                                                                                                <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                        {countBg}
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )
                                                                                        )
                                                                                    }
                                                                                })
                                                                            }

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }


                                                {
                                                    [...new Array(infoThirdSettings)].map((val2, ind) => {

                                                        if (startSecIndex > 0) {
                                                            startSecIndex--
                                                            return null
                                                        }
                                                        // console.log(Math.floor((((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount), 'ee')
                                                        // console.log(infoThirdSettings - startIndexSecCount, 'infoThirdSettings - startIndexSecCount')
                                                        // debugger
                                                        // if (ind >= Math.floor((((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount) - startIndexSecCount) {
                                                        //     return null
                                                        // }
                                                        lastThirddIndex = ind

                                                        // debugger
                                                        isThirdLoopEnd = false
                                                        return (
                                                            <div className={styles.test_content_third_content_4_b}>

                                                                <div className={styles.test_content_third_content_4_1_2}>
                                                                    <div className={styles.test_content_third_content_4_1_2_1}>
                                                                        <div className={styles.test_content_third_content_4_1_2_1_1}>
                                                                            {/* <div className={styles.test_content_third_content_4_1_2_1_1_1}></div> */}
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                                                A
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                                                B
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                                                C
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                                                D
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.test_content_third_content_4_1_2_1_2}>
                                                                            {
                                                                                [...new Array(Number(val.countValue))].map((va1l, ind1) => {

                                                                                    if (!isThirdLoopEnd && ind1 > lastThirdIndex || ind === 0 && ind1 === 0) {
                                                                                        if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                                            isThirdLoopEnd = true
                                                                                            lastThirdIndex = ind1
                                                                                            return null
                                                                                        } else {
                                                                                            countBg += 1
                                                                                            return (
                                                                                                <div key={ind1} className={styles.test_content_third_content_4_1_1}>

                                                                                                    <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                        {countBg}
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )
                                                                                        }
                                                                                    } else if (ind1 === lastThirdIndex) {
                                                                                        countBg += 1
                                                                                        return (
                                                                                            (
                                                                                                <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                        {countBg}
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )
                                                                                        )
                                                                                    }
                                                                                })
                                                                            }

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                }


                                            </>
                                        )


                                    }
                                })
                            }



                            {/* second part */}







                            {/* third part */}














                            {/* sxal patasxanner */}

                            <div className={styles.test_content_third_content_6}>
                                <div className={styles.test_content_third_content_3_title}>
                                    Ամբողջ ձևաթղթում սխալ նշված պատասխանները փոխելու տեղը
                                </div>
                                <div className={styles.test_content_third_content_6_1}>

                                    {
                                        arrWrInfo.map((val) => {

                                            if (val.selectedValue === 'wrchoose') {
                                                infoSeventhSettings = Math.ceil(Number(val.countValue) / 10)
                                                let isSeventhLoopEnd = false
                                                let lastSeventhIndex = 0
                                                return (

                                                    [...new Array(infoSeventhSettings)].map((val1, ind1) => {
                                                        // debugger
                                                        isSeventhLoopEnd = false

                                                        return (
                                                            <div key={ind1} className={styles.test_content_third_content_6_1_1}>
                                                                <div className={styles.test_content_third_content_6_1_1_2}>

                                                                    <div className={styles.test_content_third_content_3}>
                                                                        <div className={styles.test_content_third_content_3_2}>
                                                                            <div className={styles.test_content_third_content_3_2_1}>
                                                                                Ընտրովի պատասխան
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_3_2_2}>
                                                                                <span>a</span>
                                                                                <span>b</span>
                                                                                <span>c</span>
                                                                                <span>d</span>
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_6_1_1_2_1_1}>

                                                                                {
                                                                                    [...new Array(Number(val.countValue))].map((val, ind) => {

                                                                                        if (!isSeventhLoopEnd && ind > lastSeventhIndex || ind === 0 && ind1 === 0) {
                                                                                            // initialFIndex += 1
                                                                                            // debugger
                                                                                            if ((ind + 1) % 10 === 0) {
                                                                                                isSeventhLoopEnd = true
                                                                                                lastSeventhIndex = ind
                                                                                                return null
                                                                                            } else {

                                                                                                return (
                                                                                                    <div key={ind}>
                                                                                                        <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                                                                                            <div className={styles.test_content_third_content_6_1_1_2_1}>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1_sec}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                </div>
                                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_6_1_1_2_1_1_2}>
                                                                                                            <div className={styles.test_content_third_content_3_2_3}>
                                                                                                                <div className={styles.test_content_third_content_3_2_3_1}>

                                                                                                                    <div className={styles.test_content_third_content_3_2_3_1_2}>
                                                                                                                        <form action="">
                                                                                                                            <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input type="radio" name='1' />
                                                                                                                            </div>
                                                                                                                            <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input type="radio" name='1' />
                                                                                                                            </div>
                                                                                                                            <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input type="radio" name='1' />
                                                                                                                            </div>
                                                                                                                            <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input type="radio" name='1' />
                                                                                                                            </div>
                                                                                                                        </form>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>


                                                                                                )
                                                                                            }
                                                                                        }
                                                                                    })
                                                                                }

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })

                                                )
                                            } else if (val.selectedValue === 'wrshort') {

                                                infoEightSettings = Math.ceil(Number(val.countValue) / 3)
                                                let isEightLoopEnd = false
                                                let lastEightIndex = 0
                                                return (
                                                    [...new Array(infoEightSettings)].map((val2, ind) => {
                                                        // debugger
                                                        isEightLoopEnd = false
                                                        return (
                                                            <div className={styles.test_content_third_content_6_1_2_33}>
                                                                {
                                                                    ind === 0
                                                                        ?
                                                                        <div className={styles.test_content_third_content_3_2_1}>
                                                                            Կարճ պատասխանով
                                                                        </div>
                                                                        :
                                                                        null
                                                                }
                                                                <div className={styles.test_content_third_content_4_1}>
                                                                    <div className={styles.test_content_third_content_4_1_overlay_ss}>
                                                                        {
                                                                            [...new Array(Number(val.countValue))].map((val, ind1) => {
                                                                                if (!isEightLoopEnd && ind1 > lastEightIndex || ind === 0 && ind1 === 0) {
                                                                                    if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                                        isEightLoopEnd = true
                                                                                        lastEightIndex = ind1
                                                                                        return null
                                                                                    } else {
                                                                                        return (
                                                                                            <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                                <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        )
                                                                                    }
                                                                                } else if (ind1 === lastEightIndex) {
                                                                                    return (
                                                                                        (
                                                                                            <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                                <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        )
                                                                                    )
                                                                                }
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })

                                                )
                                            } else {
                                                infoNinethSettings = Math.ceil(Number(val.countValue) / 3)
                                                let isNinethLoopEnd = false
                                                let lastNinethIndex = 0

                                                return (
                                                    [...new Array(infoNinethSettings)].map((val1, ind) => {
                                                        // debugger
                                                        isNinethLoopEnd = false
                                                        return (
                                                            <div className={styles.test_content_third_content_4}>
                                                                {/* {
                                                            ind === 0 || ind % 2 === 0
                                                                ?
                                                                <div className={styles.test_content_third_content_3_title}>
                                                                    Կարճ պատասխանով առաջադրանքներ
                                                                </div>
                                                                :
                                                                <div>
                                                                </div>
                                                        } */}
                                                                <div className={styles.test_content_third_content_4_1_2}>
                                                                    <div className={styles.test_content_third_content_4_1_2_1}>
                                                                        <div className={styles.test_content_third_content_4_1_2_1_1_sec}>
                                                                            {/* <div className={styles.test_content_third_content_4_1_2_1_1_1}></div> */}
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1_sec}>
                                                                                A
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1_sec}>
                                                                                B
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1_sec}>
                                                                                C
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_4_1_2_1_1_1_1_sec}>
                                                                                D
                                                                            </div>
                                                                        </div>
                                                                        <div className={styles.test_content_third_content_4_1_2_1_2}>


                                                                            {
                                                                                [...new Array(Number(val.countValue))].map((va1l, ind1) => {

                                                                                    if (!isNinethLoopEnd && ind1 > lastNinethIndex || ind === 0 && ind1 === 0) {
                                                                                        if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                                            isNinethLoopEnd = true
                                                                                            lastNinethIndex = ind1
                                                                                            return null
                                                                                        } else {
                                                                                            return (
                                                                                                <div key={ind} className={styles.test_content_third_content_4_1_1}>

                                                                                                    <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid}>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )
                                                                                        }
                                                                                    } else if (ind1 === lastNinethIndex) {
                                                                                        return (
                                                                                            (
                                                                                                <div key={ind} className={styles.test_content_third_content_4_1_1}>

                                                                                                    <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid}>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_ittm}>
                                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )
                                                                                        )
                                                                                    }
                                                                                })
                                                                            }

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                )
                                            }
                                        })
                                    }


                                </div>
                            </div>


                        </div>

                    </div>
                    {/* sixth part */}






                </div>


                {/* artagreq part */}
                <div className={styles.last_part_content}>
                    <div className={styles.last_part_content_1_item}>
                        <div className={styles.last_part_content_1_item_1}>
                            Արտագրե՜ք այս նախադասությունը՝
                        </div>
                        <div className={styles.last_part_content_1_item_2}>
                            Ծանոթ եմ քննության կարգին։
                        </div>
                    </div>
                    <div className={styles.last_part_content_2_item}>
                        <input type="text" />
                    </div>
                </div>
            </div>



            <div className={styles.printPart}>
                <button onClick={() => printFunc()}>print</button>
            </div>
        </div >
        // </div >
    )
}

export default FinalTestComp