## Pull requests

1. [Immediate Bugs and Anti-Patterns](https://github.com/Grygoree/Solace-Private-Gregory-Leung/pull/1)
2. [Styling for the directory table](https://github.com/Grygoree/Solace-Private-Gregory-Leung/pull/2)
3. [Hypothetical Pagination](https://github.com/Grygoree/Solace-Private-Gregory-Leung/pull/3)

## If I spent more time on this

1. Use a DB
2. Add a search query param to the `/advocates` endpoint.
3. Implement DB with indices dedicated to text search.  Avoid strict text matching, and use Postgres indices dedicated to that kind of task.
4. Improve frontend state management and UI/UX.  I disabled the search feature due to time, but implementing it to be part of the fetch, introduces some complexity with the UI state.