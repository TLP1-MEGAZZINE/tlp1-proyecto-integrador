import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const useCount = (time, route) => {

    const navigate = useNavigate()

    const [countdown, setCountdown] = useState(time);

    useEffect(() => {

        const countdownTimer = setTimeout(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                navigate(route);
            }
        }, time*250);

        return () => {
            clearTimeout(countdownTimer);

        };
    }, [countdown, navigate]);

    return countdown
} 