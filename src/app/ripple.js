"use client"
import { useEffect } from 'react';
import styles from './RippleEffect.module.css'; // Import your CSS module

const RippleEffect = ({animate = true}) => {

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Create ripple element
      if (!animate) return;
      const ripple = document.createElement('div');
      ripple.className = styles.rippleEffect; // Use class from CSS module

      // Position it at the cursor location
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      // Append to body or container
      document.body.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => ripple.remove(), 600); // 600ms = animation duration
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [animate]);

  return null; // This component does not render anything itself
};

export default RippleEffect;