import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  toText: '',
  loading: false
}

export default function App() {
  return (
    <div>
      <h1>Google translate clone:</h1>
    </div>
  )
}
