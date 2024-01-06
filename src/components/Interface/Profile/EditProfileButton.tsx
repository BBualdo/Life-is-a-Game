import { cn } from "@/src/lib/utils";
import { ClassValue } from "clsx";

const EditProfileButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: ClassValue;
}) => {
  return <button className={cn(className)}>{children}</button>;
};

export default EditProfileButton;
