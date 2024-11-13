const Header = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-12">
      <div className="min-h-[100px] bg-orange-500 col-span-4 flex justify-center items-center">img</div>
      <div className="min-h-[100px] bg-red-500 col-span-4 flex flex-row justify-center items-center gap-4">
        <div>Home</div>
        <div>Dashborad</div>
        <div>Contact</div>
      </div>
      <div className="min-h-[100px] bg-green-500 col-span-4 flex justify-center items-center">
        Sign with discord
      </div>
    </div>
  );
};

export default Header;
