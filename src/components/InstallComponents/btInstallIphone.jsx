import { useState } from "react";

export function BtInstallIphone() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão que abre as instruções */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-white shadow-lg transition hover:bg-gray-800 active:scale-95"
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
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        Instalar no iPhone
      </button>

      {/* Modal com instruções */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-4 sm:items-center">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Como instalar no iPhone
            </h3>

            <ol className="space-y-4 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  1
                </span>
                <span>
                  Toca no botão <strong>Partilhar</strong>{" "}
                  <span className="inline-block rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                    ⎋
                  </span>{" "}
                  na barra inferior do Safari
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  2
                </span>
                <span>
                  Desliza para baixo e escolhe{" "}
                  <strong>"Adicionar ao Ecrã Principal"</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  3
                </span>
                <span>
                  Confirma tocando em <strong>"Adicionar"</strong>
                </span>
              </li>
            </ol>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-xl bg-gray-900 py-3 text-sm font-medium text-white"
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </>
  );
}