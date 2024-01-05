export function TwitterFollowCard({ username, name, isFollowing }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="TW Avatar"
          src= {`https://unavatar.io/twitter/${username}`}     
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-userName">@{username}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
