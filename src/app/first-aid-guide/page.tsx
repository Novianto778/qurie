import { Button } from "@/components/ui/button";
import Banner from "@/components/ui/layout/banner";
import Disclamer from "@/components/ui/layout/disclamer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const FirstAidGuide = (props: Props) => {
  const data = [
    {
      title: "CPR Basics",
      description:
        "Learn the life-saving technique of CPR to revive individuals experiencing cardiac arrest or respiratory failure. Follow the step-by-step instructions and video demonstrations to perform CPR effectively.",
      src: "/assets/images/cpr.png",
      alt: "CPR Basics",
      href: "/first-aid-guide/cpr-basics",
    },
    {
      title: "Wounds and Bleeding",
      description:
        "Master the art of wound care with our comprehensive guide. From minor cuts to severe lacerations, learn how to control bleeding, clean wounds, and apply bandages effectively.",
      src: "/assets/images/wound.png",
      alt: "Wounds and Bleeding",
      href: "/first-aid-guide/wounds-and-bleeding",
    },
    {
      title: "Fractures and Sprains",
      description:
        "Empower yourself with the knowledge to recognize and manage fractures and sprains. Follow our guide to provide immediate first aid, stabilize injuries, and reduce pain and swelling.",
      src: "/assets/images/fracture.png",
      alt: "Fractures and Sprains",
      href: "/first-aid-guide/fractures-and-sprains",
    },
  ];
  return (
    <div>
      <Banner
        bg="#F8CD9E"
        title="Welcome to the First Aid Guide"
        image="/assets/images/feature1.png"
        subtitle="Equip yourself with essential first aid knowledge to handle emergencies confidently. Explore our comprehensive guide below."
      />
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-4 rounded-lg bg-white shadow"
              >
                <div className="flex items-center gap-4 pb-4 mt-8 flex-col ">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={400}
                    className="w-full h-60"
                  />
                  <div className="px-4">
                    <h3 className="text-xl font-bold text-balance">
                      {item.title}
                    </h3>
                    <p className="text-start text-muted-foreground mt-2 max-w-3xl mx-auto line-clamp-3">
                      {item.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-4 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground duration-300"
                    >
                      <Link href={item.href}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Disclamer />
        </div>
      </section>
    </div>
  );
};

export default FirstAidGuide;
