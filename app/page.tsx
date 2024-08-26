"use client";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center pt-40">
      <article className="prose" >
        {/* Added a negative margin on the bottom due to the distance between the text */}
        <h1 className=" mb-[-1.5rem]">Welcome stranger.</h1>
        <h2>Feel free to look around or use my tools
        </h2>
      </article>
    </div>
  );
}
