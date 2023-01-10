# Creed Podcast Code Challenge

## Repository Contents
* React Codebase
* Vue Codebase

## Running instructions
To run either the React or Vue codebase perform the following commands
```
cd React
npm install
npm run dev
```
## Testing instructions
To test either the React or Vue codebase perform the following commands
```
cd React
npm run test
```

## About My Approach
### Vite
I used Vite to spin up both codebases. Vite is a tool that can quickly scaffold and setup applications in Vue, React, Preact, Lit, and Svelte. It has an emphasis both on speed, and scale. If you'd like to learn more about Vite you can read more [here](https://vitejs.dev/guide/why.html). If you're interested in learning about it's comparisons you can learn more [here](https://vitejs.dev/guide/comparisons.html). If you'd like to look at a direct comparison with Vite and CRA [check this out](https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/).

### Scoped Styling
As applications grow in size and complexity modularity becomes increasingly important. CSS and it's cascading effects can be a frustrating toolset to manage as code complexity increases. In both codebases I've included I'm scoping the styles.

#### React CSS Modules
React has great support for CSS modules. CSS modules allow for scoping styles, without having adverse effects on performance and scale.

#### Vue Scoped Styles
Vue offers scoped styles as part of its framework, it's styles are also included within the same file as the JSX and DOM markup.

### Unit Testing
I didn't get too in depth with my unit tests in each project. I did add a few different tests to ensure elements were rendered as expected, and events had the desired outcome. For testing these projects I used Vitest. Vitest is a newer alternative to Jest, however the concepts are largely the same. It's part of the Vite ecosystem and made sense to use. I used RTL for testing React and VTU for testing Vue.