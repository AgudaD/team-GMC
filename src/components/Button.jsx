const Button = ({ btnText, bgColor, textColor }) => {
  return (
    <>
      <button className={`${bgColor} ${textColor} hover:opacity-80 active:opacity-50 mr-2 p-2 md:py-3 md:px-5 rounded-md border cursor-pointer`}>{btnText}</button>
      {/* <button className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-red-400 p-2 md:py-3 md:px-5 rounded-md border cursor-pointer">Join Classes</button> */}
    </>
  );
};
export default Button;