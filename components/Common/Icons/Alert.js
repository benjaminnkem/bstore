const CustAlert = ({ message, status }) => {
  return (
    <>
      <div
        className={`absolute top-0 opacity-0 translate-x-full right-0 mx-auto bg-[#2a2b35] bg-opacity-80 px-6 py-2 rounded-md border-opacity-20 cust-alert border border-green-500 ${
          status === "red" && "border-red-500"
        }`}
      >
        <p>{message}</p>
      </div>
    </>
  );
};

export default CustAlert;
