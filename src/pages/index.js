import { useEffect, useState } from 'react';

export default function Home() {
  const [places, setPlaces] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
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
    }

    fetchData();
  }, []);

  // Fonction pour filtrer les lieux en fonction du nom
  const filteredPlaces = places.filter(place =>
    place.type_lieu.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Travel The World</title>
      <main className="container mx-auto p-4 max-w-screen-xl">
        {}
        <div className="flex justify-center items-center mb-4">
          <input
            type="text"
            placeholder="Rechercher par nom"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-l-md"
          />
          <button
            onClick={() => {
              
            }}
            className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600"
          >
            Rechercher
          </button>
        </div>

        {}
        <ul className="grid grid-cols-1 gap-4">
          {filteredPlaces.map((place, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-800">{place.type_lieu}</h2>
              {place.type_lieu === "restaurant" && (
                <>
                  <p className="text-gray-600">Nombre d'étoiles : {place.starRating}</p>
                  <p className="text-gray-600">Nom : {place.nom_lieu}</p>
                  <p className="text-gray-600">Adresse : {place.adresse}</p>
                  <p className="text-gray-600">Ville : {place.ville}</p>
                  <p className="text-gray-600">Code postal : {place.code_postal}</p>
                  <p className="text-gray-600">Pays : {place.pays}</p>
                </>
              )}
              {place.type_lieu === "musée" && (
                <>
                  <p className="text-gray-600">Mouvement artistique: {place.artMovement}</p>
                  <p className="text-gray-600">Type d'art : {place.artType}</p>
                  <p className="text-gray-600">Nom : {place.nom_lieu}</p>
                  <p className="text-gray-600">Adresse : {place.adresse}</p>
                  <p className="text-gray-600">Ville : {place.ville}</p>
                  <p className="text-gray-600">Code postal : {place.code_postal}</p>
                  <p className="text-gray-600">Pays : {place.pays}</p>
                </>
              )}
              {place.type_lieu === "bar" && (
                <>
                  <p className="text-gray-600">Type de bar : {place.barType}</p>
                  <p className="text-gray-600">Nom : {place.nom_lieu}</p>
                  <p className="text-gray-600">Adresse : {place.adresse}</p>
                  <p className="text-gray-600">Ville : {place.ville}</p>
                  <p className="text-gray-600">Code postal : {place.code_postal}</p>
                  <p className="text-gray-600">Pays : {place.pays}</p>
                </>
              )}
              {place.type_lieu === "parc" && (
                <>
                  <p className="text-gray-600">Type de parc : {place.parkType}</p>
                  <p className="text-gray-600">Accès : {place.parkAccessType}</p>
                  <p className="text-gray-600">Nom : {place.nom_lieu}</p>
                  <p className="text-gray-600">Adresse : {place.adresse}</p>
                  <p className="text-gray-600">Ville : {place.ville}</p>
                  <p className="text-gray-600">Code postal : {place.code_postal}</p>
                  <p className="text-gray-600">Pays : {place.pays}</p>
                </>
              )}
              <p className="text-gray-600">Payé : {place.isPaid ? 'Oui' : 'Non'}</p>
              <p className="text-gray-600">Prix : {place.price} $</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
