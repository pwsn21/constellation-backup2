import { initializeApp } from "firebase/app"

export default defineNuxtPlugin(nuxtApp => {
         const firebaseConfig = {
            apiKey: "AIzaSyCH1YDxNNV80KivCaHkeF8UxDFQ6W0KQHw",
            authDomain: "constellation-9337e.firebaseapp.com",
            projectId: "constellation-9337e",
            storageBucket: "constellation-9337e.appspot.com",
            messagingSenderId: "892908307091",
            appId: "1:892908307091:web:7da0de85fb0c22a1ac0366"
        };
     const app = initializeApp(firebaseConfig);
          
     initUser();
     }
)