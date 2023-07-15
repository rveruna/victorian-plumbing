# Victorian Plumbing Tech Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Technical Task

We’d like to find out a bit more about how you approach problem-solving by completing a technical exercise. You should aim to spend around 2-3 hours on this technical task, but are free to spend as much or little of those 2-3 hours as you wish. Please upload your code sample to GitHub and submit the link. Don’t worry if you don’t complete the task, can’t get the code to compile or have any other issues. We’re most interested in seeing how it is you tackle problem-solving, and we’re looking to understand why you’ve made the decisions you have when it comes to your solution.

Your solution will provide the basis for your technical interview where we will explore extending your solution given certain business challenges. If you don’t finish then don’t worry just send over what you’ve got.

To be clear that while we practise TDD in some of our teams, unit tests are not required for this task – we will not look at them, and they will not be considered when evaluating your task.

### E-Commerce Listing Page Task

Please choose one or multiple parts below you feel best reflects your abilities.

- Generate a grid of product cards from the listing results of static json we’ve provided
- Generate a grid of product cards from the listing results using our API
- Add to your list of product cards by adding Sort by filters and/ or pagination functionality
- Show us what you got? Use our data to build anything you want (keep it safe for work)

### API

Here is our publicly available API: https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI

Example body schema for the provided POST endpoint:
`{
  "query": "toilets",
  "pageNumber": 0,
  "size": 0,
  "additionalPages": 0,
  "sort": 1
}`

- query is the slug of the listing page e.g. “toilets” or “baths/corner-baths”
- pageNumer, size and additionalPages are all used for pagination.
- Sort accepts integers which correspond to the following values:
- 1 = recommended
- 2 = PriceLowToHight
- 3 = PriceHighToLow
- 4 = LargestDiscount

## Solution

- Created easily readable structure
- Added Victorian Plumbing logo as a header
- Added Redux Store for state management
- Added filters and products reducers
- Used Grid and Flex for responsive layout
- Fetched the data using RTK thunk
- Displayed the images, name, prices of products in the cards
- Created useProduct custom hook
- Displayed star ratings
- Added Error, Loading components
- Added Pagination component
- Created usePagination custom hook
- Added filtering by price

<img width="1319" alt="solution_screenshot" src="https://github.com/rveruna/victorian-plumbing/assets/15161568/67663c04-068a-4429-ad49-e37591236453">

