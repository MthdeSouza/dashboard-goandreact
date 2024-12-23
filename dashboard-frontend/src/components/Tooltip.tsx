import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";

export const Tooltip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content className="bg-gray-800 text-white text-sm px-2 py-1 rounded shadow">
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);
