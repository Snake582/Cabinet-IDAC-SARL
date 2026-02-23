"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Bien {
  id: number;
  title: string;
  type: string;
  location: string;
  price: number;
  surface: string;
  status: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Dashboard() {
  const [biens, setBiens] = useState<Bien[]>([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`${API_URL}/biens`)
      .then((res) => res.json())
      .then((data) => setBiens(data));
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Supprimer ce bien ?")) return;

    await fetch(`${API_URL}/biens/${id}`, {
      method: "DELETE",
    });

    setBiens((prev) => prev.filter((b) => b.id !== id));
  };

  const filteredBiens = biens.filter((bien) =>
    bien.title.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "disponible":
        return "bg-green-100 text-green-700";
      case "vendu":
        return "bg-red-100 text-red-700";
      case "loué":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">

      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-6">

        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Gestion des Biens</h1>

          <button
            onClick={() => router.push("/admin/ajouter")}
            className="bg-black text-white px-5 py-2 rounded-xl"
          >
            + Ajouter
          </button>
        </div>

        <input
          type="text"
          placeholder="Rechercher par titre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-xl mb-6"
        />

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto border rounded-xl">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-xs uppercase text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Titre</th>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left">Localisation</th>
                <th className="px-4 py-3 text-left">Prix</th>
                <th className="px-4 py-3 text-left">Surface</th>
                <th className="px-4 py-3 text-left">Statut</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredBiens.map((bien) => (
                <tr key={bien.id}>
                  <td className="px-4 py-3">{bien.title}</td>
                  <td className="px-4 py-3">{bien.type}</td>
                  <td className="px-4 py-3">{bien.location}</td>
                  <td className="px-4 py-3">{bien.price.toLocaleString()} FCFA</td>
                  <td className="px-4 py-3">{bien.surface}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(bien.status)}`}>
                      {bien.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-3">
                    <button
                      onClick={() => router.push(`/admin/biens/modifier/${bien.id}`)}
                      className="text-blue-600"
                    >
                      Modifier
                    </button>

                    <button
                      onClick={() => handleDelete(bien.id)}
                      className="text-red-600"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {filteredBiens.map((bien) => (
            <div key={bien.id} className="bg-white border rounded-xl p-4 shadow space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">{bien.title}</h2>
                <span className={`px-2 py-1 rounded text-xs ${getStatusStyle(bien.status)}`}>
                  {bien.status}
                </span>
              </div>

              <p className="text-sm text-gray-600">📍 {bien.location}</p>
              <p className="text-sm">🏷 {bien.type}</p>
              <p className="font-semibold">{bien.price.toLocaleString()} FCFA</p>
              <p className="text-sm">Surface : {bien.surface}</p>

              <div className="flex gap-4 pt-2">
                <button
                  onClick={() => router.push(`/admin/biens/modifier/${bien.id}`)}
                  className="text-blue-600 text-sm"
                >
                  Modifier
                </button>

                <button
                  onClick={() => handleDelete(bien.id)}
                  className="text-red-600 text-sm"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}