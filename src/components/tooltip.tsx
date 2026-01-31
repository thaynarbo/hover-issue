import { Whisper, Tooltip, Button } from 'rsuite';

export function TooltipDemo() {
  const tooltip = <Tooltip>This is helpful information!</Tooltip>;

  return (
    <div className="flex flex-col gap-6 p-6">
      <h2 className="text-2xl font-bold">Tooltip & Whisper Demo</h2>

      <div className="flex flex-wrap gap-4">
        <Whisper placement="top" trigger="hover" speaker={tooltip}>
          <Button data-testid="tooltip-button" appearance="primary">Hover for Tooltip</Button>
        </Whisper>
      </div> 
    </div>
  );
}
