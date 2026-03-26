import { useState, useEffect } from 'react';

const LEETCODE_API_ENDPOINT = '/api/leetcode';

const query = `
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
    userContestRanking(username: $username) {
      rating
      topPercentage
    }
  }
`;

export const useLeetCodeStats = (username) => {
  const [stats, setStats] = useState({
    solvedCount: null,
    contestRating: null,
    topPercentage: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(LEETCODE_API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: { username }
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        
        if (json.errors) {
          throw new Error(json.errors[0].message);
        }

        const data = json.data;
        
        // Extract total solved problems
        const acSubmissions = data.matchedUser?.submitStats?.acSubmissionNum || [];
        const totalSolved = acSubmissions.find(item => item.difficulty === 'All')?.count || null;
        
        // Extract contest rating
        const rating = data.userContestRanking?.rating ? Math.round(data.userContestRanking.rating) : null;
        const topPercentage = data.userContestRanking?.topPercentage ? data.userContestRanking.topPercentage : null;

        setStats({
          solvedCount: totalSolved,
          contestRating: rating,
          topPercentage: topPercentage,
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error("Failed to fetch LeetCode stats:", err);
        setStats(prev => ({ ...prev, loading: false, error: err.message }));
      }
    };

    if (username) {
      fetchStats();
    }
  }, [username]);

  return stats;
};

export default useLeetCodeStats;
