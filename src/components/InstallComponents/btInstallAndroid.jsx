export  function BtInstallAndroid({ deferredPrompt, onInstalled }) {
  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // Mostra o prompt nativo do Chrome
    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("Utilizador aceitou instalar o PWA");
      onInstalled(); // Esconde o botão
    } else {
      console.log("Utilizador recusou a instalação");
    }
  };

  return (
    <button
      onClick={handleInstall}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg transition hover:bg-blue-700 active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Instalar App
    </button>
  );
}