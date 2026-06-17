import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export default function NavLink({ href, label, icon: Icon }: Props) {
  return (
    <Link
      className="flex items-center gap-2 py-1.25 px-2.5 rounded-full border border-transparent hover:bg-zinc-100 hover:border-zinc-200 transition-colors"
      href={href}
    >
      <Icon size={18} />
      {label && <span>{label}</span>}
    </Link>
  );
}
