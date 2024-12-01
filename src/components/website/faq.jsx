const Faq = () => {
  return (
    <div>
      <div
        id="faq"
        className="relative w-full bg-white px-6 pt-10 pb-8 mt-24
       shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10"
      >
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              FAQ
            </h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">
              Frequenty asked questions
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Directives de paiment?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  <span className="text-red-600">VEUILLEZ NE PAS FERMER LA PAGE DE RÉSERVATION JUSQU&apos;À CE
                  QUE VOUS AYEZ DÛMENT COMPLÉTÉ « l&apos;ÉTAPE 5 - CONFIRMATION
                  » et ayez obtenu un ticket de transport valide. Le message de
                  confirmation MVola ou Orange Money ou le reçu de paiement
                  PayPal NE CONSTITUE EN AUCUN CAS UN TICKET DE TRANSPORT
                  VALIDE. 
                  </span><br /><br />
                  Vous pouvez imprimer votre e-ticket pour pouvoir
                  effectuer votre pointage dans nos agences. De plus, les
                  e-tickets présentés sur l&apos;écran de votre smartphone sont
                  acceptés lors du pointage. Veuillez verifiez votre e-ticket.
                  Si les informations sur le e-ticket ne correspondent pas à
                  l&apos;information fournie lors de la réservation, veuillez
                  nous contacter à l&apos;adresse cotisse.transport@gmail.com ou
                  par téléphone au +261 32 11 027 10 or +261 32 11 027 33.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Peut-on annuler une réservation?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Toute modification ou annulation d&apos;une réservation doit
                  être faite auprès de l&apos;agence, 24 heures avant le départ
                  et encourra une pénalité de 20%.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How do I cancel my subscription?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  To cancel your subscription, you can log in to your account
                  and navigate to the subscription management page. From there,
                  you should be able to cancel your subscription and stop future
                  billing.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Quels sont les modes de paiments accéptés?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  COTISSE Transport accepte les paiements en espèces dans les
                  agences et mobile money (Orange Money et MVola) pour les
                  réservations par téléphone et en ligne. Pour nos clients
                  internationaux, nous accepterons bientôt Paypal et VISA.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Comment se déroule l&apos;embarquement ?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Pour le bon déroulement de votre voyage, il est préférable
                  d&apos;arriver 45 minutes avant votre départ. Chaque passager
                  a droit à 15 kg (ATJ, TMM, WFI, WAM) / 20 kg (MJN, MOQ, DIE,
                  TLE) de bagages. Les excédents seront facturé à 100 Ar / kg
                  (ATJ), 200 Ar / kg (TMM, WFI, WAM), 400 Ar / kg (MJN, MOQ) et
                  800 Ar / kg (DIE, TLE).
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Do you offer any discounts or promotions?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We may offer discounts or promotions from time to time. To
                  stay up-to-date on the latest deals and special offers, you
                  can sign up for the company newsletter or follow it on social
                  media.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
