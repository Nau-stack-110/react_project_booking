import { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import io from "../../assets/question-mark-query-information-support-service-graphic.jpg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Comment puis-je créer un compte ?",
      answer: "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut à droite de la page. Remplissez le formulaire avec vos informations personnelles et suivez les instructions."
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer: "Nous acceptons les cartes Visa, Mastercard, Mobile Money (MVola, Orange Money, Airtel Money) et les virements bancaires."
    },
    {
      question: "Quel est le délai de livraison ?",
      answer: "Le délai de livraison varie entre 24h et 72h selon votre localisation à Madagascar. Pour Antananarivo, la livraison est possible sous 24h."
    },
    {
      question: "Comment puis-je suivre ma commande ?",
      answer: "Une fois votre commande confirmée, vous recevrez un numéro de suivi par email. Vous pourrez suivre votre colis en temps réel depuis votre espace client."
    },
    {
      question: "Quelle est votre politique de retour ?",
      answer: "Nous acceptons les retours dans un délai de 7 jours après réception. Le produit doit être dans son état d'origine, non utilisé et dans son emballage d'origine."
    },
    {
      question: "Proposez-vous des réductions pour les achats en gros ?",
      answer: "Oui, nous offrons des tarifs préférentiels pour les achats en gros. Contactez notre service commercial pour plus d'informations."
    },
    {
      question: "Comment contacter le service client ?",
      answer: "Vous pouvez nous contacter par email à support@example.mg, par téléphone au +261 34 00 000 00, ou via le formulaire de contact sur notre site."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 mt-5">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#FF3333] to-[#007E3A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Centre d&apos;Aide
          </h1>
          <p className="text-white text-lg">
            Trouvez rapidement des réponses à vos questions
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Questions */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <FaQuestionCircle className="text-[#FF3333] text-xl" />
                    <h3 className="font-medium text-gray-800">{item.question}</h3>
                  </div>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-[#007E3A]" />
                  ) : (
                    <FaChevronDown className="text-[#007E3A]" />
                  )}
                </button>
                <div
                  className={`px-4 transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? 'max-h-48 py-4 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center lg:order-last">
            <img
              src={io}
              alt="FAQ Illustration"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;



// const Faq = () => {
//   return (
//     <div>
//       <div
//         id="faq"
//         className="relative w-full bg-white px-6 pt-10 pb-8 mt-24
//        shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10"
//       >
//         <div className="mx-auto px-5">
//           <div className="flex flex-col items-center">
//             <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
//               FAQ
//             </h2>
//             <p className="mt-3 text-lg text-neutral-500 md:text-xl">
//               Frequenty asked questions
//             </p>
//           </div>
//           <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
//             <div className="py-5">
//               <details className="group">
//                 <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//                   <span> Directives de paiment?</span>
//                   <span className="transition group-open:rotate-180">
//                     <svg
//                       fill="none"
//                       height="24"
//                       shapeRendering="geometricPrecision"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       viewBox="0 0 24 24"
//                       width="24"
//                     >
//                       <path d="M6 9l6 6 6-6"></path>
//                     </svg>
//                   </span>
//                 </summary>
//                 <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
//                   <span className="text-red-600">VEUILLEZ NE PAS FERMER LA PAGE DE RÉSERVATION JUSQU&apos;À CE
//                   QUE VOUS AYEZ DÛMENT COMPLÉTÉ « l&apos;ÉTAPE 5 - CONFIRMATION
//                   » et ayez obtenu un ticket de transport valide. Le message de
//                   confirmation MVola ou Orange Money ou le reçu de paiement
//                   PayPal NE CONSTITUE EN AUCUN CAS UN TICKET DE TRANSPORT
//                   VALIDE. 
//                   </span><br /><br />
//                   Vous pouvez imprimer votre e-ticket pour pouvoir
//                   effectuer votre pointage dans nos agences. De plus, les
//                   e-tickets présentés sur l&apos;écran de votre smartphone sont
//                   acceptés lors du pointage. Veuillez verifiez votre e-ticket.
//                   Si les informations sur le e-ticket ne correspondent pas à
//                   l&apos;information fournie lors de la réservation, veuillez
//                   nous contacter à l&apos;adresse cotisse.transport@gmail.com ou
//                   par téléphone au +261 32 11 027 10 or +261 32 11 027 33.
//                 </p>
//               </details>
//             </div>
//             <div className="py-5">
//               <details className="group">
//                 <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//                   <span> Peut-on annuler une réservation?</span>
//                   <span className="transition group-open:rotate-180">
//                     <svg
//                       fill="none"
//                       height="24"
//                       shapeRendering="geometricPrecision"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       viewBox="0 0 24 24"
//                       width="24"
//                     >
//                       <path d="M6 9l6 6 6-6"></path>
//                     </svg>
//                   </span>
//                 </summary>
//                 <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
//                   Toute modification ou annulation d&apos;une réservation doit
//                   être faite auprès de l&apos;agence, 24 heures avant le départ
//                   et encourra une pénalité de 20%.
//                 </p>
//               </details>
//             </div>
//             <div className="py-5">
//               <details className="group">
//                 <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//                   <span> How do I cancel my subscription?</span>
//                   <span className="transition group-open:rotate-180">
//                     <svg
//                       fill="none"
//                       height="24"
//                       shapeRendering="geometricPrecision"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       viewBox="0 0 24 24"
//                       width="24"
//                     >
//                       <path d="M6 9l6 6 6-6"></path>
//                     </svg>
//                   </span>
//                 </summary>
//                 <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
//                   To cancel your subscription, you can log in to your account
//                   and navigate to the subscription management page. From there,
//                   you should be able to cancel your subscription and stop future
//                   billing.
//                 </p>
//               </details>
//             </div>
//             <div className="py-5">
//               <details className="group">
//                 <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//                   <span> Quels sont les modes de paiments accéptés?</span>
//                   <span className="transition group-open:rotate-180">
//                     <svg
//                       fill="none"
//                       height="24"
//                       shapeRendering="geometricPrecision"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       viewBox="0 0 24 24"
//                       width="24"
//                     >
//                       <path d="M6 9l6 6 6-6"></path>
//                     </svg>
//                   </span>
//                 </summary>
//                 <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
//                   COTISSE Transport accepte les paiements en espèces dans les
//                   agences et mobile money (Orange Money et MVola) pour les
//                   réservations par téléphone et en ligne. Pour nos clients
//                   internationaux, nous accepterons bientôt Paypal et VISA.
//                 </p>
//               </details>
//             </div>
//             <div className="py-5">
//               <details className="group">
//                 <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//                   <span> Comment se déroule l&apos;embarquement ?</span>
//                   <span className="transition group-open:rotate-180">
//                     <svg
//                       fill="none"
//                       height="24"
//                       shapeRendering="geometricPrecision"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       viewBox="0 0 24 24"
//                       width="24"
//                     >
//                       <path d="M6 9l6 6 6-6"></path>
//                     </svg>
//                   </span>
//                 </summary>
//                 <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
//                   Pour le bon déroulement de votre voyage, il est préférable
//                   d&apos;arriver 45 minutes avant votre départ. Chaque passager
//                   a droit à 15 kg (ATJ, TMM, WFI, WAM) / 20 kg (MJN, MOQ, DIE,
//                   TLE) de bagages. Les excédents seront facturé à 100 Ar / kg
//                   (ATJ), 200 Ar / kg (TMM, WFI, WAM), 400 Ar / kg (MJN, MOQ) et
//                   800 Ar / kg (DIE, TLE).
//                 </p>
//               </details>
//             </div>
//             <div className="py-5">
//               <details className="group">
//                 <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
//                   <span> Do you offer any discounts or promotions?</span>
//                   <span className="transition group-open:rotate-180">
//                     <svg
//                       fill="none"
//                       height="24"
//                       shapeRendering="geometricPrecision"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       viewBox="0 0 24 24"
//                       width="24"
//                     >
//                       <path d="M6 9l6 6 6-6"></path>
//                     </svg>
//                   </span>
//                 </summary>
//                 <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
//                   We may offer discounts or promotions from time to time. To
//                   stay up-to-date on the latest deals and special offers, you
//                   can sign up for the company newsletter or follow it on social
//                   media.
//                 </p>
//               </details>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;
