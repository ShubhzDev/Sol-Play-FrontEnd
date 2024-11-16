const Footer = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-12">
      <div className="min-h-[200px] bg-blue-500 col-span-4">
        <div className="flex flex-col p-2 gap-4">
          <div>img</div>
          <div>A one-stop destination for web3 gaming.</div>
        </div>
      </div>
      <div className="min-h-[200px] bg-pink-500 col-span-2">
        <div className="flex flex-col items-start p-2 gap-4">
          <div>Support</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="min-h-[200px] bg-teal-500 col-span-6">
        <div className="flex flex-col items-start p-2 gap-4">
          <div>Quick Link</div>
          <div>Home</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
