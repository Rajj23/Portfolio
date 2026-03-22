import { useState, useEffect } from 'react';

// Community APIs for GeeksforGeeks profile data
const GFG_APIS = [
    'https://geeks-for-geeks-api.vercel.app/',
    'https://gfg-api-fefa.onrender.com/'
];

export const useGeeksForGeeksStats = (username) => {
    const [stats, setStats] = useState({
        solvedCount: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchStats = async () => {
            if (!username) return;

            let solvedCount = null;
            let success = false;

            for (const apiUrl of GFG_APIS) {
                if (success) break;
                try {
                    const response = await fetch(`${apiUrl}${username}`);
                    if (!response.ok) continue;

                    const data = await response.json();
                    
                    if (data?.info?.totalProblemsSolved !== undefined) {
                        solvedCount = data.info.totalProblemsSolved;
                        success = true;
                    } else if (data?.totalProblemsSolved !== undefined) {
                        solvedCount = data.totalProblemsSolved;
                        success = true;
                    }
                } catch (err) {
                    console.warn(`GFG Fetch failed for ${apiUrl}`, err);
                }
            }

            setStats({
                solvedCount: success && solvedCount ? solvedCount : null,
                loading: false,
                error: success ? null : "Could not fetch GeeksforGeeks stats"
            });
        };

        fetchStats();
    }, [username]);

    return stats;
};

export default useGeeksForGeeksStats;
