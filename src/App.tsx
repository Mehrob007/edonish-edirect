import { useEffect } from "react";
import mobile from "./assets/mobi.png";

export default function App() {
  const platform = navigator.platform;
  useEffect(() => {
    setTimeout(() => {
      if (
        platform.startsWith("iPhone") ||
        platform.startsWith("iPad") ||
        platform.startsWith("Mac")
      ) {
        window.location.href =
          "https://apps.apple.com/tj/app/edonish/id1579282546";
      } else {
        window.location.href =
          "https://play.google.com/store/apps/details?id=tj.edonish";
      }
    }, 1000);
  }, [platform]);
  return (
    <main>
      <div>
        <img src={mobile} alt={mobile} />
        <h1>eDonish</h1>
      </div>
    </main>
  );
}
