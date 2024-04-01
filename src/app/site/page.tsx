import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className='w-full md:pt-36 relative flex items-center justify-center flex-col '>
        {/* grid pattern */}
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 select-none' />

        <p className='text-center'>Run your agency, in one place</p>
        <div className='bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative'>
          <h1 className='text-9xl font-bold text-center md:text-[300px]'>
            Plura
          </h1>
        </div>

        <div className='flex justify-center items-center relative md:mt-[-70px]'>
          <Image
            src={"/assets/preview.png"}
            alt='banner image'
            height={1200}
            width={1200}
            className='rounded-tl-2xl rounded-tr-2xl border-2 border-muted select-none'
          />
          <div className='bottom-0 top-[50%] bg-gradient-to-t from-background left-0 right-0 absolute z-10'></div>
        </div>
      </section>

      {/* pricing section */}
      <section className='flex justify-center items-center flex-col gap-4 mt-20'>
        <h2 className='text-4xl text-center font-bold'>
          {" "}
          Choose what fits you right
        </h2>
        <p className='text-muted-foreground text-center font-medium text-lg'>
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>

        <div className='flex items-center gap-4 flex-wrap mt-6'>
          {pricingCards.map((card, idx) => (
            <Card
              key={idx}
              className='w-[300px] flex flex-col justify-between even:border-2 even:border-primary odd:scale-90 even:scale-105'
            >
              {/* card header */}
              <CardHeader>
                <CardTitle
                  className={clsx({
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className='text-4xl font-bold'>{card.price}</span>
                <span className=''>/m</span>
              </CardContent>
              <CardFooter className='flex flex-col  items-start gap-4'>
                <div>
                  {card.features.map((fe, idx) => (
                    <div
                      key={`${idx}ls`}
                      className='flex gap-2 items-center'
                    >
                      <CheckIcon />
                      <p>{fe}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    "w-full text-center bg-primary p-2 rounded-md",
                    {
                      "!bg-muted-foreground": card.title !== "Unlimited Saas",
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
