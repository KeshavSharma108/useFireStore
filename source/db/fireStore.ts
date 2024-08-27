// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { TaskType } from "../../types";

const firebaseConfig = {
  apiKey: "AIzaSyC88isw1L5oq0jx6zsybNQuACsSqvEYvGE",
  authDomain: "fblogin-11a6b.firebaseapp.com",
  projectId: "fblogin-11a6b",
  storageBucket: "fblogin-11a6b.appspot.com",
  messagingSenderId: "252293985262",
  appId: "1:252293985262:web:7713ce0e26ac14432a94ff",
  measurementId: "G-NZGW67PS78",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const fetchData = async (): Promise<TaskType[]> => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  const tasks: TaskType[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    createdAt: doc.data().createdAt,
    completedAt: doc.data().completedAt,
  }));

  return tasks;
};

export const streamTasks = (observer) => {
  const unsubscriber = onSnapshot(collection(db, "tasks"), observer);
  return unsubscriber;
};

export { db };
