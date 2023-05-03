export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <p className="text-gray-500">
        Built for personal usage, designed with personal preferences. Crafted by{" "}
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://twitter.com/jurrianlammerts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jurrian Lammerts
        </a>
      </p>
    </div>
  );
}
