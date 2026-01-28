'use client'

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-12">

      {/* ================= PRÉSENTATION ================= */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-blue-900">
          PRÉSENTATION DU CABINET IDAC SARL IMMOBILIER
        </h1>

        <p className="text-gray-700 mb-4">
          <span className="font-bold text-blue-900">Le Cabinet IDAC SARL</span> est une société de gestion immobilière,
          d’administration de biens et de syndic de copropriété, fondée par Monsieur{' '}
          <span className="font-bold text-blue-900">IBRAHIMA DIENG</span>,
          capitalisant plus de 15 ans de pratique notariale et ayant participé à plusieurs salons de l’immobilier
          au Sénégal comme à l’étranger.
        </p>

        <p className="text-gray-700">
          <span className="font-bold text-blue-900">Le Cabinet IDAC SARL</span> est idéalement situé au centre-ville de Dakar
          (Sénégal), au 115 Rue Carnot × Jean Jaurès, et existe depuis 2004 avec une équipe dévouée et expérimentée.
          Il offre un éventail complet de solutions en gestion immobilière ainsi que des services patrimoniaux
          innovants et personnalisés à des clients partout au Sénégal et à l’étranger.
          Le cabinet privilégie le conseil avant tout investissement, en tenant compte de la situation juridique,
          matrimoniale et fiscale de l’investisseur.
          Son credo est la satisfaction du client, avec une vision stratégique intégrant l’ensemble des besoins.
        </p>
      </section>

      {/* ================= NOS SERVICES ================= */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-blue-900">NOS SERVICES</h2>
        <p className="text-gray-700">
          Le Cabinet IDAC est spécialisé dans la gestion locative du patrimoine, l’administration de syndic
          de copropriété et la gestion de patrimoine. Face à l’abondance de la législation en matière immobilière,
          les rapports bailleur-locataire deviennent de plus en plus complexes.
          C’est pourquoi le Cabinet IDAC met à votre disposition son expertise dans la recherche de locataires,
          l’administration juridique et comptable des biens loués :
          rédaction des baux, états des lieux, déclarations fiscales, perception et recouvrement des loyers,
          gestion des dépenses, des travaux et des entretiens nécessaires.
        </p>
      </section>

      {/* ================= GESTION LOCATIVE ================= */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-blue-900">
          ADMINISTRATION DE BIENS – GESTION LOCATIVE
        </h2>

        <p className="text-gray-700 mb-4">
          Le Cabinet a mis en place un système général de gestion locative consistant à la détermination des
          charges d’exploitation des biens, ainsi qu’à la gestion locative proprement dite
          (taux de loyer, recouvrement et fiscalité).
        </p>

        <p className="text-gray-700 mb-2">
          À cet effet, notre offre globale de gestion répond aux besoins suivants :
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Proposer un système performant de gestion générale de l’immeuble</li>
          <li>Définir une stratégie marketing pour la location et la commercialisation des immeubles</li>
          <li>Proposer une tarification des loyers prévisionnels selon la zone et le potentiel des immeubles</li>
          <li>Établir un contrat de gestion adapté</li>
        </ul>
      </section>

      {/* ================= SYNDIC ================= */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-blue-900">SYNDIC DE COPROPRIÉTÉ</h2>

        <p className="text-gray-700 mb-2">
          Concernant le syndic de copropriété des immeubles, le Cabinet IDAC a pour mission :
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>D’assurer l’administration générale des biens</li>
          <li>D’assurer la conservation, la garde, l’entretien et d’intervenir en cas d’urgence</li>
          <li>De représenter le syndicat pour toutes démarches administratives</li>
          <li>De procéder à la reddition des comptes en fin d&apos;année lors de l&apos;Assemblée Générale.</li>
          <li>Administration des parties communes au nom du syndicat des copropriétaires par l&apos;accomplissement d&apos;actes assurant
            la conservation et la bonne gestion de la copropriété (recouvrement des appels de charges, maintenance de l&apos;immeuble et des équipements
            collectifs, gestion de la comptablité, représentation du syndicat auprès des tiers).</li>
          <li>Pour la stratégie commerciale des biens immobiliers, ce volet doit etre intégré en amont pour mieux rassurer les potentiels clients.</li>
        </ul>
      </section>

        {/* ================= BIENS ================= */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-blue-900">VENTE DE BIENS</h2>

        <p className="text-gray-700 mb-2">
          Pour la vente de biens, le Cabinet propose un mandat dans lequel il s&apos;engage par écrit sur écrit sur divers points :
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Les moyens de diffusion (sur no site, nos bornes interactives, la presse, mailing et sur internet);</li>
          <li>La stratégie commercialisation des biens établie de concert avec le client vendeur;</li>
          <li>La réalisation de photos grand angle pour une mise en valeur optimale du bien;</li>
          <li>La sécurité de la transaction;</li>
          <li>Le suivi de la vente;</li>
          <li>La valorisation du bien sur le marché.</li>
        </ul>
      </section>

      {/* ================= INFORMATIONS ================= */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Informations</h2>
        <ul className="text-gray-700 space-y-1">
          <li>
            ✉️ Email :{' '}
            <a
              href="mailto:contact@cabinetidac.sn"
              className="text-blue-700 hover:underline"
            >
              contact@cabinetidac.sn
            </a>
          </li>
          <li>
            📞 Téléphone :{' '}
            <a
              href="tel:+221338239998"
              className="text-blue-700 hover:underline"
            >
              +221 33 823 99 98
            </a>
          </li>
          <li>📍 Adresse : 115 Rue Carnot × Jean Jaurès, Dakar – Centre-ville</li>
        </ul>
      </section>

    </main>
  )
}
