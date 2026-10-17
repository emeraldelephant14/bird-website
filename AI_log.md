M3:
1. Add React Router to my app with a nav bar (Home + About), and explain each import.
2. Added React Router with a Home (/) and About (/) page, plus a nav bar with active-link styling. The existing starter screen and counter remain on Home.
3. I checked that the router was configured in the correct place and that the navigation links used React Router components rather than ordinary links that reload the page.
4. I opened Home and About, clicked between the two pages, and checked that navigation worked without a full page reload.

1. Asked copilot to create card components with bird names and passed different props to each instance
2. Copilot created a reusable component and passed different props from the parent component to each instance.
3. If a card displayed undefined, I checked for mismatched prop names.
4. I confirmed that all three cards appeared with different content and that changing a prop in the parent changed the corresponding card

1. Told copilot to use a useState value changes something on screen when I act. When I click a bird, it says info about habitat, lifespan, diet, etc.
2. Clicking a card updates useState, which controls the selected card and the details panel
3. I did not fix anything, but asked it to change some incorrect info about the birds
4. I was able to click on cards and see information

1. render a list from json with .map()
2. The bird records are rendered with .map() in Home.jsx and passed as props to the reusable BirdCard.jsx
3. nothing
4. Home passes props to each BirdCard

1. Add button adds that item to a cart array in state, like a birding list
2. It successfully added a Birding List to home page
3. nothing to change
4. Tried adding birds to the birding list and it worked