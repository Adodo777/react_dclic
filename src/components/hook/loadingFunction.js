import { useEffect, useState } from 'react';

/**
 * Hook personnalisé qui affiche une barre de chargement en haut de l'écran
 * si l'état `isLoading` reste `true` pendant un certain délai (default: 500ms).
 *
 * @param {boolean} isLoading - État de chargement (ex: pendant un fetch).
 * @param {number} delay - Délai en ms avant d'afficher le loading.
 */
export function useDelayedLoading(isLoading, delay = 500) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;

    if (isLoading) {
      timer = setTimeout(() => setShow(true), delay);
    } else {
      setShow(false);
    }

    return () => clearTimeout(timer);
  }, [isLoading, delay]);

  return show ? <LoadingBar /> : null;
}

// Barre de chargement en haut de l'écran avec animation Tailwind
function LoadingBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-blue-500 animate-pulse w-full" />
    </div>
  );
}
