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
          background: "linear-gradient(135deg, #6C3BFF 0%, #A855F7 45%, #FF4FD8 100%)",
          borderRadius: 40,
          color: "#FFFFFF",
          fontSize: 68,
          fontWeight: 800,
          letterSpacing: 2,
          textShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
          border: "3px solid rgba(255, 255, 255, 0.35)",
        }}
      >
        GTE
      </div>
    ),
    { ...size }
  );
}
