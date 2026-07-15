import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

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
          padding: 96,
          background: "#0B0E14",
          backgroundImage:
            "linear-gradient(135deg, rgba(196,120,63,0.14) 0%, rgba(11,14,20,0) 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", width: 22, height: 22, borderRadius: "50%", background: "#E0975B" }} />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, letterSpacing: -2, color: "#F5F6F8" }}>
            SL<span style={{ color: "#E0975B" }}>T</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 60,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.08,
            color: "#F5F6F8",
            maxWidth: 920,
          }}
        >
          Component sourcing, engineered around your RFQ.
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 24, color: "#A8B2BF" }}>
          {siteConfig.description.slice(0, 118)}…
        </div>
      </div>
    ),
    { ...size },
  );
}
