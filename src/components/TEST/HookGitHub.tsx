import { useEffect, useState } from "react";

type ContributionDay = {
    date: string;
    contributionCount: number;
};

type Week = {
    contributionDays: ContributionDay[];
};

type ContributionData = {
    weeks: Week[];
};

const GITHUB_API_URL = "https://api.github.com/graphql";

export const useGitHubContributions = (username: string, token: string) => {
    const [data, setData] = useState<ContributionData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContributions = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(GITHUB_API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        query: `
                            query {
                                user(login: "${username}") {
                                    contributionsCollection {
                                        contributionCalendar {
                                            weeks {
                                                contributionDays {
                                                    date
                                                    contributionCount
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        `,
                    }),
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();
                setData(result.data.user.contributionsCollection.contributionCalendar);
            } catch (err) {
                setError("An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchContributions();
    }, [username, token]);

    return { data, loading, error };
};
