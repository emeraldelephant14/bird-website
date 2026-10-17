function BirdingList({ birds, onRemove }) {
  return (
    <section className="birding-list" aria-labelledby="birding-list-heading">
      <div className="birding-list__header">
        <div>
          <p className="bird-details__eyebrow">Your collection</p>
          <h2 id="birding-list-heading">My Birding List</h2>
        </div>
        <p className="birding-list__total" aria-live="polite">
          {birds.length} {birds.length === 1 ? 'bird' : 'birds'} saved
        </p>
      </div>

      {birds.length === 0 ? (
        <p className="birding-list__empty">
          Your list is empty. Explore a bird and add it to start planning your
          birding day.
        </p>
      ) : (
        <ul className="birding-list__items">
          {birds.map((bird) => (
            <li className="birding-list__item" key={bird.id}>
              <div>
                <span className="birding-list__name">{bird.name}</span>
                <span className="bird-card__scientific">{bird.scientificName}</span>
              </div>
              <button
                className="birding-list__remove"
                type="button"
                onClick={() => onRemove(bird.id)}
                aria-label={`Remove ${bird.name} from your birding list`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default BirdingList
