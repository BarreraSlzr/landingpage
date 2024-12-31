'use client'

import { PropsWithChildren } from 'react';
import content from '../content.json';
import NoiseFilterDiv from './NoiseFilterDiv';
import { motion } from 'framer-motion';

const DefaultHero = () => (
    <div className='text-3xl md:text-4xl lg:text-5xl leading-relaxed'>
        <h1 className="font-bold">{content.hero.title}</h1>
        <p className="text-lg mb-6 font-mono">{content.hero.description}</p>
    </div>
)

type Props = {
    className?: string,
}

export default function HeroText({ children = <DefaultHero /> }: PropsWithChildren<Props>) {
    return (
        <section className={`relative min-h-[60vh]`}>
            <NoiseFilterDiv/>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative sm:px-2 px-6 md:px-8 py-12 max-w-4xl text-white">
                {children}
            </motion.div>
        </section>
    );
}
