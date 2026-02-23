// app/admin/layout.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-blue-600 text-white p-6 transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

        <nav className="flex flex-col gap-5 text-sm font-medium">

          <Link
            href="/admin/dashboard"
            className="hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            href="/admin/biens"
            className="hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Biens
          </Link>

          <Link
            href="/admin/ajouter"
            className="hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Ajouter un bien
          </Link>

          <button
            onClick={handleLogout}
            className="mt-8 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-xl"
          >
            Déconnexion
          </button>
        </nav>
      </aside>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Topbar mobile */}
        <header className="md:hidden flex items-center justify-between bg-white shadow px-4 py-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-xl"
          >
            ☰
          </button>
          <h1 className="font-semibold">Admin</h1>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}