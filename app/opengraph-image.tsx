import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 2 28 8v10c0 8-5.5 10.5-12 12C9.5 28.5 4 26 4 18V8z"
              stroke="#3FC4CE"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M11 16.5 14.5 20 21.5 12"
              stroke="#3FC4CE"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: 32, fontWeight: 600 }}>PenCap</span>
        </div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 64, fontWeight: 600, letterSpacing: -2, lineHeight: 1.1 }}>
          Trained by operators.
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 600, letterSpacing: -2, lineHeight: 1.1 }}>
          Proven by outcomes.
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 28, color: "#B7C1C8" }}>
          EC-Council Accredited · CompTIA Authorized · Chennai
        </div>
      </div>
    ),
    { ...size },
  );
}
