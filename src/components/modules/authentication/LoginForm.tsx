import { Link } from "react-router"


const Login = () => {
  return (
     <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex min-h-screen">
        {/* Left side image */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
          <img
            src="https://source.unsplash.com/random/600x800?technology"
            alt="Login Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right side login form */}
        <div className="flex w-full md:w-1/2 items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-center">Login</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 py-2 text-white hover:bg-indigo-700 transition"
              >
                Login
              </button>
            </form>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link className="text-indigo-600 hover:underline" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login