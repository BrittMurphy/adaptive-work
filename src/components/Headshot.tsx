import Image from "next/image";
import fs from "fs";
import path from "path";

/*
  Headshot with graceful fallback.

  Drop a photo named `brittney.jpg` into the `public` folder and it appears
  automatically. If no photo is present, a tasteful "BM" monogram block shows
  instead — so the site never displays a broken image.

  (To use a .png instead, name it brittney.png and change PHOTO below.)
*/
const PHOTO = "brittney.jpg";

function photoExists(): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", PHOTO));
  } catch {
    return false;
  }
}

export function Headshot({
  size = 200,
  rounded = false,
}: {
  size?: number;
  rounded?: boolean;
}) {
  const hasPhoto = photoExists();
  const height = rounded ? size : Math.round(size * 1.2);

  return (
    <div
      style={{
        width: size,
        height,
        borderRadius: rounded ? "50%" : 4,
        overflow: "hidden",
        border: "1px solid var(--rule)",
        background: "var(--bg-2)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {hasPhoto ? (
        <Image
          src={`/${PHOTO}`}
          alt="Brittney Murphy"
          fill
          sizes={`${size}px`}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <span
          aria-hidden
          style={{
            fontFamily: "var(--font-display)",
            fontSize: size * 0.42,
            color: "var(--sage-deep)",
          }}
        >
          BM
        </span>
      )}
    </div>
  );
}

