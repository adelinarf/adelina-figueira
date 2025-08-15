"use client";

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

export const CoursesCard = (props:any) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="/edx.png"
          width={60}
        />
        <div className="flex flex-col">
          <p className="text-md">{props.code}</p>
          <p className="text-small text-default-500">Online Course</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{props.name}</p>
      </CardBody>
      <Divider />
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
