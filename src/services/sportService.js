import db from "../services/firebase";
import { ref, get, remove, push } from "firebase/database";

// Reference to the "sports" collection in the database
const dbRef = ref(db, "/sports");

// Function to get all "sports" from Firebase
const getAllSports = () => {
  return get(dbRef);
};

// Function to add a new "sport" to Firebase
const addSport = (brand, model) => {
  return push(dbRef, {
    brand: brand,
    model: model
  });
};

// Function to remove a "sport" by its key in Firebase
const removeSport = (key) => {
  const dbRefSport = ref(db, `/sports/${key}`);
  return remove(dbRefSport);
};

export default {
  getAllSports,
  addSport,
  removeSport,
};
