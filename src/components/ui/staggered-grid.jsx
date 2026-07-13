'use client';

import { LiquidMetal } from "@/components/ui/liquid-metal";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imagesLoaded from 'imagesloaded'
import { cn } from '@/lib/utils'
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger)

export function StaggeredGrid({
    images,
    bentoItems,
    centerText = "Halcyon",

    credits = {
        madeBy: { text: "@codrops", href: "https://x.com/codrops" },
        moreDemos: { text: "More demos", href: "https://tympanus.net/codrops/demos" }
    },

    className,
    showFooter = true,
    scroller
}) {
    const SOCIAL_ICONS = [
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  MdEmail,
  FaDiscord,
];
    const [isLoaded, setIsLoaded] = useState(false)
    const gridFullRef = useRef(null)
    const textRef = useRef(null)

    // Bento Grid State
    const [activeBento, setActiveBento] = useState(0);

    const splitText = (text) => {
        return text.split('').map((char, i) => (
            <span key={i} className="char inline-block" style={{ willChange: 'transform' }}>{char === ' ' ? '\u00A0' : char}</span>
        ));
    }

    useEffect(() => {
        const handleLoad = () => {
            document.body.classList.remove('loading')
            setIsLoaded(true)
        }

        // Wait for background images to load
        // Note: we target both regular images and bento images if possible
        const imgLoad = imagesLoaded(
            document.querySelectorAll('.grid__item-img'),
            { background: true },
            handleLoad
        )

        return () => {
            // Cleanup
        }
    }, [])

    useEffect(() => {
        if (!isLoaded) return

        // Animate Text Element
        if (textRef.current) {
            const chars = textRef.current.querySelectorAll('.char')
            gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    scroller: scroller || undefined,
                    start: 'top bottom',
                    end: 'center center-=25%',
                    scrub: 1,
                }
            })
                .from(chars, {
                    ease: 'sine.out',
                    yPercent: 300,
                    autoAlpha: 0,
                    stagger: {
                        each: 0.05,
                        from: 'center'
                    }
                })
        }

        // Animate Full Grid
        if (gridFullRef.current) {
            const gridFullItems = gridFullRef.current.querySelectorAll('.grid__item')
            const numColumns = getComputedStyle(gridFullRef.current).getPropertyValue('grid-template-columns').split(' ').length
            const middleColumnIndex = Math.floor(numColumns / 2)

            const columns = Array.from({ length: numColumns }, () => [])
            gridFullItems.forEach((item) => {
                const colAttr = item.getAttribute('data-col');
                // Use data-col if available, fallback to a safe index calculation
                const columnIndex = colAttr !== null ? parseInt(colAttr, 10) : 0;
                if (columns[columnIndex]) {
                    columns[columnIndex].push(item)
                }
            })

            columns.forEach((columnItems, columnIndex) => {
                const delayFactor = Math.abs(columnIndex - middleColumnIndex) * 0.2

                gsap.timeline({
                    scrollTrigger: {
                        trigger: gridFullRef.current,
                        scroller: scroller || undefined,
                        start: 'top bottom',
                        end: 'center center',
                        scrub: 1.5,
                    }
                })
                    .from(columnItems, {
                        yPercent: 450,
                        autoAlpha: 0,
                        delay: delayFactor,
                        ease: 'sine.out',
                    })
                    .from(columnItems.map(item => item.querySelector('.grid__item-img')), {
                        transformOrigin: '50% 0%',
                        ease: 'sine.out',
                    }, 0)
            })

            // Specific animation for Bento Container
            const bentoContainer = gridFullRef.current.querySelector('.bento-container')

            if (bentoContainer) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridFullRef.current,
                        scroller: scroller || undefined,
                        start: 'top top+=15%',
                        end: 'bottom center',
                        scrub: 1,
                        invalidateOnRefresh: true,
                    }
                })

                // Animate Bento Container to move down and scale
                tl.to(bentoContainer, {
                    y: window.innerHeight * 0.1, // Move down relative to grid
                    scale: 1.5, // Scale up the whole group
                    zIndex: 1000,
                    ease: 'power2.out', // Smooth easing
                    duration: 1,
                    force3D: true // Force hardware acceleration
                }, 0)
            }
        }
    }, [isLoaded])

    // Prepare grid items: fill up to the end of Row 3 (21 slots)
    // This perfectly balances the 3rd row with 2 cards on each side of the bento container.
    const mixedGridItems = Array.from({ length: 21 }, (_, i) => images[i % images.length]);

    // Replace the slot where we want the bento group
    // Position at index 16 = Row 3 (middle row), spanning columns 3-5 (center)
    mixedGridItems[16] = 'BENTO_GROUP';

    return (
        <div
            className={cn("shadow relative overflow-hidden w-full", className)}
            style={{
                '--grid-item-translate': '0px'
            }}>
            <section className="grid place-items-center w-full relative mt-[10vh]">
                <div
                    ref={textRef}
                    className="text font-alt uppercase flex content-center text-[clamp(1.8rem,6vw,4rem)] leading-[0.9] text-white font-black tracking-tight">
                    {splitText(centerText)}
                </div>
            </section>
            <section className="grid place-items-center w-full relative">
                <div
                    ref={gridFullRef}
                    className="grid--full relative w-full my-[10vh] h-auto aspect-[1.1] max-w-none p-4 grid gap-4 grid-cols-7 grid-rows-5">
                    <div
                        className="grid-overlay absolute inset-0 z-[15] pointer-events-none opacity-0 bg-white/80 dark:bg-black/80 rounded-lg transition-opacity duration-500" />
                    {mixedGridItems.map((item, i) => {
                        if (item === 'BENTO_GROUP') {
                            // Render the HoverExpand Group using passed bentoItems
                            if (!bentoItems || bentoItems.length === 0) return null;

                            return (
                                <div
                                    key="bento-group"
                                    data-col={2}
                                    className="grid__item bento-container col-span-3 row-span-1 relative z-20 flex items-center justify-center gap-2 h-full w-full will-change-transform">
                                    {bentoItems.map((bentoItem, index) => {
                                        const isActive = activeBento === index;
                                        return (
                                            <div
  key={bentoItem.id}
  className={cn(
    "group relative rounded-2xl h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden",
    isActive
      ? "bg-black shadow-2xl"
      : "bg-black"
  )}
  style={{ width: isActive ? "60%" : "20%" }}
  onMouseEnter={() => setActiveBento(index)}
  onClick={() => {
  if (bentoItem.url) {
    window.open(bentoItem.url, "_blank");
  }
}}
>
    <LiquidMetal
  colorBack="#DFFF00"
  colorTint="#FFFFFF"
  speed={0.35}
  repetition={4}
  distortion={0.08}
  scale={1}
  className={cn(
    "absolute -inset-[2px] rounded-2xl transition-opacity duration-500",
    isActive
      ? "opacity-100"
      : "opacity-35"
  )}
/>
    
                                                {/* Liquid Metal Border */}

                                                {/* Content Container */}
                                                <div className="relative z-[60] w-full h-full flex flex-col p-0">
                                                    {/* Active State Content */}
                                                    <div
                                                        className={cn(
                                                            "absolute inset-0 flex flex-col transition-all duration-500 ease-in-out",
                                                            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                                                        )}>
                                                        {/* Image - Full Coverage */}
                                                        <div className="absolute inset-[3px] rounded-2xl bg-black overflow-hidden z-0 group/img">
                                                            {bentoItem.image && (
                                                                <>
                                                                    <img
                                                                        src={bentoItem.image}
                                                                        alt={bentoItem.title}
                                                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover/img:opacity-100" />
                                                                    {/* Text Protection Gradient - Shadow peaking from bottom */}
                                                                    <div
                                                                        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                                                                </>
                                                            )}
                                                        </div>

                                                        {/* Footer Row - Full Width with Shadow */}
                                                        <div
                                                            className="absolute bottom-0 left-0 w-full h-20 flex items-center justify-between px-5 z-20">


                                                            <div className="flex flex-col relative z-10">
                                                                <h3
                                                                    className="text-sm font-bold text-white drop-shadow-md leading-none tracking-tight">{bentoItem.title}</h3>
                                                            </div>
                                                            <div
                                                                className="text-white/90 transition-colors hover:text-white drop-shadow-md relative z-10">
                                                                {bentoItem.icon}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Inactive State - Icon + Title - Centered */}
                                                <div
                                                    className={cn(
                                                        "absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500",
                                                        isActive ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
                                                    )}>
                                                    <div className="text-white/50 group-hover:text-white transition-colors">
                                                        {bentoItem.icon}
                                                    </div>
                                                    <span
                                                        className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-wider">{bentoItem.title}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        }

                        // Skip rendering for the slots that the group takes up
                        // Group starts at 16, takes 17, 18.
                        if (i === 17 || i === 18) return null;

                        if (typeof item === "string") {
  const randomIcons = [
    FaGithub,
    FaInstagram,
    FaDiscord,
    FaXTwitter,
    FaLinkedin,
    MdEmail,
    FaFacebook,

    FaDiscord,
    MdEmail,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaXTwitter,

    FaGithub,
    FaDiscord,
    FaFacebook,
    MdEmail,
    FaInstagram,
    FaXTwitter,
    FaLinkedin,
  ];

  const Icon = randomIcons[i % randomIcons.length];

  return (
                                <figure
                                    key={`img-${i}`}
                                    data-col={i % 7}
                                    className="grid__item m-0 relative z-10 [perspective:800px] will-change-[transform,opacity] group cursor-pointer">
                                    <div
                                      className="grid__item-img w-full h-full [backface-visibility:hidden] will-change-transform rounded-xl overflow-hidden shadow-sm border border-white/10 bg-black flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105">

                                        {/* Gradient Overlay for Hover */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                                        {/* Content Container */}
                                        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                                            {/* Icon */}
                                            <Icon
  className="
    w-9
    h-9
    text-zinc-500
    transition-all
    duration-300
    group-hover:text-white
    group-hover:scale-125
  "
/>
                                        </div>
                                    </div>
                                </figure>
                            );
                        }
                        return null;
                    })}
                </div>
            </section >
            {showFooter && (
                <footer
                    className="frame__footer w-full p-8 flex justify-between items-center relative z-50 text-neutral-900 dark:text-white uppercase font-medium text-xs tracking-wider">
                    <a
                        href={credits.madeBy.href}
                        className="hover:opacity-60 transition-opacity">{credits.madeBy.text}</a>
                    <a
                        href={credits.moreDemos.href}
                        className="hover:opacity-60 transition-opacity">{credits.moreDemos.text}</a>
                </footer>
            )}
        </div >
    );
}

export default StaggeredGrid
