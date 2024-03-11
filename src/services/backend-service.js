import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllItems = async () => {
  const collectionRef = collection(db, "products");
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getItemById = async (id) => {
  const docRef = doc(db, "products", id);
  const querySnapshot = await getDoc(docRef);
  if (!querySnapshot.exists()) {
    throw new Error("Document not found");
  }
  return { id: querySnapshot.id, ...querySnapshot.data() };
};
