import Link from "next/link";

const DefaultAdminPage = () => {
  return (
    <>
      <div className="absolute top-0 left-0 grid w-full h-full place-content-center">
        <div className="flex items-center space-x-4">
          <Link className="px-4 py-2 rounded-md bg-slate-500" href={"/"}>
            Home
          </Link>
          <Link className="px-4 py-2 bg-gray-500 rounded-md" href={"/admin/login"}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default DefaultAdminPage;
