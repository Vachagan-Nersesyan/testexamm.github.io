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
        <div>
            <div>
                <div>
                    yntrovi patasxanov arajadranqner
                </div>
                <input type="number" name='chooseAnswerQuest' onChange={handleInputChange} />
            </div>
            <div>
                <div>
                    karch patasxanov arajadranqner
                </div>
                <input type="number" name='shortAnswerQuest' onChange={handleInputChange} />
            </div>
            <div>
                <div>
                    karch patasxanov arajadranqner b
                </div>
                <input type="number" name='shortAnswerBQuest' onChange={handleInputChange} />
            </div>



            <div>
                <div>
                    yntrovi patasxanov arajadranqner b
                </div>
                <input type="number" name='chooseAnswerBQuest' onChange={handleInputChange} />
            </div>

            <div>
                <div>
                    karch patasxanov arajadranqner c
                </div>
                <input type="number" name='shortAnswerCQuest' onChange={handleInputChange} />
            </div>
            <div>
                <div>
                    karch patasxanov arajadranqner d
                </div>
                <input type="number" name='shortAnswerDQuest' onChange={handleInputChange} />
            </div>
            <div>
                <div>
                    karch patasxanov arajadranqner e
                </div>
                <input type="number" name='shortAnswerEQuest' onChange={handleInputChange} />
            </div>

            <div>
                <div>
                    wrong yntrovi patasxanov arajadranqner
                </div>
                <input type="number" name='wrongChooseAnswerQuest' onChange={handleInputChange} />
            </div>

            <div>
                <div>
                    wrong  karch patasxanov arajadranqner
                </div>
                <input type="number" name='wrongShortAnswerQuest' onChange={handleInputChange} />
            </div>

            <button type='submit' onClick={chosenAnswerQuestionAnswerCompFunc}>Send</button>
        </div>
    )
}

export default TestComp