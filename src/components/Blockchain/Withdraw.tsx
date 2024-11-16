const Withdraw = () => {
  return (
    <div className="bg-blue-500 min-h-[200px] min-w-[400px]">
      <div className="flex flex-col p-5 gap-10">
        <div className="flex items-start p-4 gap-5">
        Withdraw Amount
        <label>
          <input name="myInput" />
        </label>
        </div>
        <div className="">
          <button>Withdraw</button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
