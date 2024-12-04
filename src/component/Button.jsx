const Button = (prop) => {
  if (prop.type === "message") console.log("message");

  return (
    <button
      className={`${prop.className} py-[10px] text-center px-[20px] border-stone-300 border-[2px] font-bold text-lg rounded-full tracking-wide`}
    >
      {prop.children}
    </button>
  );
};

export default Button;
