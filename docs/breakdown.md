### Part 1 - problem page + modal
- create a new page `/challenge/test`
- create the layout according to figma
- use [MDX](https://nextjs.org/docs/advanced-features/using-mdx) to generate the problem statement component
- build a Modal component using [radix ui](https://www.radix-ui.com/docs/primitives/components/dialog)
  - radix is a headless ui library, which means it doesn't include any css style
  - in this project, you will write all css yourself - see [this doc](/docs/development.md) for more details
- show modal when clicking on *Start Test*

### Part 2 - code editor
- after starting test, show a code editor with preview using [sandpack](https://sandpack.codesandbox.io/)
- the design for this PR doesn't have to match exactly to figma, but the layout should match -- more specifically, include
  - top navar (the timer doesn't have to run for the PR)
  - code editor on the left side
  - two buttons: Browser, Challenge
  - browser preview or challenge statement based on the selected button above
- when user first starts a test, provide an initial file (`App.js`) 
with that renders **Hello re:cruit!**
- editing this file should update preview in browser
- create an endpoint `POST /api/challenge/test` that should save the code as a json blob in database as the user is typing
- add another endpoint `GET /api/challenge/test` to fetch saved code (if any) so that if user reloads the page, it shows the previously saved code

### Part 3 - authentication + dashboard
- create the login page
- setup authentication with google using `next-auth`
- when logged in, show the dashboard
- build **My Resumes** (`/resumes`) and **Challenges** (`/challenges`) page with dummy data
  - ignore pagination for Challenges page
  - the buttons on the resume list doesn't have to be functional

### Part 4 - hook resumes and challenges with users
- clicking on **Create a resume** should show the resume editor
- refactor the resume editor so it links to the logged in user when saving
- create an endpont to fetch all resumes for a user, and refactor **My Resumes** page to use this endpoint instead of dummy data
- clicking on any challenge in **Challenges** page should show the same page (`/challenge/test`)
- refactor the challenge flow so it links to the logged in user when saving the code

### Part 5/+ - details wil be added later
