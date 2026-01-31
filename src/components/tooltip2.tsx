import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip-shadcn";

export const Tooltip2 = () => {
  return (
    <Tooltip >
      <TooltipTrigger data-testid="tooltip-button">Hover</TooltipTrigger>
      <TooltipContent>
        <p>This is helpful information!</p>
      </TooltipContent>
    </Tooltip>
  );
};
