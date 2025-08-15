"use client";

import {Card, CardHeader, CardBody, Image} from "@heroui/react";

export const EducationCard = () => {
  return (
    <>
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Computer Engineering</p>
        <small className="text-default-500">2025 Graduate</small>
        <h4 className="font-bold text-large">Universidad Simón Bolívar (Caracas, Venezuela)</h4>
        <p className="text-tiny uppercase font-bold">Thesis: Construction of a knowledge graph for reasoning about code in Large Language Models</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="./usb.jpg"
          width={270}
        />
      </CardBody>
    </Card>
    </>
  );
}
