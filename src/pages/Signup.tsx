import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate()

    const [form , setForm] = useState({
        name: "",
        email : "", 
        password : "",
        confirmPassword : ""
    })

    const [error, setError] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const validate = () => {
        if (form.name.trim().length <= 2 ) {
            return "Name must be greater than 2 characters"
        } 
        if (!form.email.includes("@") || !form.email.includes(".")) {
            return "Invalid email format"
        }
        if (form.password !== form.confirmPassword) {
            return "Passwords do not match .."
        } else {
            return "";
        }
     }

     const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) {
            setError(validationError)
        } else {
            setError("")
            localStorage.setItem("authToken", "dummyToken")
            navigate("/home")
        }
     }



    return (
        <div>
         <title>Signup Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <div className="flex min-h-screen">


      <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-10 w-auto"
            src="https://baitussalam.org/images/logo-2.svg"
            alt="Your Company"/>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit} >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700"
                >Email address</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
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
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
                >Confirm Password</label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
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
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?
            <a href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
          </p>
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
export default Signup;