// eslint-disable-next-line react/prop-types
const Button = ({ title }) => {
  return (
    <button
      className={`rounded-sm text-slate-200 py-3 px-10 bg-[#141d38]  shadow-red-700 shadow-[inset_13rem_0_0_0]  duration-[400ms,700ms] transition-[color,box-shadow]`}
    >
      {title}
    </button>
  );
};

export default Button;
