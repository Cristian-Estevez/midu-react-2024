import { useState } from 'react'
import { User } from '../constants/users'

type Props = {
  user: User
}

const formatUsername = (username: string) => {
  return `@${username}`
}

export default function XFollowCard({ user }: Props) {
  const [isFollowing, setIsFollowing] = useState<boolean>(user.isFollowing)
  const { username, name } = user
  const formatedUsername = formatUsername(username)

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={name}
          src={`/img/${username}.webp`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{formatedUsername}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-buttonText">{buttonText}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
