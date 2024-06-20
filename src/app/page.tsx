"use client";

import { Image } from "@nextui-org/react";
import { Nav } from "./components/Nav";
export default function Home() {
  return (
    <main className="container mx-auto">
      <Nav />

      <div className="font-bold leading-loose ">
        <div className=" my-8">
          <h1 className="text-6xl w-2/4 mb-8">
            Efficiently transform your invoices management.
          </h1>
          <p className="text-xl font-normal text-gray-400 w-2/4 leading-loose ">
            Manage your invoices with ease. Create, send, and get a high
            detailed report with just a few clicks.
          </p>
        </div>
        <h1 className="text-4xl text-center ">
          A product that suit your needs.
        </h1>
        <div className="grid grid-cols-3 justify-center items-center my-8">
          <ForWhoCard title="Freelancer" />
          <ForWhoCard title="Business" />
          <ForWhoCard title="Shop owner" />
        </div>

        <div className="font-bold my-8">
          <h1 className="text-4xl text-center">
            All the features that you need to{" "}
          </h1>
          <h1 className="text-xl text-center text-gray-400">
            Make your invoices management more efficient
          </h1>
        </div>

        <div className="flex flex-col">
          <FeatureCard
            title="Invoices"
            description="Create, send, and get a high detailed report with just a few clicks."
            isReversed={false}
            url="https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress"
          />
          <FeatureCard
            title="Invoices"
            description="Create, send, and get a high detailed report with just a few clicks."
            isReversed={true}
            url="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress"
          />
          <FeatureCard
            title="Invoices"
            description="Create, send, and get a high detailed report with just a few clicks."
            isReversed={false}
            url="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress"
          />
        </div>
      </div>
    </main>
  );
}

function ForWhoCard({ title }: any) {
  return (
    <div className="py-4 w-5/6 bg-transparent my-8">
      <div className=" flex-col items-start">
        <h1 className="font-bold text-4xl">{title}</h1>
      </div>
      <div className="overflow-visible py-2">
        <Image
          isBlurred
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.pexels.com/photos/6964335/pexels-photo-6964335.jpeg?auto=compress"
          width={512}
        />
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  isReversed,
  url
}: {
  title: string;
  description: string;
  isReversed: boolean;
  url: string
}) {
  return (
    <div
      className={`flex ${
        isReversed ? "flex-row-reverse" : "flex-row"
      } justify-evenly my-16`}
    >
      <div>
        <h1 className="text-4xl">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
      <Image
        isBlurred
        alt="Card background"
        className="object-cover rounded-xl"
        src={url}
        width={512}
      />
    </div>
  );
}
