"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

export default function BiensPage() {
  const [biens, setBiens] = useState<Bien[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/biens`)
      .then((res) => res.json())
      .then((data) => setBiens(data))
      .finally(() => setLoading(false));
  }, []);

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

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Liste des biens</h1>

          <Link
            href="/admin/ajouter"
            className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-xl transition"
          >
            + Ajouter
          </Link>
        </div>

        {loading ? (
          <p>Chargement...</p>
        ) : biens.length === 0 ? (
          <p>Aucun bien disponible.</p>
        ) : (
          <>
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
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {biens.map((bien) => (
                    <tr key={bien.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{bien.title}</td>
                      <td className="px-4 py-3">{bien.type}</td>
                      <td className="px-4 py-3">{bien.location}</td>
                      <td className="px-4 py-3 font-semibold">
                        {bien.price.toLocaleString()} FCFA
                      </td>
                      <td className="px-4 py-3">{bien.surface}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(bien.status)}`}>
                          {bien.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {biens.map((bien) => (
                <div key={bien.id} className="bg-white border rounded-xl p-4 shadow space-y-2">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg">{bien.title}</h2>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusStyle(bien.status)}`}>
                      {bien.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">📍 {bien.location}</p>
                  <p className="text-sm">🏷 {bien.type}</p>
                  <p className="font-semibold">
                    {bien.price.toLocaleString()} FCFA
                  </p>
                  <p className="text-sm">Surface : {bien.surface}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}