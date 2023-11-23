import { useState } from 'react'

import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      // sugnup user
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // add displayName to user
      await updateProfile(auth.currentUser, { displayName })

      setIsPending(false)
      setError(null)
    } catch (err) {
      console.error(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, signup }
}
