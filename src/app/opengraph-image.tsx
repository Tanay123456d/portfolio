import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ujjwal Tamrakar — Visual Communication Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F5F0EB",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 60,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 16, letterSpacing: 4, textTransform: "uppercase", color: "#555" }}>
            Visual Communication Designer / Illustrator
          </span>
          <span style={{ fontSize: 16, letterSpacing: 4, textTransform: "uppercase", color: "#555" }}>
            India · 2026
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 96, fontWeight: 900, lineHeight: 0.95, fontFamily: "sans-serif" }}>
            UJJWAL
          </span>
          <span style={{ fontSize: 96, fontWeight: 900, lineHeight: 0.95, fontFamily: "sans-serif" }}>
            TAMRAKAR
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ width: 12, height: 12, borderRadius: 999, background: "#22c55e" }} />
          <span style={{ fontSize: 18, letterSpacing: 3, textTransform: "uppercase", color: "#E85D04", fontWeight: 600 }}>
            Available for Freelance & Fulltime
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}