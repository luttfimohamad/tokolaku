import Navbar from '@/components/navbar';

const Login = () => {
  return (
    <div className="bg-slate-600">
      <Navbar />
      <form className="mx-auto max-w-5xl min-h-screen w-full h-full flex justify-center items-center">
        <div className="w-[50%] bg-slate-700 text-white rounded-lg p-6">
          <h1 className="font-bold text-2xl mb-6 block text-center">Login</h1>
          <label htmlFor="username" className="block mb-5">
            <span className="block mb-3">Username</span>
            <input
              type="text"
              className="bg-white p-3 w-full outline-none rounded-lg text-slate-700"
              name="username"
              id="username"
              value=""
            />
          </label>
          <label htmlFor="password" className="block mb-5">
            <span className="block mb-3">Password</span>
            <input
              type="password"
              className="bg-white p-3 w-full outline-none rounded-lg text-slate-700"
              name="password"
              id="password"
              value=""
            />
          </label>
          <button
            type="submit"
            className="block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg w-full"
          >
            Go to my account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
