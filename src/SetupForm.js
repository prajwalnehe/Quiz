import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>setup quiz</h2>
          
          {/* number of questions */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>

          {/* category */}
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sports'>sports</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
            </select>
          </div>

          {/* difficulty */}
          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>

          {/* quiz type (radio buttons) */}
          <div className='form-control'>
            <label>select quiz type</label>
            <div>
              <label htmlFor='multiple'>
                <input
                  type='radio'
                  name='quizType'
                  value='multiple'
                  id='multiple'
                  checked={quiz.quizType === 'multiple'}
                  onChange={handleChange}
                />
                Multiple Choice
              </label>
            </div>
            <div>
              <label htmlFor='truefalse'>
                <input
                  type='radio'
                  name='quizType'
                  value='truefalse'
                  id='truefalse'
                  checked={quiz.quizType === 'truefalse'}
                  onChange={handleChange}
                />
                True/False
              </label>
            </div>
          </div>

          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}

          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            start
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
