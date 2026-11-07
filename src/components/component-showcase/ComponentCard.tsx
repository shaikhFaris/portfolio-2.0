"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import type { ComponentShowcase } from "@/lib/data/gallery";
import { playSound } from "@/lib/hover-sound";

interface ComponentCardProps {
  item: ComponentShowcase;
}

export default function ComponentCard({ item }: ComponentCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const hasVideo = Boolean(item.video) && !videoError;

  useEffect(() => {
    const element = cardRef.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35, rootMargin: "120px 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !hasVideo || reduceMotion) {
      return;
    }

    if (isInView && !isHovered) {
      const playPromise = video.play();

      if (playPromise) {
        playPromise.catch(() => undefined);
      }

      return;
    }

    video.pause();
  }, [hasVideo, isHovered, isInView, reduceMotion]);

  return (
    <motion.article
      ref={cardRef}
      tabIndex={0}
      onMouseEnter={() => {
        playSound("hover");
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="flex w-[85cqw] max-w-[calc(100vw-2rem)] shrink-0 snap-start flex-col rounded-2xl bg-[var(--card)] p-2 hover:cursor-default hover:bg-[var(--card-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground)] sm:w-[60cqw] sm:p-3 md:w-[48cqw]"
    >
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl sm:rounded-2xl">
        {hasVideo ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out motion-reduce:transition-none"
            src={item.video}
            poster={item.poster ?? item.image}
            autoPlay={!reduceMotion}
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={`${item.title} preview`}
            onError={() => setVideoError(true)}
          />
        ) : (
          <Image
            src={item.poster ?? item.image}
            alt={`${item.title} preview image`}
            fill
            sizes="(min-width: 1024px) 29vw, (min-width: 768px) 39vw, (min-width: 640px) 54vw, 77vw"
            className="object-cover transition-transform duration-500 motion-reduce:transition-none"
          />
        )}
      </div>
      <h3 className="mt-2 px-1 text-xs leading-relaxed break-words sm:px-2 sm:text-sm">
        {item.title}
      </h3>
    </motion.article>
  );
}
