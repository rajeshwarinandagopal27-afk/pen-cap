import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

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
          background: "linear-gradient(135deg, #0b1224 0%, #16224a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4 5V11C4 16.5 7.5 21.3 12 22.5C16.5 21.3 20 16.5 20 11V5L12 2Z"
                fill="#0b1224"
              />
            </svg>
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, display: "flex" }}>
            Pen<span style={{ color: "#5B82F6" }}>Cap</span>
          </div>
        </div>

        <div style={{ marginTop: 56, fontSize: 56, fontWeight: 700, maxWidth: 900, display: "flex" }}>
          Become a Cybersecurity Professional
        </div>
        <div style={{ marginTop: 24, fontSize: 26, color: "rgba(255,255,255,0.7)", maxWidth: 800, display: "flex" }}>
          {siteConfig.accreditations.join(" · ")}
        </div>
      </div>
    ),
    { ...size }
  );
}
