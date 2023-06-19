import { useState, createContext, useEffect } from "react"
import { collection, query, onSnapshot } from "firebase/firestore"
import { db } from "../services/firebase"

const DbContext = createContext({})

const DbContentsProvider = ({ children }) => {
  const [nameDocs, setNameDocs] = useState([])

  const getAllDocs = () => {
    const q = query(collection(db, 'contents'))
    onSnapshot(q, (querySnapshot) => {
      setNameDocs([])
      querySnapshot.forEach((doc) => {
        setNameDocs(prev => [...prev, doc.id])
      })
    })
  }

  useEffect(() => {
    getAllDocs()
  }, [])

  return <DbContext.Provider value={{
    nameDocs
  }}>
    {children}
  </DbContext.Provider>
}

export { DbContext, DbContentsProvider }
