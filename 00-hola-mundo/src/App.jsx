import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <section className='TwCard'>
        <TwitterFollowCard isFollowing={true} username="kikobeats" name="Kiko Beats"/>
        <TwitterFollowCard isFollowing={false} username="midudev" name="Miguel Durán"/>
    </section>
  );
}