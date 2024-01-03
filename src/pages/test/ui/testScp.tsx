import React, { useState } from 'react'
import styles from './testStl.module.css'
import { OwnProps } from './testTs.interface'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuestionsCount } from 'entities/testR/testReducer'
import { AppStateType } from 'entities/store/redux-store'
import { useNavigate } from 'react-router-dom'

export const TestComp: React.FC<OwnProps> = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [chAnsQuest, setChAnsQuest] = useState({
        chooseAnswerQuest: '',
        shortAnswerQuest: '',
        shortAnswerBQuest: '',
        chooseAnswerBQuest: '',
        shortAnswerCQuest: '',
        shortAnswerDQuest: '',
        shortAnswerEQuest: '',
        wrongChooseAnswerQuest: '',
        wrongShortAnswerQuest: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setChAnsQuest((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const chosenAnswerQuestionAnswerCompFunc = () => {
        dispatch(getAllQuestionsCount({ info: chAnsQuest }))
        navigate('/test')

    }

    return (
        <div className={styles.test_content}>
            <div className={styles.test_content_container}>
                <div className={styles.test_content_title}>
                    Խնդրում ենք լրացրեք դաշտերը
                </div>
                <div className={styles.test_content_inp_content}>
                    <div className={styles.test_content_inp_content_item}>
                        <div className={styles.test_content_inp_content_item_title}>
                            Խնդրում ենք նշեք ընտրովի պատասխանների քանակը
                        </div>
                        <div className={styles.test_content_inp_content_item_inp}>
                            <input type="number" name='chooseAnswerQuest' onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className={styles.test_content_inp_content_item}>
                        <div className={styles.test_content_inp_content_item_title}>
                            Խնդրում ենք նշեք կարճ պատասխանների քանակը
                        </div>
                        <div className={styles.test_content_inp_content_item_inp}>

                            <input type="number" name='shortAnswerQuest' onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className={styles.test_content_inp_content_item}>
                        <div className={styles.test_content_inp_content_item_title}>
                            Խնդրում ենք նշեք կարճ և տարբերակներով պատասխանների քանակը

                        </div>
                        <div className={styles.test_content_inp_content_item_inp}>

                            <input type="number" name='shortAnswerBQuest' onChange={handleInputChange} />
                        </div>
                    </div>



                    <div className={styles.test_content_inp_content_item}>
                        <div className={styles.test_content_inp_content_item_title}>
                            Խնդրում ենք նշեք ընտրովի պատասխանների քանակը

                        </div>
                        <div className={styles.test_content_inp_content_item_inp}>

                            <input type="number" name='chooseAnswerBQuest' onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className={styles.test_content_inp_content_item}>
                        <div className={styles.test_content_inp_content_item_title}>
                            Խնդրում ենք նշեք կարճ պատասխանների քանակը

                        </div>
                        <div className={styles.test_content_inp_content_item_inp}>

                            <input type="number" name='shortAnswerCQuest' onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className={styles.test_content_inp_content_item}>
                        <div className={styles.test_content_inp_content_item_title}>
                            Խնդրում ենք նշեք կարճ և տարբերակներով պատասխանների քանակը

                        </div>
                        <div className={styles.test_content_inp_content_item_inp}>

                            <input type="number" name='shortAnswerDQuest' onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className={styles.test_content_inp_content_item}>
                        <div className={styles.test_content_inp_content_item_title}>
                            Խնդրում ենք նշեք ընտրովի սխալ պատասխանների քանակը
                        </div>
                        <div className={styles.test_content_inp_content_item_inp}>

                            <input type="number" name='shortAnswerEQuest' onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className={styles.test_content_inp_content_item}>
                        <div className={styles.test_content_inp_content_item_title}>
                            Խնդրում ենք նշեք կարճ սխալ պատասխանների քանակը
                        </div>
                        <div className={styles.test_content_inp_content_item_inp}>

                            <input type="number" name='wrongChooseAnswerQuest' onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className={styles.test_content_inp_content_item}>
                        <div className={styles.test_content_inp_content_item_title}>
                            Խնդրում ենք նշեք կարճ և տարբերակներով սխալ պատասխանների քանակը
                        </div>
                        <div className={styles.test_content_inp_content_item_inp}>

                            <input type="number" name='wrongShortAnswerQuest' onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className={styles.test_content_inp_content_btn}>
                        <button type='submit' onClick={chosenAnswerQuestionAnswerCompFunc}>Send</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestComp