import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  const text = props.text
  const value = props.value

  return (
    <div> 
      {text}{value}
    </div>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  const all = () => good + neutral + bad
  const average = () => (good * 1 + neutral * 0 + bad * -1) / all()
  const positive = () => good / all() * 100 + ' %'

  
  if (all() === 0) {
    return (
      <div>
        <StatisticLine text="No feedback given" value=''/>
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good: " value={good}/>
      <StatisticLine text="neutral: " value={neutral}/>
      <StatisticLine text="bad: " value={bad}/>
      <StatisticLine text="all: " value={all()}/>
      <StatisticLine text="average: " value={average()}/>
      <StatisticLine text="positive: " value={positive()}/>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text='good'/>
      <Button handleClick={increaseNeutral} text='neutral'/>
      <Button handleClick={increaseBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
