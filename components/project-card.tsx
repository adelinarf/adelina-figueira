"use client";
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import { Link } from "@heroui/link";
import {Button} from "@heroui/react";
import { GithubIcon } from "@/components/icons";

export const ProjectCard = (props:any) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-left">{props.name}</p>
        <small className="text-default-500 items-start text-left">{props.description}</small>
        <h4 className="font-bold text-large text-left">{props.language}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={props.image}
          width={300}
        />
      <Link className="py-2" isExternal aria-label="project-link" href={props.link}>
        <Button radius="full"> {props.button_name == "Go to GitHub repository" ? <GithubIcon size={20}/> : "See it LIVE"}</Button>
      </Link>
      </CardBody>
    </Card>
  );
}