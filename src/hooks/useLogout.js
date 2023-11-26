import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'
import { auth, db } from '../firebase/config'
import { doc, updateDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'

export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [isCancelled, setIsCancelled] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsPending(true)

    try {
      // update online status
      const { uid } = auth.currentUser
      updateDoc(doc(db, 'users', uid), { online: false })

      await signOut(auth)

      dispatch({ type: 'LOGOUT' })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } catch (err) {
      if (!isCancelled) {
        console.error(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { error, isPending, logout }
}
