import { useEffect, useState, useRef } from 'react'

// firebase imports
import { db } from '../firebase/config'
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from 'firebase/firestore'

export const useCollection = (collectionRef, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // wrapping an array in useRef to bybass useEffect infine loop
  const qry = useRef(_query).current
  const odBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = collection(db, collectionRef)

    if (qry) {
      ref = query(ref, where(...qry))
    }
    if (odBy) {
      ref = query(ref, orderBy(...odBy))
    }

    const unsub = onSnapshot(
      ref,
      snapshot => {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ ...doc.data(), id: doc.id })
        })

        setDocuments(results)
        setError(null)
      },
      err => {
        console.error(err)
        setError('could not fetch the data')
      }
    )

    return () => unsub()
  }, [collectionRef, qry, odBy])

  return { documents, error }
}
