import { useEffect, useState } from "react";
import { BtInstallIphone } from "./btInstallIphone";
import { BtInstallAndroid } from "./btInstallAndroid";

export default function InstallPWA() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
    setIsStandalone(standalone);

    if (standalone) return;

    // Evento que já pode ter disparado antes do componente montar
    if (window.__deferredPrompt) {
      setDeferredPrompt(window.__deferredPrompt);
      setShowInstall(true);
    }

    const onAvailable = () => {
      setDeferredPrompt(window.__deferredPrompt);
      setShowInstall(true);
    };
    const onInstalled = () => {
      setShowInstall(false);
      setDeferredPrompt(null);
      window.__deferredPrompt = null;
    };

    window.addEventListener("pwa-install-available", onAvailable);
    window.addEventListener("appinstalled", onInstalled);

    if (iOS) setShowInstall(true);

    // Opcional: verificar se já está instalada
    if ("getInstalledRelatedApps" in navigator) {
      navigator.getInstalledRelatedApps().then((apps) => {
        if (apps.length > 0) setShowInstall(false);
      }).catch(() => {});
    }

    return () => {
      window.removeEventListener("pwa-install-available", onAvailable);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (isStandalone || !showInstall) return null;
  if (isIOS) return <BtInstallIphone />;

  return (
    <BtInstallAndroid
      deferredPrompt={deferredPrompt}
      onInstalled={() => setShowInstall(false)}
    />
  );
}