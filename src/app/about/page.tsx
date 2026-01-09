'use client'

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-12">

      {/* ================= PRÉSENTATION ================= */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-blue-900">
          Présentation du Cabinet IDAC SARL
        </h1>
        <p className="text-gray-700 mb-4">
          Le Cabinet IDAC est une structure spécialisée dans la gestion et la valorisation du patrimoine, ainsi que dans l&apos;accompagnement global des particuliers, entreprises et copropriétés. 
        </p>
        <p className="text-gray-700 mb-4">
          Fondé par Monsieur IBRAHIMA DIENG, qui capitalise plus de 17 ans de pratique notariale et ayant participé à plusieurs salons de l&apos;immobilier au Sénégal comme à l&apos;étranger. 
        </p>
        <p className="text-gray-700">
          Chez IDAC, notre priorité est d&apos;offrir un encadrement professionnel, sécurisé et orienté vers la réussite de vos projets.
        </p>
      </section>

      {/* ================= NOS MISSIONS ================= */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Nos missions</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Accompagner les propriétaires afin de les mettre en conformité avec l&apos;administration fiscale et faciliter leurs démarches et paiements d&apos;impôts.</li>
          <li>Assurer la gestion immobilière complète des biens locatifs et patrimoniaux.</li>
          <li>Accompagner les clients dans la vente, l&apos;achat ou la location de leurs biens.</li>
          <li>Assurer le syndic de copropriété avec rigueur et transparence.</li>
          <li>Conseiller les investisseurs pour optimiser leur patrimoine immobilier.</li>
        </ul>
      </section>

      {/* ================= NOS SERVICES ================= */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Nos services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Étude pour investissement immobilier</li>
          <li>Syndic de copropriété</li>
          <li>Ressources humaines</li>
          <li>Gestion locative</li>
          <li>Ventes de biens</li>
          <li>Fiscalité</li>
        </ul>
      </section>

      {/* ================= INFORMATIONS ================= */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Informations</h2>
        <ul className="text-gray-700 space-y-1">
          <li>✉️ Email : <a href="mailto:contact@cabinetidac.sn" className="text-blue-700 hover:underline">contact@cabinetidac.sn</a></li>
          <li>📞 Téléphone : <a href="tel:+221338239998" className='hover:underline text-blue-700'>+221 33 823 99 98</a></li>
          <li>📍 Adresse : 115 Rue Carnot × Jean Jaurès, Dakar, centre-ville</li>
        </ul>
      </section>

    </main>
  )
}
