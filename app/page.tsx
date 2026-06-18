import Link from "next/link";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Home() {
  return (
    <div className="py-20 flex justify-center gap-20">
      <div>
        <h1 className="text-[65px] font-semibold text-zinc-900">
          Hi, I&apos;m Pranish
        </h1>
        <p className="text-zinc-700 mb-5">
          An Aspiring Full Stack Developer, Systems & ML Enthusiast
        </p>
        <div className="flex gap-4 mb-6">
          <LinkBtn href="/" label="Github" icon={FaGithub} />
          <LinkBtn href="/" label="LinkedIn" icon={FaLinkedin} />
          <LinkBtn href="/" label="Email" icon={IoMail} />
        </div>
      </div>
    </div>
  );
}

type Props = {
  href: string;
  label: string;
  icon: IconType;
};

function LinkBtn({ href, label, icon: Icon }: Props) {
  return (
    <Link
      href={href}
      className="flex items-center text-[14px] gap-1.5 border border-zinc-300 py-0.75 px-2 rounded-full hover:bg-zinc-400/10 transition-colors"
    >
      <Icon /> {label}
    </Link>
  );
}
