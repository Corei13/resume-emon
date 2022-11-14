# How to commit and push your code

## Branching

Create a separate branch and pull request as soon as you start working on a new part. This will make it easier for us to review your code as you make progress.

Name the branch as `yourname/part-X` and the PR as `Part X: <title>`.

**Do not push anything to `master` branch**. You should always create a new branch and a PR for every new part you work on.

Push early and often, with small commits -- instead of one big commit at the end.

## Commit messages

The commit messages should be:

- descriptive yet short
- imperative
- all lowercase or properly capitalized -- as long as they are consistent

Examples:

- `add new button component` (good)
- `added new button component` -- not imperative
- `working on button component` -- not imperative, should be `add new button component (in progress)`
- `Button component` -- not descriptive
- `button x now works` -- not imperative, should be `fix button x` or better yet `fix button x to do y`

## Pull requests

- create a new PR for every new part you work on, as soon as you start working on it
- always include the PR links that you are currently working on as part of your [day end updates in slack](/docs/communications.md#end-of-the-day-update)
- when creating PR, make sure you select the [correct base branch](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request) (`master` for your first PR, the previous branch for subsequent PRs)
  - this is to ensure, for each PR, we can only see the changes that you made for that part
