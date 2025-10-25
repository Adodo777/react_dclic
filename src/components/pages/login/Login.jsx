import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";
import axios from "axios";


const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Required"),
});

export default function Login() {
    const navigate = useNavigate();
    async function loginApi(email, password) {
        try {
            const url = "http://localhost:3050/api/auth/login";
            const response = await axios.post(url, { email, password });
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        document.title = "Mon Mini Blog - Login";
        return () => {
            document.title = "Mon Mini Blog";
        };
    }, []);
    
    return (
        <div className="flex max-w-4xl min-h-screen mx-auto items-center justify-center p-6">
            <div className="flex gap-8">
                <div className="w-1/3 h-screen bg-black text-white flex justify-center px-5 pt-5 rounded-l-xl">
                    <h1 className="text-3xl font-bold underline">Login</h1>
                </div>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values, { setSubmitting, setStatus }) => {
                        try {
                            setStatus("Connexion en cours...");
                            setSubmitting(true);
                            await loginApi(values.email, values.password);
                            navigate("/dashbord");
                        } catch (error) {
                            setStatus("Email ou mot de passe incorrect.");
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                    className="w-2/3 h-screen flex flex-col items-center justify-center p-6"
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-lg font-bold mb-2"
                                >
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-xs italic"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 text-lg font-bold mb-2"
                                >
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-xs italic"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-gray-700 text-lg font-bold mb-2"
                                >
                                    Confirm Password
                                </label>
                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="div"
                                    className="text-red-500 text-xs italic"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <ClipLoader color="white" /> : "Login"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

