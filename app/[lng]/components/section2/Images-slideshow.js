"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";
import p10 from "@/assets/p10.jpg";
import p11 from "@/assets/p11.jpg";
import p12 from "@/assets/p12.jpg";
import p13 from "@/assets/p13.jpg";
import p14 from "@/assets/p14.jpg";
import p15 from "@/assets/p15.jpg";
import p16 from "@/assets/p16.jpg";
import p17 from "@/assets/p17.jpg";
import p18 from "@/assets/p18.jpg";
import p19 from "@/assets/p19.jpg";
import p20 from "@/assets/p20.jpg";
import p21 from "@/assets/p21.jpg";
import p22 from "@/assets/p22.jpg";
import p23 from "@/assets/p23.jpg";
import p24 from "@/assets/p24.jpg";
import p25 from "@/assets/p25.jpg";
import p26 from "@/assets/p26.jpg";
import p27 from "@/assets/p27.jpg";
import p28 from "@/assets/p28.jpg";
import p29 from "@/assets/p29.jpg";
import p30 from "@/assets/p30.jpg";
import p31 from "@/assets/p31.jpg";

const images = [
  { image: p1, alt: "A grey couch with pillows." },
  { image: p2, alt: "Before and after cleaning the floor under a bathtub." },
  { image: p3, alt: "Before and after cleaning the dishwasher filter." },
  {
    image: p4,
    alt: "Before and after cleaning the sink full of dirty dishes.",
  },
  { image: p5, alt: "Before and after cleaning the dusty carpet." },
  {
    image: p6,
    alt: "Before and after cleaning the greasy kitchen hood filter.",
  },
  { image: p7, alt: "A neat closet full with clothes." },
  { image: p8, alt: "Comparison between the new and old HEPA filters." },
  { image: p9, alt: "Before and after cleaning the oven glass." },
  { image: p10, alt: "Before and after cleaning the dirty window." },
  { image: p11, alt: "Before and after cleaning the spices box." },
  { image: p12, alt: "Before and after cleaning the bottom of the oven." },
  { image: p13, alt: "Before and after cleaning the fridge drawer." },
  { image: p14, alt: "Before and after cleaning the greasy kitchen hood." },
  { image: p15, alt: "Before and after cleaning the bathroom faucet." },
  {
    image: p16,
    alt: "Comparison between the new and old vacuum cleaner filters.",
  },
  { image: p17, alt: "Kärcher window cleaning devices." },
  { image: p18, alt: "Toilet paper folded in a decorative way." },
  { image: p19, alt: "Before and after cleaning the pink kitchen scoop." },
  {
    image: p20,
    alt: "Before and after cleaning the messy kitchen countertop.",
  },
  {
    image: p21,
    alt: "Before and after cleaning the sink full of food and dishes.",
  },
  { image: p22, alt: "Before and after cleaning the oven glass." },
  { image: p23, alt: "Before and after cleaning the black kitchen scoop." },
  { image: p24, alt: "In the middle of claning bathroom tiles." },
  {
    image: p25,
    alt: "Before and after cleaning the floor and walls near the bathtub area.",
  },
  {
    image: p26,
    alt: "Before and after cleaning the walls behind the bathtub.",
  },
  {
    image: p27,
    alt: "Before and after cleaning the walls behind the bathtub.",
  },
  { image: p28, alt: "Before and after cleaning the dirty bathroom drain." },
  { image: p29, alt: "Before and after cleaning the bathroom sink." },
  {
    image: p30,
    alt: "Before and after cleaning the kitchen countertop and sink full of dishes.",
  },
  { image: p31, alt: "Before and after cleaning the baking tray." },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
