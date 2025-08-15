"use client";
import {Avatar} from "@heroui/react";

export const CustomAvatar = () => {
  return (
    <div className="flex gap-4 items-center">
      <Avatar
      size="md"
        src="/photos/photo.jpg"
      />
    </div>
  );
}
