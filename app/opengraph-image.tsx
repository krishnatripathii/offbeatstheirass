import { ImageResponse } from 'next/og'

export const alt = 'Offbeats Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#FF48B0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)', backgroundSize: '12px 12px', opacity: 0.2 }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '40px', background: '#F4F4F1', border: '8px solid #000000', boxShadow: '20px 20px 0px 0px #000000', transform: 'rotate(-2deg)' }}>
          <span style={{ fontSize: '120px', fontWeight: 900, textTransform: 'uppercase', color: '#000000', letterSpacing: '-0.05em' }}>
            Offbeats
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
