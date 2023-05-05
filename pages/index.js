import Image from "next/image";
import HeroImage from "../public/hero.webp"
import { Logo } from "../components/Logo";
import Link from "next/link";

export default function Home() {
  return (

    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImage} alt="Hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <Logo />
        <p>
          Revolutionize your content creation game with our cutting-edge AI-powered SAAS solution!
          Say goodbye to endless hours spent on crafting SEO-optimized blog posts, and hello to high-quality content in just minutes.
          Get ready to take your business to new heights with our game-changing solution.
        </p>
        <Link href="/post/new" className="btn mt-2">
          Let's Begin
        </Link>
      </div>
    </div>

  );
}
