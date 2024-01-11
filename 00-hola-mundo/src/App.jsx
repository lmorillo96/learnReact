import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

  return (
    <section className='TwCard'>
        <TwitterFollowCard userName="kikobeats" isFollowing>
          Kiko Beats  
        </TwitterFollowCard>

        <TwitterFollowCard userName="midudev" isFollowing={false}>
          Miguel Durán
        </TwitterFollowCard>

        <TwitterFollowCard userName="lmorillo96" isFollowing={false}>
          Leandro Morillo
        </TwitterFollowCard>

    </section>
  );
}