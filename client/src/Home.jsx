import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import BirdCard from './BirdCard.jsx'
import BirdingList from './BirdingList.jsx'
import birds from './catalog.json'

function Home() {
  const [selectedBird, setSelectedBird] = useState(null)
  const [birdingList, setBirdingList] = useState([])

  function addToBirdingList(bird) {
    setBirdingList((currentList) =>
      currentList.some((item) => item.id === bird.id)
        ? currentList
        : [...currentList, bird],
    )
  }

  function removeFromBirdingList(birdId) {
    setBirdingList((currentList) =>
      currentList.filter((bird) => bird.id !== birdId),
    )
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Washington Birds</h1>
          <p>
            Meet four birds you can find across Washington. Choose one to learn more.
          </p>
        </div>
      </section>

      <section className="bird-explorer" aria-labelledby="bird-heading">
        <h2 id="bird-heading">Explore the birds</h2>
        <ul className="bird-list">
          {birds.map((bird) => (
            <BirdCard
              key={bird.id}
              bird={bird}
              isSelected={selectedBird?.id === bird.id}
              onSelect={setSelectedBird}
            />
          ))}
        </ul>

        {selectedBird ? (
          <article className="bird-details" aria-live="polite">
            <p className="bird-details__eyebrow">Bird field notes</p>
            <h3>{selectedBird.name}</h3>
            <p className="bird-details__scientific">{selectedBird.scientificName}</p>
            <dl>
              <div>
                <dt>Diet</dt>
                <dd>{selectedBird.diet}</dd>
              </div>
              <div>
                <dt>Habitat</dt>
                <dd>{selectedBird.habitat}</dd>
              </div>
              <div>
                <dt>Lifespan</dt>
                <dd>{selectedBird.lifespan}</dd>
              </div>
              <div>
                <dt>Fun fact</dt>
                <dd>{selectedBird.funFact}</dd>
              </div>
            </dl>
            <button
              className="bird-list-action"
              type="button"
              onClick={() => addToBirdingList(selectedBird)}
              disabled={birdingList.some((bird) => bird.id === selectedBird.id)}
            >
              {birdingList.some((bird) => bird.id === selectedBird.id)
                ? 'Added to birding list'
                : 'Add to birding list'}
            </button>
          </article>
        ) : (
          <p className="bird-hint">Select a bird above to see its field notes.</p>
        )}
        <p className="bird-source-note">
          Lifespans are approximate and vary with conditions in the wild.
        </p>
      </section>

      <BirdingList birds={birdingList} onRemove={removeFromBirdingList} />

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default Home
