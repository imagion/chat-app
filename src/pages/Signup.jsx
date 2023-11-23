import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { error, isPending, signup } = useSignup()

  const handleSubmit = e => {
    e.preventDefault()
    signup(email, password, displayName)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-[min(100%,24rem)] bg-white rounded-xl shadow-lg p-4 m-auto flow-lg'>
      <h2 className='text-2xl font-bold'>Sign up</h2>
      <label className='block'>
        <span>Nickname:</span>
        <input
          type='text'
          className='w-full border border-neutral-400 rounded-lg p-2'
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label className='block'>
        <span>Email:</span>
        <input
          type='email'
          className='w-full border border-neutral-400 rounded-lg p-2'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label className='block'>
        <span>Password:</span>
        <input
          type='password'
          className='w-full border border-neutral-400 rounded-lg p-2'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && (
        <button type='submit' className='btn bg-indigo-500'>
          Sign up
        </button>
      )}
      {isPending && (
        <button className='btn bg-neutral-300' disabled>
          Loading...
        </button>
      )}
      {error && (
        <p className='bg-red-100 text-red-900 p-2 rounded-lg'>{error}</p>
      )}
    </form>
  )
}
