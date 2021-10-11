import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_DATA, SET_FILTRED } from '../store/reducer/actions'
import '../styles/App.css'
import CardList from './CardList'
import Loader from '../UI/Loader/Loader'
import ErrorComponent from '../components/ErrorComponent'

function App() {
  const dispatch = useDispatch()
  const { data, isLoading, error, filtred } = useSelector(state => state.app)
  const filtredData = useMemo(() => {
    return data.filter(item => item.liked)
  }, [data])

  useEffect(() => {
    dispatch({
      type: LOAD_DATA
    })
  }, [dispatch])

  const setFilter = (bool) => {
    dispatch({
      type: SET_FILTRED,
      payload: bool
    })
  }

  if (error) {
    return <ErrorComponent />
  }

  return (
    <div className='app__container'>
      <h1 className='app__title'>Card Wiever</h1>
      {isLoading ? <Loader /> : <CardList data={filtred ? filtredData : data} />}
      {
        filtred ?
          <button className='filterButton' onClick={() => setFilter(false)}>Show all</button>
          :
          <button className='filterButton' onClick={() => setFilter(true)}>Show liked</button>
      }
    </div>
  )
}

export default App