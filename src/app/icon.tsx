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
          background: "linear-gradient(135deg, #6C3BFF, #FF4FD8)",
          borderRadius: 8,
          color: "white",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        {"</>"}
      </div>
    ),
    { ...size }
  );
}
