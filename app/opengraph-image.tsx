import { ImageResponse } from "next/og";

export const alt = "Offbeats | Marketing Agency for Brands That Refuse to Blend In";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07080A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background: "radial-gradient(circle, rgba(123, 92, 255, 0.4) 0%, rgba(255, 90, 31, 0.25) 50%, transparent 100%)",
          }}
        />

        {/* Brand Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{ fontSize: "38px", fontWeight: 700, color: "#F4F4F5", letterSpacing: "-0.04em" }}>
            offbeats
          </span>
          {/* Waveform glyph inline */}
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{ width: "4px", height: "24px", background: "#F4F4F5", borderRadius: "2px" }} />
            <div style={{ width: "4px", height: "36px", background: "#F4F4F5", borderRadius: "2px" }} />
            <div style={{ width: "4px", height: "28px", background: "#F4F4F5", borderRadius: "2px" }} />
            <div style={{ width: "4px", height: "18px", background: "#C6FF3D", borderRadius: "2px", transform: "translateY(8px)" }} />
            <div style={{ width: "4px", height: "22px", background: "#F4F4F5", borderRadius: "2px" }} />
          </div>
        </div>

        {/* H1 Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1000px" }}>
          <div style={{ fontSize: "66px", fontWeight: 700, color: "#F4F4F5", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Your market is loud.
          </div>
          <div style={{ fontSize: "66px", fontWeight: 700, color: "#FF5A1F", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Be the one they remember.
          </div>
        </div>

        {/* Footer info */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px" }}>
          <span style={{ fontSize: "20px", color: "#8B8F98" }}>
            Brands, content and ad campaigns for businesses done blending in.
          </span>
          <span style={{ fontSize: "20px", color: "#C6FF3D", fontWeight: 600 }}>
            offbeats.agency
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
