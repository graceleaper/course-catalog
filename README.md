# Course Catalog React App

A React app that displays a list of computer programming courses. When user clicks on a tag, all courses tagged as such will be displayed.

## Challenges: 
- Keeping count of all the courses with a specific tag. Resolved using hash table.
- Displaying tags and course cards in a grid system. Resolved using CSS Flexbox.
- When trying to access tag as an argument for getSpecificCourses(), courses on click wouldn't render. Resolved with console.logging and finding out that I was initially fetching the tag object ({tag: tagName, count: 4}) when I should have used the tag key and value (tagObj.tag)

## Objectives (Tier 1)

1. Render a catalog of course cards. Each card shows its course's image and title. Courses found in `src/courses.js`.
2. Organize the cards into a three column grid.
3. Each course has tags, list all of them above the catalog
   - List of tags should be generated from the tags that exist on the courses
   - Tags should be sorted alphabetically
   - Tags should list the number of times they appear in all the courses
4. When a tag is clicked, show only the courses with that tag. Only one tag can be selected at a time; clicking a selected tag will show all courses.

## Bonus Objectives (Tier 2)

1. Show the course author name under the course titles on the cards.
   - Fetch course authors asyncronously from an endpoint in `src/fetchAuthorData.js`.
2. Make the grid and tags list responsive
3. Use  CSS skills to redesign the page, add animations, or any other changes to improve the user experience.

###CSS Ideas:
- Google font(s) for entire page
- Rounded corners for buttons
- Box shadow for course cards
- "Pro" tag in border with rounded corners. Also have red background
- 
- Animations when rendering all course cards
- Tag buttons that are darkened/different color when selected