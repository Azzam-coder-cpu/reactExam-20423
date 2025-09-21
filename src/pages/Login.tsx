import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }
    const registeredEmail = localStorage.getItem("userEmail");
    const registeredPassword = localStorage.getItem("userPassword");

    if (email === registeredEmail && password === registeredPassword) {
      localStorage.setItem("authToken", "dummyToken");
      setError("");
      navigate("/home");
    } else {
      setError("Account not found or incorrect password. Please sign up.");
      navigate("/");
    }
  };



    return (
        <div>
         <title>Login Page </title>
    <script src="https://cdn.tailwindcss.com"></script>
    <div className="flex min-h-screen">


      <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-10 w-auto"
            src="https://baitussalam.org/images/logo-2.svg"
            alt="Your Company"/>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Login for your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit} >

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700"
                >Email address</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
                >Password</label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {error && (
                <p>{error}</p>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Login in 
              </button>
            </div>
          </form>
             </div>
    </div>
        <div
        className="hidden items-center justify-center bg-indigo-100 lg:flex lg:w-1/2"
      >
        <div className="p-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Why Join Us?</h3>
          <p className="mb-4 text-lg text-gray-700">
            Experience the best ecommerce app for all your needs.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Get exclusive discounts and offers on your favorite products.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Fast and secure checkout process tailored for you.
          </p>
        </div>
      </div>
    </div>
    </div>

    )
}
export default Login;