"use client";

import {Card, CardBody} from "@heroui/react";

export const WorkCard = (props:any) => {
  return (
    <Card key={props.role}>
      <CardBody>
        <p>{props.role}</p>
        <p>{props.time}</p>
        {props.tasks.map((task:any,i:any) => (
            <li key={"task__"+i}> {task} </li>
          ))}
      </CardBody>
    </Card>
  );
}
