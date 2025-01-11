'use client'

import { PropsWithChildren, useMemo } from 'react';
import content from '../content.json';
import NoiseFilter from './backgrounds/noise-filter-div';
import { motion } from 'framer-motion';
import { BgGoo } from './backgrounds/gloo';

const DefaultHero = () => (
    <div className='text-3xl md:text-4xl lg:text-5xl leading-relaxed'>
        <h1 className="font-bold">{content.hero.title}</h1>
        <p className="text-lg mb-6 font-mono">{content.hero.description}</p>
    </div>
)

type Props = {
    className?: string,
}

// [1.0, 0.996, 1.0],
//   [1.0, 1.0, 0.992],
//   [1.0, 0.996, 0.992]
// {
//     "color1": [0.922, 0.906, 0.361],
//     "color2": [0.875, 0.282, 0.263],
//     "color3": [0.922, 0.251, 0.941]
//   }
type ColorPalette = {
    [colorName: string]: number[];
};

const r = {
    10: 0.8,
    9: 0.8,
    8: 0.8,
    7: 0.7,
    6: 0.6,
    5: 0.5,
    4: 0.4,
    3: 0.3,
    2: 0.2,
    '01': 0.2,
    '00': 0.2
};

const colors: ColorPalette = {
    "Vibrant Pink": [r[10], r['00'], r[5]],       // RGB(255, 0, 127)
    "Energetic Yellow": [r[10], r[10], r['00']],   // RGB(255, 255, 0)
    "Dynamic Orange": [r[10], r[6], r['00']],     // RGB(255, 153, 0)
    "Lively Green": [r['00'], r[10], r[4]],       // RGB(0, 255, 102)
    "Bright Cyan": [r['00'], r[10], r[10]],        // RGB(0, 255, 255)
    "Electric Blue": [r['00'], r[5], r[10]],      // RGB(0, 127, 255)
    "Bright Yellow": [r[9], r[9], r[3]],   // Softer yellow
    "Electric Pink": [r[9], r['01'], r[7]],   // Slightly muted pink
    "Fiery Orange": [r[9], r[5], r['01']],    // Muted orange
    "Lime Green": [r[6], r[9], r[3]],      // Softer lime green
    "Hot Magenta": [r[9], r['01'], r[5]],     // Muted magenta
    "Vibrant Cyan": [r['01'], r[9], r[8]],    // Softer cyan
    "Bold Blue": [r['01'], r[4], r[9]],       // Muted blue
    "Sunset Red": [r[9], r[3], r[4]],      // Softer red
    "Neon Purple": [r[6], r['01'], r[9]],     // Muted purple
    "Radiant Gold": [r[9], r[8], r[3]]     // Softer gold
};




export default function HeroText({ children = <DefaultHero />, className }: PropsWithChildren<Props>) {

    function getRandomColors(palette: ColorPalette, count: number = 3): number[][] {
        const colorValues = Object.values(palette); // Get only the RGB values
        const selectedColors = new Set<number[]>(); // Use a Set to ensure uniqueness
      
        while (selectedColors.size < count) {
          const randomIndex = Math.floor(Math.random() * colorValues.length);
          selectedColors.add(colorValues[randomIndex]);
        }
      
        return Array.from(selectedColors); // Convert the Set back to an array
      }

    const randomColors = useMemo(() => getRandomColors(colors), []);
    return (
        <section className={`relative min-h-[60vh] ${className}`}>
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <NoiseFilter overlayBlendMode='overlay'/>
                <BgGoo
                    speed={0.2}
                    resolution={2.0}
                    depth={3}
                    seed={0.4}
                    color1={randomColors[0]}
                    color2={randomColors[1]}
                    color3={randomColors[2]}
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative sm:px-6 px-2 md:px-8 py-12 max-w-4xl text-white">
                {children}
            </motion.div>
        </section>
    );
}
