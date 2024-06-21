export type User = {
  username: string
  name: string
  isFollowing: boolean
}

export const users: User[] = [
  { username: 'SpikeBountyHunter', name: 'Spike Spiegel', isFollowing: true },
  { username: 'FayeBountyHunter', name: 'Faye Valentine', isFollowing: false },
  { username: 'JetBountyHunter', name: 'Jet Black', isFollowing: false }
]
