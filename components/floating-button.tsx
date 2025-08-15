"use client";
import React from "react";
import {Button} from "@heroui/react";
import NextLink from "next/link";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/react";

export const EducationIcon = ({fill = "currentColor", filled , size, height, width, ...props} : any) => {
  return (
    <svg
      fill={filled ? fill : "none"}
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const ExperienceIcon = ({fill = "currentColor", filled , size, height, width, ...props} : any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M21,14H20V7a3,3,0,0,0-3-3H7A3,3,0,0,0,4,7v7H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14ZM6,7A1,1,0,0,1,7,6H17a1,1,0,0,1,1,1v7H6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V16H20Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};


export const ProjectsIcon = ({fill = "currentColor", filled , size, height, width, ...props} : any) => {
  return (
    <svg
      fill={filled ? fill : "none"}
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TechnologiesIcon = ({fill = "currentColor", filled , size, height, width, ...props} : any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M16 1.96875H8C4 1.96875 2 3.96875 2 7.96875V12.9688C2 17.9688 4 18.9688 8 18.9688H8.5C8.78 18.9688 9.14 19.1488 9.3 19.3688L10.8 21.3688C11.46 22.2488 12.54 22.2488 13.2 21.3688L14.7 19.3688C14.89 19.1188 15.19 18.9688 15.5 18.9688H16C20 18.9688 22 16.9688 22 12.9688V7.96875C22 3.96875 20 1.96875 16 1.96875ZM8.53 12.1687C8.82 12.4587 8.82 12.9387 8.53 13.2287C8.38 13.3787 8.19 13.4487 8 13.4487C7.81 13.4487 7.62 13.3787 7.47 13.2287L5.47 11.2287C5.18 10.9387 5.18 10.4587 5.47 10.1687L7.47 8.16875C7.76 7.87875 8.24 7.87875 8.53 8.16875C8.82 8.45875 8.82 8.93875 8.53 9.22875L7.06 10.6987L8.53 12.1687ZM13.69 8.65875L11.69 13.3287C11.57 13.6087 11.29 13.7787 11 13.7787C10.9 13.7787 10.8 13.7587 10.7 13.7188C10.32 13.5588 10.14 13.1187 10.31 12.7287L12.31 8.05875C12.47 7.67875 12.91 7.49875 13.3 7.66875C13.68 7.83875 13.85 8.27875 13.69 8.65875ZM18.53 11.2287L16.53 13.2287C16.38 13.3787 16.19 13.4487 16 13.4487C15.81 13.4487 15.62 13.3787 15.47 13.2287C15.18 12.9387 15.18 12.4587 15.47 12.1687L16.94 10.6987L15.47 9.22875C15.18 8.93875 15.18 8.45875 15.47 8.16875C15.76 7.87875 16.24 7.87875 16.53 8.16875L18.53 10.1687C18.82 10.4587 18.82 10.9387 18.53 11.2287Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export const FloatingButton = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);
  
  return (
    <div className="flex gap-4 items-center">
      
      <NextLink
        href="/#technologies"
      >
      <Button className="fixed bottom-4 right-4 p-1 rounded-full shadow-lg" isIconOnly aria-label="Like" color="danger"
      onMouseOver={(open) => setIsOpen1(true)} onMouseOut={(open) => setIsOpen1(false)} onClick={(e) => setIsOpen1(false)}>
         <TechnologiesIcon />
      </Button>

      {isOpen1 && <p className="font-bold text-inherit fixed bottom-6 right-18">Technologies</p>}
      
      </NextLink>


      <NextLink
        href="/#projects"
      >
      <Button className="fixed bottom-18 right-4 p-1 rounded-full shadow-lg" isIconOnly aria-label="Like" color="danger"
      onMouseOver={(open) => setIsOpen2(true)} onMouseOut={(open) => setIsOpen2(false)} onClick={(e) => setIsOpen2(false)}>
         <ProjectsIcon />
      </Button>

      {isOpen2 && <p className="font-bold text-inherit fixed bottom-20 right-18">Projects</p>}
      
      </NextLink>

      <NextLink
        href="/#experience"
      >
      <Button className="fixed bottom-32 right-4 p-1 rounded-full shadow-lg" isIconOnly aria-label="Like" color="danger"
      onMouseOver={(open) => setIsOpen3(true)} onMouseOut={(open) => setIsOpen3(false)} onClick={(e) => setIsOpen3(false)}>
         <ExperienceIcon />
      </Button>

      {isOpen3 && <p className="font-bold text-inherit fixed bottom-34 right-18">Experience</p>}
      
      </NextLink>

      <NextLink
        href="/#education"
      >
      <Button className="fixed bottom-46 right-4 p-1 rounded-full shadow-lg" isIconOnly aria-label="Like" color="danger"
      onMouseOver={(open) => setIsOpen4(true)} onMouseOut={(open) => setIsOpen4(false)} onClick={(e) => setIsOpen4(false)}>
         <EducationIcon />
      </Button>

      {isOpen4 && <p className="font-bold text-inherit fixed bottom-48 right-18">Education</p>}
      
      </NextLink>
      


    </div>
  );
}
