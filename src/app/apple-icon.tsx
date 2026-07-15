import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0E14",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: -4,
            color: "#F5F6F8",
            fontFamily: "sans-serif",
          }}
        >
          SL<span style={{ color: "#E0975B" }}>T</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
