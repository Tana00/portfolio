import { ICONS, type IconName } from "@/components/Icons";

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = ICONS[name];
  return <IconComponent className={className} />;
}
