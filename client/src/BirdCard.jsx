function BirdCard({ bird, isSelected, onSelect }) {
  return (
    <li>
      <button
        className={`bird-card${isSelected ? ' selected' : ''}`}
        type="button"
        onClick={() => onSelect(bird)}
        aria-pressed={isSelected}
      >
        <span className="bird-card__name">{bird.name}</span>
        <span className="bird-card__scientific">{bird.scientificName}</span>
        <span className="bird-card__prompt">View bird details</span>
      </button>
    </li>
  )
}

export default BirdCard
