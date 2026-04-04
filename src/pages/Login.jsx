import { useState } from "react";

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); // temporary login success
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7FAFC]">

      <div className="relative w-[850px] max-w-full h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden flex">

        {/* LEFT SIDE */}
        <div className={`w-1/2 flex flex-col items-center justify-center p-8 transition-all duration-500 ${
          isSignUp ? "bg-white text-black" : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        }`}>
          {!isSignUp ? (
            <>
              <h2 className="text-2xl font-bold">Welcome Back!</h2>
              <p className="mt-2 text-center">Sign in to continue your journey</p>
              <button
                onClick={() => setIsSignUp(true)}
                className="mt-4 border px-4 py-2 rounded-lg"
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold">Already have account?</h2>
              <p className="mt-2 text-center">Sign in instead</p>
              <button
                onClick={() => setIsSignUp(false)}
                className="mt-4 border px-4 py-2 rounded-lg"
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-1/2 flex items-center justify-center p-8">

          <form onSubmit={handleSubmit} className="w-full max-w-sm">

            <h2 className="text-2xl font-bold text-center mb-4">
              {isSignUp ? "Create Account" : "Sign In"}
            </h2>

            {isSignUp && (
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg mb-3"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg mb-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg mb-3"
            />

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Login;