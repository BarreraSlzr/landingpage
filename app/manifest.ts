import { MetadataRoute } from 'next'
import content from './content.json'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: content.companyName,
    short_name: content.companyNameShort,
    description: content.heroText,
    start_url: '/',
    display: 'standalone',
    background_color: '#FF7E29',
    theme_color: '#FF486C',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

