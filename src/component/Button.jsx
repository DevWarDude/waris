const Button = (prop) => {
  if (prop.type === "message") console.log("message");

  return (
    <button
      className={`${prop.className} sm:py-[10px] text-center sm:px-[20px] border-stone-300 border-[2px] font-bold sm:text-lg rounded-full tracking-wide px-[16px] py-[8px]`}
    >
      {prop.children}
    </button>
  );
};

export default Button;
