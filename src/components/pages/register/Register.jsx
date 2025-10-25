import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners";
import axios from "axios";



const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    firstname: Yup.string().required("Required"),
    role: Yup.string().required("Required"), //defaut user (champ a caché)
    password: Yup.string().min(8, "Too Short!").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Required"),
});

export default function Register() {

    async function registerApi(email, username, lastname, firstname, role, password) {
        try {
            const url = "http://localhost:3050/api/auth/register";
            const response = await axios.post(url, { email, username, lastname, firstname, role, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        } 
    }

    return (
        <div className="flex max-w-4xl min-h-screen mx-auto items-center justify-center p-6">
            <div className="flex gap-8">
                <div className="w-1/3 h-screen bg-black text-white flex justify-center px-5 pt-5 rounded-l-xl">
                    <h1 className="text-3xl font-bold underline">Register</h1>
                </div>
                <Formik
                    initialValues={{
                        email: "",
                        username: "",
                        lastname: "",
                        firstname: "",
                        role: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={(values, { setSubmitting , setStatus }) => {
                        setTimeout(async () => {
                            try {
                                await registerApi(values.email, values.username, values.lastname, values.firstname, values.role, values.password);
                                setStatus({ success: true });
                            } catch (error) {
                                setStatus({ success: false, message: error.message });
                            } finally {
                                setSubmitting(false);
                            }
                        }, 400);
                    }}
                >
                    {({ isSubmitting, status }) => (
                        <Form className="w-2/3 h-screen flex flex-col items-center justify-between p-6 rounded-r-xl">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-gray-600 mb-2">Email</label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 mb-4" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="username" className="text-gray-600 mb-2">Username</label>
                                <Field
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
                                />
                                <ErrorMessage name="username" component="div" className="text-red-500 mb-4" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="lastname" className="text-gray-600 mb-2">Lastname</label>
                                <Field
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
                                />
                                <ErrorMessage name="lastname" component="div" className="text-red-500 mb-4" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="firstname" className="text-gray-600 mb-2">Firstname</label>
                                <Field
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
                                />
                                <ErrorMessage name="firstname" component="div" className="text-red-500 mb-4" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="role" className="text-gray-600 mb-2">Role</label>
                                <Field
                                    type="text"
                                    id="role"
                                    name="role"
                                    className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
                                />
                                <ErrorMessage name="role" component="div" className="text-red-500 mb-4" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-gray-600 mb-2">Password</label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 mb-4" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="confirmPassword" className="text-gray-600 mb-2">Confirm Password</label>
                                <Field
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 mb-4" />
                            </div>
                            {status && status.success ? (
                                <p className="text-green-500">Inscription réussie !</p>
                            ) : (
                                <p className="text-red-500">{status && status.message}</p>
                            )}
                            <button
                                type="submit"
                                className="bg-black text-white px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <ClipLoader color="white" size={20} /> : "Register"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
