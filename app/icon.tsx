import { ImageResponse } from 'next/og'
import content from './content.json'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 32, height: 32 },
      id: 'normal',
    },
    {
      contentType: 'image/png',
      size: { width: 48, height: 48 },
      id: 'small',
    },
    {
      contentType: 'image/png',
      size: { width: 72, height: 72 },
      id: 'medium',
    },
    {
      contentType: 'image/png',
      size: { width: 100, height: 100 },
      id: 'large',
    },
  ]
}

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(90deg, #FF7E29 0%, #FF486C 100%)',
          borderRadius: '8px',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        {content.companyNameShort}
      </div>
    ),
    {
      ...size,
    }
  )
}

