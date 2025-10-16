import { useEffect } from "react";

export default function App() {
  const platform = navigator.platform;
  useEffect(() => {
    if (platform.startsWith("Win")) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=tj.edonish";
    } else if (platform.startsWith("Mac")) {
      window.location.href =
        "https://apps.apple.com/tj/app/edonish/id1579282546";
    } else if (platform.startsWith("iPhone") || platform.startsWith("iPad")) {
      window.location.href =
        "https://apps.apple.com/tj/app/edonish/id1579282546";
    } else {
      window.location.href =
        "https://play.google.com/store/apps/details?id=tj.edonish";
    }
  }, [platform]);
  return <main>{platform}</main>;
}
