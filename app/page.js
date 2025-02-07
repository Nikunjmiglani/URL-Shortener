import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-200">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="items-center flex flex-col justify-center">
          <p className=" font-sans font-extrabold text-xl">The best URL shortner in the market</p>
          <p className="py-4 text-center">We are the most straightforward URL shortner 
          </p>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
        </div>

        <div className=" justify-start flex relative">
          <Image className="mix-blend-darken" src={"/vector.jpg"} alt="alt" fill={true} />
        </div>
      </section>
    </main>
  );
}
