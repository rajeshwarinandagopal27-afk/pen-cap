import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.name;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0E12",
          color: "#F8FAFB",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 5.5V11c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5.5L12 2z" fill="#14A3AE" />
            <path d="M12 2L4 5.5V11c0 5.25 3.4 9.74 8 11V2z" fill="#3FC4CE" />
          </svg>
          <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>PenCap Institute</span>
        </div>
        <div style={{ display: "flex", marginTop: 56, maxWidth: 900 }}>
          <span style={{ fontSize: 64, fontWeight: 600, letterSpacing: -2, lineHeight: 1.08 }}>
            Trained by operators. Proven by outcomes.
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 26, color: "#8A97A0" }}>
          89% of graduates placed within 180 days · Proof, not promises.
        </div>
      </div>
    ),
    size
  );
}
