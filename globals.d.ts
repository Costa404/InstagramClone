// globals.d.ts

import firebase from "firebase/app"; // ou 'firebase/compat/app' dependendo da versão

declare global {
  interface Window {
    firebase: typeof firebase;
  }
}

export {};
