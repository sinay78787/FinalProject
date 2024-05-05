import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AddLoc() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    type_lieu: "",
    nom_lieu: "",
    adresse: "",
    ville: "",
    code_postal: "",
    pays: "",
    isPaid: false,
    price: 1,
    artMovement: "",
    artType: "",
    starRating: 1, 
    barType: "", 
    parkType: "", 
    parkAccessType: "", 
  });

  const handleTypeChange = (event) => {
    setFormData({
      ...formData,
      type_lieu: event.target.value
    });
  };

  const handleNomLieuChange = (event) => {
    setFormData({
      ...formData,
      nom_lieu: event.target.value
    });
  };

  const handleAdresseChange = (event) => {
    setFormData({
      ...formData,
      adresse: event.target.value
    });
  };

  const handleVilleChange = (event) => {
    setFormData({
      ...formData,
      ville: event.target.value
    });
  };

  const handleCodePostalChange = (event) => {
    setFormData({
      ...formData,
      code_postal: event.target.value
    });
  };

  const handlePaysChange = (event) => {
    setFormData({
      ...formData,
      pays: event.target.value
    });
  };

  const handleArtMovementChange = (event) => {
    setFormData({
      ...formData,
      artMovement: event.target.value
    });
  };
  
  const handleArtTypeChange = (event) => {
    setFormData({
      ...formData,
      artType: event.target.value
    });
  };

  const handlePaidChange = (event) => {
    setFormData({
      ...formData,
      isPaid: event.target.checked
    });
  };

  const handlePriceChange = (event) => {
    setFormData({
      ...formData,
      price: parseInt(event.target.value)
    });
  };

  const handleStarRatingChange = (event) => {
    setFormData({
      ...formData,
      starRating: parseInt(event.target.value)
    });
  };

  const handleBarTypeChange = (event) => {
    setFormData({
      ...formData,
      barType: event.target.value
    });
  };

  const handleParkTypeChange = (event) => {
    setFormData({
      ...formData,
      parkType: event.target.value
    });
  };

  const handleParkAccessTypeChange = (event) => {
    setFormData({
      ...formData,
      parkAccessType: event.target.value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/travels", formData);
      if (response.status === 201) {
        router.push('/');
      } else {
        console.error('Erreur lors de la sauvegarde du lieu');
      }
    } catch (error) {
      console.error('Erreur lors de la requête API :', error);
    }
  };

  const displayPrixField = () => {
    return (formData.type_lieu === "restaurant" || formData.type_lieu === "musée" || formData.type_lieu === "bar" || formData.type_lieu === "parc") && formData.isPaid;
  };

  return (
    <>
      <Head>
        <title>Travel The World</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
      </Head>

      <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type_lieu">
            Type de lieu <span className="text-red-500">*</span>
          </label>
          <select 
            id="type_lieu" 
            name="type_lieu" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            required
            onChange={handleTypeChange}
          >
            <option value="">Sélectionner le type de lieu</option>
            <option value="restaurant">Restaurant</option>
            <option value="musée">Musée</option>
            <option value="bar">Bar</option>
            <option value="parc">Parc</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom_lieu">
            Nom du lieu <span className="text-red-500">*</span>
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="nom_lieu" 
            type="text" 
            name="nom_lieu" 
            placeholder="Entrez le nom du lieu" 
            value={formData.nom_lieu}
            onChange={handleNomLieuChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adresse">
            Adresse <span className="text-red-500">*</span>
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="adresse" 
            type="text" 
            name="adresse" 
            placeholder="Entrez l'adresse" 
            value={formData.adresse}
            onChange={handleAdresseChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ville">
            Ville <span className="text-red-500">*</span>
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="ville" 
            type="text" 
            name="ville" 
            placeholder="Entrez la ville" 
            value={formData.ville}
            onChange={handleVilleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code_postal">
            Code postal <span className="text-red-500">*</span>
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="code_postal" 
            type="text" 
            name="code_postal" 
            placeholder="Entrez le code postal" 
            value={formData.code_postal}
            onChange={handleCodePostalChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pays">
            Pays <span className="text-red-500">*</span>
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="pays" 
            type="text" 
            name="pays" 
            placeholder="Entrez le pays" 
            value={formData.pays}
            onChange={handlePaysChange}
            required
          />
        </div>

        {displayPrixField() && (
          <div className="champs_lieu">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prix">
              Prix (1-5)
            </label>
            <select 
              id="prix" 
              name="prix" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={formData.price}
              onChange={handlePriceChange}
            >
              {[1, 2, 3, 4, 5].map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
        )}

        {formData.type_lieu === "restaurant" && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="starRating">
              Nombre d'étoiles (1-3)
            </label>
            <select 
              id="starRating" 
              name="starRating" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={formData.starRating}
              onChange={handleStarRatingChange}
            >
              {[1, 2, 3].map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
        )}

        {formData.type_lieu === "bar" && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="barType">
              Type de bar
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="barType" 
              type="text" 
              name="barType" 
              placeholder="Entrez le type de bar" 
              value={formData.barType}
              onChange={handleBarTypeChange}
            />
          </div>
        )}

        {formData.type_lieu === "parc" && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parkType">
                Type de parc
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="parkType" 
                type="text" 
                name="parkType" 
                placeholder="Entrez le type de parc" 
                value={formData.parkType}
                onChange={handleParkTypeChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parkAccessType">
                Accès (Public ou privé)
              </label>
              <select 
                id="parkAccessType" 
                name="parkAccessType" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                value={formData.parkAccessType}
                onChange={handleParkAccessTypeChange}
              >
                <option value="public">Public</option>
                <option value="privé">Privé</option>
              </select>
            </div>
          </>
        )}

        {formData.type_lieu === "musée" && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artMovement">
                Courant artistique
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="artMovement" 
                type="text" 
                name="artMovement" 
                placeholder="Entrez le courant artistique" 
                value={formData.artMovement}
                onChange={handleArtMovementChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artType">
                Type d'art
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="artType" 
                type="text" 
                name="artType" 
                placeholder="Entrez le type d'art" 
                value={formData.artType}
                onChange={handleArtTypeChange}
              />
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payant">
            Payant ?
          </label>
          <input 
            className="mr-2 leading-tight" 
            id="payant" 
            type="checkbox" 
            onChange={handlePaidChange}
          />
          <label className="text-sm" htmlFor="payant">
            Oui
          </label>
        </div>

        <div className="mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Ajouter le lieu
          </button>
        </div>
      </form>
    </>
  );
}
