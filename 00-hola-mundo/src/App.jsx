import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

  return (
    <section className='TwCard'>
        <TwitterFollowCard userName="kikobeats">
          Kiko Beats  
        </TwitterFollowCard>

        <TwitterFollowCard userName="midudev">
          Miguel Durán
        </TwitterFollowCard>

        <TwitterFollowCard userName="lmorillo96">
          Leandro Morillo
        </TwitterFollowCard>

    </section>
  );
}