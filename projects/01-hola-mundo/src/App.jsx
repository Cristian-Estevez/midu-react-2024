import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  { userName: 'SpikeBountyHunter', name: 'Spike Spiegel', isFollowing: true },
  { userName: 'FayeBountyHunter', name: 'Faye Valentine', isFollowing: false },
  { userName: 'JetBountyHunter', name: 'Jet Black', isFollowing: false }
];

export default function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
