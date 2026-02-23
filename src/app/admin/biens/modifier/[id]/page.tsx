"use client";

import { useEffect, useState, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";

interface ImageData {
  id: number;
  url: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ModifierBien() {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [surface, setSurface] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("disponible");

  const [mainImage, setMainImage] = useState<File | null>(null);
  const [images, setImages] = useState<FileList | null>(null);

  const [existingImages, setExistingImages] = useState<ImageData[]>([]);
  const [deletedImages, setDeletedImages] = useState<number[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchBien = async () => {
      const res = await fetch(`${API_URL}/biens/${id}`);
      const data = await res.json();

      setTitle(data.title || "");
      setType(data.type || "");
      setLocation(data.location || "");
      setPrice(data.price || "");
      setSurface(data.surface || "");
      setDescription(data.description || "");
      setStatus(data.status || "disponible");

      if (data.images?.length) {
        setExistingImages(data.images);
      }
    };

    fetchBien();
  }, [id]);

  const removeExistingImage = (idToRemove: number) => {
    setExistingImages((prev) =>
      prev.filter((img) => img.id !== idToRemove)
    );
    setDeletedImages((prev) => [...prev, idToRemove]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) return alert("ID invalide");

    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      const formData = new FormData();

      formData.append("title", title);
      formData.append("type", type);
      formData.append("location", location);
      formData.append("price", price);
      formData.append("surface", surface);
      formData.append("description", description);
      formData.append("status", status);

      if (deletedImages.length > 0) {
        formData.append("deletedImages", JSON.stringify(deletedImages));
      }

      if (mainImage) formData.append("mainImage", mainImage);

      if (images) {
        for (let i = 0; i < images.length; i++) {
          formData.append("images", images[i]);
        }
      }

      const res = await fetch(`http://localhost:3000/biens/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token || ""}`,
        },
        body: formData,
      });

      if (!res.ok) {
        alert("Erreur serveur");
        return;
      }

      alert("Modification réussie ✅");
      router.push("/admin/biens");
      router.refresh();
    } catch (error) {
      alert("Erreur critique");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10">

        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Modifier le Bien
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Champs principaux */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input type="text" placeholder="Titre" className="input-style" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Type" className="input-style" value={type} onChange={(e) => setType(e.target.value)} />
            <input type="text" placeholder="Localisation" className="input-style" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input type="number" placeholder="Prix" className="input-style" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="number" placeholder="Surface (m²)" className="input-style" value={surface} onChange={(e) => setSurface(e.target.value)} />

            <select className="input-style" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="disponible">Disponible</option>
              <option value="vendu">Vendu</option>
              <option value="loué">Loué</option>
            </select>

          </div>

          <textarea
            placeholder="Description"
            className="input-style min-h-[140px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Images existantes */}
          {existingImages.length > 0 && (
            <div>
              <h2 className="font-semibold mb-4 text-lg">Images existantes</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {existingImages.map((img) => (
                  <div key={img.id} className="relative group">
                    <img
                      src={`http://localhost:3000/uploads/${img.url}`}
                      className="w-full h-28 object-cover rounded-xl shadow"
                    />

                    <button
                      type="button"
                      onClick={() => removeExistingImage(img.id)}
                      className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs opacity-0 group-hover:opacity-100 transition"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload nouvelles images */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">
                Nouvelle image principale
              </label>
              <input type="file" className="w-full" onChange={(e) => e.target.files && setMainImage(e.target.files[0])} />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Ajouter des images secondaires
              </label>
              <input type="file" multiple className="w-full" onChange={(e) => e.target.files && setImages(e.target.files)} />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto md:px-10 bg-black hover:bg-gray-800 transition text-white p-3 rounded-xl font-semibold shadow-md disabled:opacity-60"
          >
            {loading ? "Sauvegarde en cours..." : "Sauvegarder les modifications"}
          </button>

        </form>
      </div>

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: 0.2s;
        }
        .input-style:focus {
          border-color: #000;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}