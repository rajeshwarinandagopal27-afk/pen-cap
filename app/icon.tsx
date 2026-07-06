import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0E12",
          borderRadius: 7,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 2 28 8v10c0 8-5.5 10.5-12 12C9.5 28.5 4 26 4 18V8z"
            stroke="#3FC4CE"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M11 16.5 14.5 20 21.5 12"
            stroke="#3FC4CE"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
