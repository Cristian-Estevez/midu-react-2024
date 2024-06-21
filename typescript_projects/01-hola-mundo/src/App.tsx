import './App.css'
import { users, User } from './constants/users'
import XFollowCard from './components/x-follow-card'

function App() {
  return (
    <section className="App">
      {users.map((user: User) => (
        <XFollowCard user={user} />
      ))}
    </section>
  )
}

export default App
