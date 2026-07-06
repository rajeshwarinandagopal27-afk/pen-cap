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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L4 5.5V11c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5.5L12 2z"
            fill="#14A3AE"
          />
          <path d="M12 2L4 5.5V11c0 5.25 3.4 9.74 8 11V2z" fill="#3FC4CE" />
        </svg>
      </div>
    ),
    size
  );
}
