export function TwitterFollowCard({ children, userName = 'Unknown', isFollowing }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="TW Avatar"
          src= {`https://unavatar.io/twitter/${userName}`}     
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-userName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
