import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Edit() {
  const [places, setPlaces] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/travels');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('Data fetched:', data);
      setPlaces(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deletePlace = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/travels/${id}`);
      setPlaces(prevPlaces => prevPlaces.filter(place => place._id !== id));
    } catch (error) {
      console.error('Error deleting place:', error);
    }
  };

  const editPlace = (place) => {
    // Logic for editing a place
  };

  const filteredPlaces = places.filter(place =>
    place.type_lieu.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Travel The World</title>
      <main className="container mx-auto p-4 max-w-screen-xl">
        <div className="flex justify-center items-center mb-4">
          <input
            type="text"
            placeholder="Rechercher par nom"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-l-md"
          />
          <button
            onClick={fetchData} 
            className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600"
          >
            Rechercher
          </button>
        </div>

        <ul className="grid grid-cols-1 gap-4">
          {filteredPlaces.map((place, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-800">{place.type_lieu}</h2>
              {place.type_lieu === "restaurant" && (
                <>
                  <p className="text-gray-600">Nombre d'étoiles : {place.starRating}</p>
                </>
              )}
              {place.type_lieu === "musée" && (
                <>
                  <p className="text-gray-600">Mouvement artistique: {place.artMovement}</p>
                </>
              )}
              {place.type_lieu === "bar" && (
                <>
                  <p className="text-gray-600">Type de bar : {place.barType}</p>
                </>
              )}
              {place.type_lieu === "parc" && (
                <>
                  <p className="text-gray-600">Type de parc : {place.parkType}</p>
                  <p className="text-gray-600">Accès : {place.parkAccessType}</p>
                </>
              )}
              <p className="text-gray-600">Payé : {place.isPaid ? 'Oui' : 'Non'}</p>
              <p className="text-gray-600">Prix : {place.price} $</p>
              <div className="flex mt-4">
                <button onClick={() => deletePlace(place._id)} className="bg-red-500 text-white py-2 px-4 rounded-md mr-4 hover:bg-red-600">Supprimer</button>
                <button onClick={() => editPlace(place)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Modifier</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
