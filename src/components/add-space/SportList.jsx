import { useState, useEffect } from "react";
import { ref, onValue, push, remove, update } from "firebase/database";
import db from "../../services/firebase";
import "./SportList.css";

function SportList() {
  const [sports, setSports] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State for search
  const [isEditing, setIsEditing] = useState(false); // Flag for edit mode
  const [editKey, setEditKey] = useState(null); // Store the key of the item being edited

  useEffect(() => {
    const dbRef = ref(db, "/sports");

    // Subscribe to real-time changes in Firebase
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const sportsArray = Object.keys(data).map((key) => ({
          key,
          brand: data[key].brand,
          model: data[key].model,
        }));
        setSports(sportsArray);
      } else {
        setSports([]);
      }
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  const addSport = (e) => {
    e.preventDefault();
    if (brand && model) {
      if (isEditing && editKey) {
        // If we are editing an existing item
        update(ref(db, `/sports/${editKey}`), { brand, model })
          .then(() => {
            setBrand("");
            setModel("");
            setError("");
            setIsEditing(false);
            setEditKey(null); // Clear edit state
          })
          .catch(() => setError("Error updating the sports space."));
      } else {
        // Add a new item
        push(ref(db, "/sports"), { brand, model })
          .then(() => {
            setBrand("");
            setModel("");
            setError("");
          })
          .catch(() => setError("Error adding the sports space."));
      }
    } else {
      setError("Please complete all fields.");
    }
  };

  const removeSport = (key) => {
    remove(ref(db, `/sports/${key}`)).catch(() =>
      setError("Error deleting the sports space.")
    );
  };

  const editSport = (key, currentBrand, currentModel) => {
    setIsEditing(true);
    setEditKey(key);
    setBrand(currentBrand); // Set current brand to input field
    setModel(currentModel); // Set current model to input field
  };

  // Filter sports based on search term
  const filteredSports = sports.filter(
    (s) =>
      s.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sport-list-container">
      <h1 className="title">🏟️ {isEditing ? "Edit Sports Space" : "Add Sports Spaces"}</h1>

      {/* Search field */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name or location"
        className="search-input"
      />

      <div className="sport-form-container">
        <form onSubmit={addSport}>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Name of the sports space"
            className="rounded-input"
          />
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Location of the sports space"
            className="rounded-input"
          />
          <button type="submit" className="btn-submit">
            {isEditing ? "Save Changes" : "Add Sports Space"}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="sport-list">
        {filteredSports.length > 0 ? (
          filteredSports.map((s) => (
            <div className="sport-item" key={s.key}>
              <p>
                {s.brand} - {s.model}
              </p>
              <button className="btn-delete" onClick={() => removeSport(s.key)}>
                Delete
              </button>
              <button
                className="btn-edit"
                onClick={() => editSport(s.key, s.brand, s.model)}
              >
                Edit
              </button>
            </div>
          ))
        ) : (
          <p className="no-sports">
            No sports spaces registered or do not match the search.
          </p>
        )}
      </div>
    </div>
  );
}

export default SportList;
