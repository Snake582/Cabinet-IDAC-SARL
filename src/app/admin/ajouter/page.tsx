"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AjouterBien() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [surface, setSurface] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("disponible");

  const [mainImage, setMainImage] = useState<File | null>(null);
  const [images, setImages] = useState<FileList | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("title", title);
    formData.append("type", type);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("surface", surface);
    formData.append("description", description);
    formData.append("status", status);

    if (mainImage) formData.append("mainImage", mainImage);

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }

    const res = await fetch(`${API_URL}/biens`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      router.push("/admin/biens");
      router.refresh();
    } else {
      alert("Erreur lors de l'ajout");
    }
  };

  const inputStyle =
    "w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 text-sm placeholder-gray-400 transition-all duration-200 hover:bg-white hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 focus:bg-white";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8">

        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
          Ajouter un Bien
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Titre"
              className={inputStyle}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Type"
              className={inputStyle}
              onChange={(e) => setType(e.target.value)}
            />

            <input
              type="text"
              placeholder="Localisation"
              className={inputStyle}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              type="number"
              placeholder="Prix"
              className={inputStyle}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="number"
              placeholder="Surface (m²)"
              className={inputStyle}
              onChange={(e) => setSurface(e.target.value)}
            />

            <select
              className={inputStyle}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="disponible">Disponible</option>
              <option value="vendu">Vendu</option>
              <option value="loué">Loué</option>
            </select>

          </div>

          <textarea
            placeholder="Description"
            className={`${inputStyle} min-h-[120px] resize-none`}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Upload Section */}
          <div className="space-y-4">

            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                Image principale
              </label>
              <input
                type="file"
                className="w-full text-sm"
                onChange={(e) => {
                  if (e.target.files) setMainImage(e.target.files[0]);
                }}
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                Images secondaires
              </label>
              <input
                type="file"
                multiple
                className="w-full text-sm"
                onChange={(e) => {
                  if (e.target.files) setImages(e.target.files);
                }}
              />
            </div>

          </div>

          <button
            type="submit"
            className="w-full md:w-auto md:px-10 bg-blue-700 hover:bg-blue-800 active:scale-95 transition-all duration-200 text-white p-3 rounded-xl font-semibold shadow-md"
          >
            Ajouter le Bien
          </button>

        </form>
      </div>
    </div>
  );
}