import { useState, createContext, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../services/firebase"


const DbContext = createContext({})

const DbContentsProvider = ({ children }) => {
  const [nameDocs, setNameDocs] = useState([])

  useEffect(() => {
    const getAllDatas = async () => {
      const querySnapshot = await getDocs(collection(db, "contents"))
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        setNameDocs(prev => [...prev, doc.id])
      })
    }
    getAllDatas()

    return () => {
      setNameDocs([])
    }
  }, [])

  return <DbContext.Provider value={{
      nameDocs
    }}>
    {children}
  </DbContext.Provider>
}

export { DbContext, DbContentsProvider }
