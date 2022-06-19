import React from 'react'
import classes from './MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
    addNameAction,
    addNumberAction,
    clearInputAction,
    clearInputNumberAction,
    createNumberAction,
    createUserAction
} from '../../actions/actions';

function MainPage() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    const name = useSelector(state => state.users.name)
    const numbers = useSelector(state => state.numbers.numbers)
    const number = useSelector(state => state.numbers.number)

    const createUser = () => {
        dispatch(createUserAction(name))
        dispatch(clearInputAction(name))
    }

    const changeInput = (e) => {
        dispatch(addNameAction(e.target.value))
    }

    const addNumber = () => {
        dispatch(createNumberAction(number))
        dispatch(clearInputNumberAction(number))
    }
    const changeInputNumber = (e) => {
        dispatch(addNumberAction(e.target.value))
    }

    return (
        <div>
            <h3>Main Page</h3>

            <div className={classes.mainPage}>
                <div>
                    <p>Добавление пользователей в массив users[] <br />
                        <b> 2дз)</b> При создании пользователя очистить поле input <br /> СДЕЛАНО!
                    </p>
                    <input type="text" onChange={changeInput} value={name} />
                    <button onClick={createUser} >create user</button>
                    <ul>
                        users:
                        {users.map((user, i) => <li key={i} > {user} </li>)}
                    </ul>
                </div>

                <div>
                    <p> <b> 1дз)</b> Создать input type=number и <br /> значение(результат)
                        прибавлять 10, <br />
                        только прибавляем не предыдущее значение, а цифру 10 <br />
                        сделать с помощью редакс <br /> СДЕЛАНО!!!
                    </p>
                    <input type="number" onChange={changeInputNumber} value={number} />
                    <button onClick={addNumber} > add number </button>
                    <ul>
                        numbers:
                        {numbers.map((num, i) => <li key={i}> {num} </li>)}
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default MainPage
