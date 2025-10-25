import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function useToken(path) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate(path);
        }
    }, [path, navigate]);
}