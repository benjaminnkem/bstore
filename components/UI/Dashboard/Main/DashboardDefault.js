"use client";
import "./styles/dashboard-default.css";
import { useStore } from "@/lib/store/auth-provider";

const DashboardDefault = () => {
  const { user } = useStore();

  return (
    <>
      <div className="flex items-center px-4">
        <div className="grid w-full grid-cols-3 gap-6 my-5">
          <div className="border rounded-lg border-zinc-600 min-h-[10rem]"></div>
          <div className="border rounded-lg border-zinc-600 min-h-[10rem]"></div>
          <div className="border rounded-lg border-zinc-600 min-h-[10rem]"></div>
        </div>
      </div>

      <section className="stat1-con">
        <div className="stat1">
          <div className="sales-con self-start min-h-[20rem]">
            <div>
              <h3 className="text-2xl font-extrabold">
                Sales Stats<span className="text-purple-500">.</span>
              </h3>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="self-start p-1">
              <h4 className="text-xl font-extrabold">
                Today Stats<span className="text-purple-500">.</span>
              </h4>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eligendi possimus fuga ratione
                aspernatur harum quod unde accusamus dolorum a! Nobis similique harum eius quas libero quos et totam.
                Minus?
              </p>
            </div>
            <div className="self-start p-1">
              <h4 className="text-xl font-extrabold">
                This Week Stats<span className="text-purple-500">.</span>
              </h4>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, adipisci!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardDefault;
