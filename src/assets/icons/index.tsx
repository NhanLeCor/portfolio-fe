
import { cn } from "@/utils/classname";

import BgMask from "./BgMaskIcon.svg";
import ArrowUp from "./ArrowUpIcon.svg";

export const BgMaskIcon = (props: IIconProps) => (
  <BgMask {...props} className={cn(props.className)} />
);

export const ArrowUpIcon = (props: IIconProps) => (
  <ArrowUp {...props} className={cn(props.className)} />
);