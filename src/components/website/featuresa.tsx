import React from "react";
import { AiOutlineSecurityScan, AiOutlineClockCircle } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

const Featuresa = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Header décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white h-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Titre animé */}
        <div className="text-center mb-16">
          <h2 className="inline-block relative text-4xl font-bold text-[#007E3A] transform hover:scale-105 transition-transform duration-300">
            Pourquoi choisir TaxiBe ?
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FC3D32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </h2>
        </div>

        {/* Grille de features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<AiOutlineSecurityScan className="w-12 h-12 text-[#FC3D32] transition-all duration-300 group-hover:scale-110" />}
            title="Sécurité"
            description="Tous nos chauffeurs sont certifiés et nos véhicules régulièrement entretenus."
          />
          <FeatureCard
            icon={<AiOutlineClockCircle className="w-12 h-12 text-[#FC3D32] transition-all duration-300 group-hover:scale-110" />}
            title="Ponctualité"
            description="Nous nous engageons à respecter les horaires et à vous faire arriver à l'heure."
          />
          <FeatureCard
            icon={<BiUser className="w-12 h-12 text-[#FC3D32] transition-all duration-300 group-hover:scale-110" />}
            title="Coopératives locales"
            description="En choisissant TaxiBe, vous soutenez les coopératives locales de Madagascar."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="group relative p-6 hover:-translate-y-2 transition-all duration-300 ease-in-out">
    {/* Fond avec effet de survol */}
    <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform transition-all duration-300 group-hover:shadow-2xl" />
    
    {/* Contenu */}
    <div className="relative space-y-4">
      {/* Conteneur d'icône avec animation */}
      <div className="relative h-16 w-16 mx-auto">
        <div className="absolute inset-0 bg-[#FC3D32]/10 rounded-full transform transition-all duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Titre avec animation */}
      <div className="text-center transform transition-all duration-300 group-hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-[#007E3A] mb-2">{title}</h3>
        <div className="h-0.5 w-10 bg-[#FC3D32] mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>

      {/* Description avec animation de fondu */}
      <p className="text-gray-600 text-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
    </div>
  </div>
);

export default Featuresa;



// const Featuresa = () => {
//   return (
//     <>
//       <div id="features" className="container mx-auto max-w-5xl flex gap-12 mt-10 pt-24 pb-10  px-8
//        flex-wrap items-start justify-center md:justify-between">
//         <div className="grid gap-4 justify-items-center text-center md:flex-1">
//           <div className=" rounded-full border-8 border-amber-400 p-4 ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-14 h-14"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
//               ></path>
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold">Safe</h3>
//           <p>Our products are secure and private out-of-the-box</p>
//         </div>
//         <div className="grid gap-4 justify-items-center text-center md:flex-1">
//           <div className=" rounded-full border-8 border-amber-400 p-4 ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-14 h-14"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
//               ></path>
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold">Efficient</h3>
//           <p>Feel good about your wallet and the environment</p>
//         </div>
//         <div className="grid gap-4 justify-items-center text-center md:flex-1">
//           <div className=" rounded-full border-8 border-amber-400 p-4 ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-14 h-14"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
//               ></path>
//             </svg>
//           </div>
//           <h3 className="text-3xl font-bold">Proven</h3>
//           <p>Leading the Smart Home world for 10 years</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Featuresa;
