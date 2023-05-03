import Balancer from "react-wrap-balancer";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl px-5 py-48 xl:px-0">
        <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]">
          <Balancer>404</Balancer>
        </h1>
        <p className="mt-2 text-center text-gray-500 md:text-xl">
          <Balancer>Page not found</Balancer>
        </p>
      </div>
    </div>
  );
}
