// app/api/og/route.tsx

import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
          padding: '60px',
          backgroundColor: 'white',
          backgroundImage: 'linear-gradient(135deg, #f0f9f7 0%, #ffffff 100%)',
        }}
      >
        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#0D9488',
              lineHeight: 1.2,
              maxWidth: '900px',
            }}
          >
            Learn Tech Without Learning to Code
          </div>

          <div
            style={{
              fontSize: '32px',
              color: '#4b5563',
              maxWidth: '900px',
            }}
          >
            Personalized learning paths for non-technical founders
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#0D9488',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
            }}
          >
            📚
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#0D9488',
            }}
          >
            TechDrops
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}