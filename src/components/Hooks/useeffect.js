// 🔁 useEffect is a React Hook that lets you run code when something happens in your component 
// — like when it mounts (loads), updates, or unmounts (closes).

// A side-effect hook.
// It runs after rendering, not during it.
// Used for: fetching data, timers, subscriptions, and more.

// 🔄 2. Dependency Array: The Brain of useEffect

// useEffect(() => {
//   console.log("Runs when 'count' changes");
// }, [count]);
// What it means:
// If count changes, the effect runs.

// If you pass an empty array [], it runs only once.

// ⚠️ Forgetting to add dependencies can lead to bugs or stale data.

// 1. What will useEffect(() => {}, []) do?
// a) Run on every render
// b) Run only when state changes
// c) Run only once when the component mounts ✅

// 2. Which dependency will trigger this effect?

// useEffect(() => {
//   console.log("Triggered");
// }, [name, age]);
// a) When name or age change ✅
// b) Only once
// c) Never

// 3. What is the purpose of the return function in useEffect?
// a) To cause a re-render
// b) To clean up before unmount ✅
// c) To return JSX

