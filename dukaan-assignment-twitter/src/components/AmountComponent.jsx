export default function AmountComponent({ title, amount, orders }) {

  const formattedAmount = amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const style = { 
    fontFamily: "Poppins", 
    fontWeight: "Light",
    backgroundColor: title == "Next Payout" ? "bg-blue-700" : "white",
    color: title == "Next Payout" ? "text-gray-300" : "black"
  }

  return (
    <div
      className="bg-blue-700 rounded-md text-gray-300 shadow-lg"
      style={style}
    >
      <div className="flex items-center px-3 py-3">
        <div className="text-md inline-block">{title}</div>
        <div className="inline-block pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center p-3 justify-between">
        <div className="font-bold text-3xl inline-block">{formattedAmount}</div>
        {title == "Amount Processed" ? (
          <></>
        ) : (
          <div>
            <a href="#" className="inline-block underline">
              {orders} Orders
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        )}
      </div>
      {title != "Next Payout" ? (
        <></>
      ) : (
        <div className="flex items-center bg-blue-900 justify-between px-4 py-2 rounded-md">
          <div className="inline-block">Next Payment Date</div>
          <div className="inline-block">Today, 4:00PM</div>
        </div>
      )}
    </div>
  );
}
