"use client";
import {Card, CardHeader, CardFooter, Image, Button} from "@heroui/react";

export const TechnologiesCard = (props:any) => {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {props.data.map((item : any) => (
        <Card key={item.name} className="col-span-12 sm:col-span-4 h-[130px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start!">
            <h4 className="text-white font-medium text-large">{item.name}</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={item.url}
          />
        </Card>
      ))}
    </div>
  );
}
