import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

const ACTION = {
  INTERCHANGE_LAGUAGES: 'INTERCHANGE_LAGUAGES',
  SET_FROM_LANGUAGE: 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE: 'SET_TO_LANGUAGE',
  SET_FROM_TEXT: 'SET_FROM_TEXT',
  SET_RESULT: 'SET_RESULT'
}

const reducer = (state, action) => {
  const { type, payload } = action

  if (type === ACTION.INTERCHANGE_LAGUAGES) {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === ACTION.SET_FROM_LANGUAGE) {
    return {
      ...state,
      fromLanguage: payload
    }
  }

  if (type === ACTION.SET_TO_LANGUAGE) {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === ACTION.SET_FROM_TEXT) {
    return {
      ...state,
      result: payload
    }
  }

  if (type === ACTION.SET_RESULT) {
    return {
      ...state,
      result: payload
    }
  }

  return state
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Google Translate Clone</h1>
    </div>
  )
}
