import { useContext } from "react";
import { Contexts } from "../../Context/Context";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
        const ip = useLocation();
        const Navigate = useNavigate();

        const { LoginUser , GoogleLogin } = useContext(Contexts);

        const Submit = e => {
            e.preventDefault();
            console.log(e.currentTarget.email.value)
            const Form = new FormData(e.currentTarget);
            const email = Form.get('email');
            const password = Form.get('password');
            const first_name = Form.get('first_name');
            const last_name = Form.get('last_name');
            const number = Form.get('phone');
            console.log(email, password, first_name, last_name, number)
            LoginUser(email, password, first_name, last_name, number)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log('hello',user)
                    Navigate(ip?.state ? ip?.state : '/')
                    // ...
                })
                .catch((error) => {

                    const errorMessage = error.message;
                    console.log(errorMessage)
                    // ..
                });
        }

        const Google = () => {
            GoogleLogin()
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                Navigate(ip?.state ? ip?.state : '/' )
                // ...
              })
              .catch((error) => {
            
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
              });
        }
        return (
            <div className="max-w-7xl flex justify-center py-10  px-5 mx-auto">


                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">



                    <form onSubmit={Submit} className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                        </div>
                        <button type="submit" className="text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login to your account</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to='/SignUp' className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                        </div>
                    </form><br /> <h1 className="text-center"> ---------------------- or ----------------------</h1><br />
                    <div className="flex justify-center">
                        <button onClick={Google} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    export default Login;