import AmountComponent from "./AmountComponent";

export default function Overview() {
  return (
    <div className="m-5">
      <div className="flex items-center justify-between py-5">
        <div className="inline-block font-semibold text-lg" style={{fontFamily: "Poppins"}}>Overview</div>
        <div className="inline-block">This Month</div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-6 lg:col-span-2"><AmountComponent title="Next Payout" amount={2312.23} orders={23} />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <AmountComponent
            title="Amount Pending"
            amount={92312.2}
            orders={13}
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <AmountComponent
            title="Amount Processed"
            amount={2392312.19}
            orders={13}
          />
        </div>
      </div>
    </div>
  );
}
