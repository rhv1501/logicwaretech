// This file acts as a simple global state store that resets on hard reload
// but persists during Next.js internal client-side navigation.

export let globalIsInitialLoad = true;

export const setGlobalInitialLoadComplete = () => {
  globalIsInitialLoad = false;
};
