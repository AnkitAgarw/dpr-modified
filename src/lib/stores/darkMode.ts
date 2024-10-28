// src/lib/stores/darkMode.ts
import { writable } from 'svelte/store';

export const darkMode = writable(true);

darkMode.subscribe((value) => {
    console.log('darkMode', value);
}  );

if (typeof window !== 'undefined') {
  const storedPreference = localStorage.getItem('darkMode');
  if (storedPreference !== null) {
    darkMode.set(storedPreference === 'true');
  } else {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkMode.set(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => darkMode.set(e.matches);
    mediaQuery.addEventListener('change', handler);
  }

  darkMode.subscribe((value) => {
    localStorage.setItem('darkMode', value.toString());
    if (value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
}
