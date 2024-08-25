// src/components/Dashboard/StudyMaterials.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './StudyMaterials.css';

function StudyMaterials() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      const materialsCollection = await getDocs(collection(db, 'studyMaterials'));
      setMaterials(materialsCollection.docs.map(doc => doc.data()));
    };

    fetchMaterials();
  }, []);

  return (
    <div className="study-materials-container">
      <h1>Study Materials</h1>
      <ul>
        {materials.map((material, index) => (
          <li key={index}>{material.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudyMaterials;
