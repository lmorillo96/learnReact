import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
  {
    userName: 'lmorillo96',
    name: 'Leandro Morillo',
    isFollowing: true
  },
  {
    userName: 'kikobeats',
    name: 'Kiko Beats',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Durán',
    isFollowing: false
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className='TwCard'>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return  (
            <TwitterFollowCard 
              userName={userName} 
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    {/*Un comentario*/}
    </section>
  )
}