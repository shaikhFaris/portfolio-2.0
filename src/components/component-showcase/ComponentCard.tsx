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
      className="w-full md:w-[48%] mb-10 p-3 bg-[var(--card)] rounded-2xl hover:bg-[var(--card-hover)] hover:cursor-default"
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        {hasVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover transition-transform duration-500 ease-out"
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
            width={800}
            height={600}
            className="w-full rounded-2xl h-full object-cover transition-transform duration-500 "
          />
        )}
      </div>
      <h3 className="mt-2 ml-2 text-sm">{item.title}</h3>
    </motion.article>
  );
}
