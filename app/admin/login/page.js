const SignIn = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-slate-800 text-slate-50">
        <div className="grid w-full h-full place-content-center">
          <div className="p-5 border-2 rounded-md border-slate-700">
            <h1>Login</h1>

            <div>
              <form>
                <div>
                  <label htmlFor="username"></label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="p-2 bg-transparent bg-slate-600 focus:outline-none"
                    placeholder="Enter Username"
                  />
                </div>
                <div>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="p-2 bg-transparent bg-slate-600 focus:outline-none"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="p-2 bg-transparent bg-slate-600 focus:outline-none"
                    placeholder="Create password"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
