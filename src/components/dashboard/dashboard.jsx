
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Responsive Dashboard</title>
//     <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
//     <script src="https://cdn.tailwindcss.com"></script>
//     <style>
//         /* Only keeping necessary custom styles, using Tailwind classes for colors */
//         :root {
//             --header-height: 4rem;
//             --sidebar-width: 240px;
//         }

//         @keyframes slideDown {
//             from {
//                 transform: translateY(-100%);
//                 opacity: 0;
//             }
//             to {
//                 transform: translateY(0);
//                 opacity: 1;
//             }
//         }

//         @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//         }

//         @keyframes slideUp {
//             from {
//                 transform: translateY(20px);
//                 opacity: 0;
//             }
//             to {
//                 transform: translateY(0);
//                 opacity: 1;
//             }
//         }

//         .animate-slide-down {
//             animation: slideDown 0.5s ease-out;
//         }

//         .animate-fade-in {
//             animation: fadeIn 0.5s ease-out;
//         }

//         .animate-slide-up {
//             animation: slideUp 0.5s ease-out forwards;
//         }
//     </style>
// </head>
// <body class="bg-indigo-50 min-h-screen overflow-x-hidden">
//     <div class="overlay fixed inset-0 bg-indigo-900/50 z-40 hidden opacity-0 transition-opacity duration-300"></div>
    
//     <header class="fixed w-full bg-white text-indigo-800 z-50 shadow-lg animate-slide-down">
//         <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-16">
//             <button class="mobile-menu-button p-2 lg:hidden">
//                 <span class="material-icons-outlined text-2xl">menu</span>
//             </button>
//             <div class="text-xl font-bold text-blue-900">
//                 Admin<span class="text-indigo-800">Panel</span>
//             </div>
//             <div class="flex items-center space-x-2">
//                 <span class="material-icons-outlined p-2 text-2xl cursor-pointer hover:text-indigo-800 transition-transform duration-300 hover:scale-110 hidden md:block">search</span>
//                 <span class="material-icons-outlined p-2 text-2xl cursor-pointer hover:text-indigo-800 transition-transform duration-300 hover:scale-110 hidden md:block">notifications</span>
//                 <img class="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110 object-cover" 
//                      src="https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg" 
//                      alt="Profile">
//             </div>
//         </div>
//     </header>

//     <div class="pt-16 max-w-7xl mx-auto flex">
//         <aside class="sidebar fixed lg:static w-[240px] bg-indigo-50 h-[calc(100vh-4rem)] lg:h-auto transform -translate-x-full lg:translate-x-0 transition-transform duration-300 z-45 overflow-y-auto p-4">
//             <div class="bg-white rounded-xl shadow-lg mb-6 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
//                 <a href="#" class="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1">
//                     <span class="material-icons-outlined mr-2">dashboard</span>
//                     Home
//                     <span class="material-icons-outlined ml-auto">keyboard_arrow_right</span>
//                 </a>
//                 <a href="#" class="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1">
//                     <span class="material-icons-outlined mr-2">tune</span>
//                     Some menu item
//                     <span class="material-icons-outlined ml-auto">keyboard_arrow_right</span>
//                 </a>
//                 <a href="#" class="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1">
//                     <span class="material-icons-outlined mr-2">file_copy</span>
//                     Another menu item
//                     <span class="material-icons-outlined ml-auto">keyboard_arrow_right</span>
//                 </a>
//             </div>

//             <div class="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
//                 <a href="#" class="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1">
//                     <span class="material-icons-outlined mr-2">face</span>
//                     Profile
//                     <span class="material-icons-outlined ml-auto">keyboard_arrow_right</span>
//                 </a>
//                 <a href="#" class="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1">
//                     <span class="material-icons-outlined mr-2">settings</span>
//                     Settings
//                     <span class="material-icons-outlined ml-auto">keyboard_arrow_right</span>
//                 </a>
//                 <a href="#" class="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1">
//                     <span class="material-icons-outlined mr-2">power_settings_new</span>
//                     Log out
//                     <span class="material-icons-outlined ml-auto">keyboard_arrow_right</span>
//                 </a>
//             </div>
//         </aside>

//         <main class="flex-1 p-4">
//             <div class="flex flex-col lg:flex-row gap-4 mb-6">
//                 <div class="flex-1 bg-indigo-100 border border-indigo-200 rounded-xl p-6 animate-fade-in">
//                     <h2 class="text-4xl md:text-5xl text-blue-900">
//                         Welcome <br><strong>Dash</strong>
//                     </h2>
//                     <span class="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-indigo-800">
//                         01:51
//                     </span>
//                 </div>

//                 <div class="flex-1 bg-blue-100 border border-blue-200 rounded-xl p-6 animate-fade-in">
//                     <h2 class="text-4xl md:text-5xl text-blue-900">
//                         Inbox <br><strong>23</strong>
//                     </h2>
//                     <a href="#" class="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-blue-800 hover:bg-blue-900 transition-transform duration-300 hover:scale-105">
//                         See messages
//                     </a>
//                 </div>
//             </div>

//             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div class="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up" style="animation-delay: 0.1s">
//                     <h3 class="text-xl font-bold text-indigo-800">Stats Card 1</h3>
//                 </div>
//                 <div class="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up" style="animation-delay: 0.2s">
//                     <h3 class="text-xl font-bold text-indigo-800">Stats Card 2</h3>
//                 </div>
//                 <div class="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up" style="animation-delay: 0.3s">
//                     <h3 class="text-xl font-bold text-indigo-800">Stats Card 3</h3>
//                 </div>
//             </div>
//         </main>
//     </div>

//     <script>
//         // Mobile menu functionality
//         const mobileMenuButton = document.querySelector('.mobile-menu-button');
//         const sidebar = document.querySelector('.sidebar');
//         const overlay = document.querySelector('.overlay');

//         function toggleMobileMenu() {
//             sidebar.classList.toggle('translate-x-0');
//             overlay.classList.toggle('hidden');
//             setTimeout(() => overlay.classList.toggle('opacity-0'), 0);
//             document.body.style.overflow = sidebar.classList.contains('translate-x-0') ? 'hidden' : '';
//         }

//         mobileMenuButton.addEventListener('click', toggleMobileMenu);
//         overlay.addEventListener('click', toggleMobileMenu);

//         // Close mobile menu on window resize if open
//         window.addEventListener('resize', () => {
//             if (window.innerWidth >= 1024 && sidebar.classList.contains('translate-x-0')) {
//                 toggleMobileMenu();
//             }
//         });

//         // Notification animation
//         const notificationIcon = document.querySelector('.material-icons-outlined:nth-child(2)');
//         setInterval(() => {
//             notificationIcon.classList.add('scale-110');
//             setTimeout(() => notificationIcon.classList.remove('scale-110'), 200);
//         }, 5000);
//     </script>
// </body>
// </html>



<!-- source https://gist.github.com/dsursulino/369a0998c0fc8c25e19962bce729674f -->

<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />

<div class="bg-orange-100 min-h-screen">
  <div class="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
      <div class="flex items-center justify-between py-2 text-5x1">
        <div class="font-bold text-blue-900 text-xl">Admin<span class="text-orange-600">Panel</span></div>
        <div class="flex items-center text-gray-500">
          <span class="material-icons-outlined p-2" style="font-size: 30px">search</span>
          <span class="material-icons-outlined p-2" style="font-size: 30px">notifications</span>
          <div class="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2" style="background-image: url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)"></div>
        </div>
    </div>
  </div>
  
  <div class="flex flex-row pt-24 px-10 pb-4">
    <div class="w-2/12 mr-6">
      <div class="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
        <a href="" class="inline-block text-gray-600 hover:text-black my-4 w-full">
          <span class="material-icons-outlined float-left pr-2">dashboard</span>
          Home
          <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
        </a>
        <a href="" class="inline-block text-gray-600 hover:text-black my-4 w-full">
          <span class="material-icons-outlined float-left pr-2">tune</span>
          Some menu item
          <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
        </a>
        <a href="" class="inline-block text-gray-600 hover:text-black my-4 w-full">
          <span class="material-icons-outlined float-left pr-2">file_copy</span>
          Another menu item
          <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
        </a>
      </div>

      <div class="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
        <a href="" class="inline-block text-gray-600 hover:text-black my-4 w-full">
          <span class="material-icons-outlined float-left pr-2">face</span>
          Profile
          <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
        </a>
        <a href="" class="inline-block text-gray-600 hover:text-black my-4 w-full">
          <span class="material-icons-outlined float-left pr-2">settings</span>
          Settings
          <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
        </a>
        <a href="" class="inline-block text-gray-600 hover:text-black my-4 w-full">
          <span class="material-icons-outlined float-left pr-2">power_settings_new</span>
          Log out
          <span class="material-icons-outlined float-right">keyboard_arrow_right</span>
        </a>
      </div>
    </div>
    
    <div class="w-10/12">
      <div class="flex flex-row">
        <div class="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6" style="background-image: url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5); background-position: 90% center;">
          <p class="text-5xl text-indigo-900">Welcome <br><strong>Lorem Ipsum</strong></p>
          <span class="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2"><strong>01:51</strong></span>
        </div>

        <div class="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6" style="background-image: url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5); background-position: 100% 40%;">
          <p class="text-5xl text-indigo-900">Inbox <br><strong>23</strong></p>
          <a href="" class="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"><strong>See messages</strong></a>
        </div>
      </div>
      <div class="flex flex-row h-64 mt-6">
        <div class="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
          a
        </div>
        <div class="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
          b
        </div>
        <div class="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
          c
        </div>
      </div>
    </div>
  </div>
</div>