export default function HamburgerSection() {
  return (
    <div>
      <Name />
    </div>
  );
}

function Name() {
  return (
    <div className="w-40 h-20 bg-gray-950">
      <div className="w-10 h-10 bg-gray-200 rounded-sm"></div>
      <div>
        <div>Nishyan</div>
        <div>Visit Store</div>
      </div>
      <div className="w-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}
