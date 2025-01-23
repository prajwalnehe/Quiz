import React from 'react'
import { useGlobalContext } from './context'

const App = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext()

  if (waiting) {
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }

  const { question, incorrect_answers, correct_answer } = questions[index]
  let answers = [...incorrect_answers]

  // Shuffle answers
  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }

  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          Correct answers: {correct}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            <form>
              {answers.map((answer, idx) => (
                <div key={idx} className='form-control'>
                  <input
                    type='radio'
                    id={`answer-${idx}`}
                    name='answer'
                    value={answer}
                    onChange={() => checkAnswer(correct_answer === answer)}
                  />
                  <label htmlFor={`answer-${idx}`} dangerouslySetInnerHTML={{ __html: answer }} />
                </div>
              ))}
            </form>
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          Next Question
        </button>
      </section>
    </main>
  )
}

export default App
