import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
    const total = good + bad + neutral

    const computeAverage = () => {
        if (total === 0) {
            return 0
        } else {
            return (good - bad) / total
        }
    }

    const computePositive = () => {
        if (total === 0) {
            return 0
        } else {
            return good / total * 100
        }
    }

    if (total === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>statistics</h1>
                <table>
                    <tbody>
                        <StatisticLine text='good' value={good} />
                        <StatisticLine text='neutral' value={neutral} />
                        <StatisticLine text='bad' value={bad} />
                        <StatisticLine text='all' value={total} />
                        <StatisticLine text='average' value={computeAverage()} />
                        <StatisticLine text='positive' value={computePositive()} end="%"/>
                    </tbody>
                </table>
            </div>
        )
    }
}

const StatisticLine = ({ text, value, end }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value} {end}</td>
        </tr>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const increaseGood = () => setGood(good + 1)
    const increaseNeutral = () => setNeutral(neutral + 1)
    const increaseBad = () => setBad(bad + 1)

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={increaseGood} text='good' />
            <Button handleClick={increaseNeutral} text='neutral' />
            <Button handleClick={increaseBad} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
