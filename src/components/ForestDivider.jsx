'use client';

import { motion } from 'framer-motion';
import prefix from '../utils/prefix';

export default function ForestDivider({ color = 'currentColor', opacity = 1, flip = false }) {
  const imageUrl = `${prefix}/images/silhouette-foret-pins-petits-grands-arbres-feuilles-persistantes-blanc.png`;

  return (
    <div 
      className={`absolute left-0 right-0 bottom-0 pointer-events-none ${flip ? 'rotate-180 top-0 bottom-auto' : ''}`} 
      style={{ 
        height: '120px', 
        zIndex: 5,
        maskImage: `url(${imageUrl})`,
        maskSize: 'auto 120px',
        maskRepeat: 'repeat-x',
        maskPosition: 'bottom',
        WebkitMaskImage: `url(${imageUrl})`,
        WebkitMaskSize: 'auto 120px',
        WebkitMaskRepeat: 'repeat-x',
        WebkitMaskPosition: 'bottom',
        backgroundColor: color,
        opacity: opacity
      }}
    />
  );
}
