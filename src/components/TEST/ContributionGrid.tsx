import React from "react";
import { useGitHubContributions } from './HookGitHub'
const DAYS_OF_WEEK = ['Mon', '', 'Wed', '', 'Fri'];
const MONTHS = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
type ContributionGridProps = {
    username: string;
    token: string;
};

export const ContributionGrid: React.FC<ContributionGridProps> = ({ username, token }) => {
    const { data, loading, error } = useGitHubContributions(username, token);

    if (loading) return <p>Loading contributions...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="w-full max-w-6xl">
            {/* Months labels */}
            <div className="flex mb-2 text-sm">
                <div className="w-10" /> {/* Spacing for day labels */}
                <div className="flex-1 flex justify-between text-gray-400">
                    {MONTHS.map(month => (
                        <span key={month}>{month}</span>
                    ))}
                </div>
            </div>

            <div className="flex">
                {/* Days of week labels */}
                <div className="flex flex-col justify-between text-sm text-gray-400 mr-2">
                    {DAYS_OF_WEEK.map(day => (
                        <span key={day} className="h-3">{day}</span>
                    ))}
                </div>

                {/* Contribution grid */}
                <div className="flex-1 flex gap-[3px]">
                    {data?.weeks.map((week: any, weekIndex: any) => (
                        <div key={weekIndex} className="flex flex-col gap-[3px]">
                            {week.contributionDays.map((day: any, dayIndex: any) => (
                                <div
                                    key={dayIndex}
                                    className="w-3 h-3 rounded-sm transition-all duration-200 hover:ring-2 hover:ring-green-300/30"
                                    style={{
                                        backgroundColor: getColor(day.contributionCount),
                                    }}
                                    title={`${day.date}: ${day.contributionCount} contributions`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-end gap-2 text-sm text-gray-400">
                <span>Less</span>
                {[0, 4, 8, 12, 16].map((count) => (
                    <div
                        key={count}
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: getColor(count) }}
                    />
                ))}
                <span>More</span>
                <button className="ml-4 text-gray-400 hover:text-gray-300 underline text-sm">
                    Learn how we count contributions
                </button>
            </div>
        </div>
    );
    /*   return (
          <div className="grid grid-cols-7 gap-1">
              {data?.weeks.map((week: any, weekIndex: any) => (
                  <div key={weekIndex} className="flex flex-col space-y-1">
                      {week.contributionDays.map((day: any, dayIndex: any) => (
                          <div
                              key={dayIndex}
                              className="w-4 h-4"
                              style={{
                                  backgroundColor: getColor(day.contributionCount),
                                  borderRadius: "2px",
                              }}
                              title={`${day.date}: ${day.contributionCount} contributions`}
                          />
                      ))}
                  </div>
              ))}
          </div>
      ); */
};

// Helper function to determine color based on contribution count
const getColor = (count: number): string => {
    if (count === 0) return "#222322"; // Gray for no contributions
    if (count <= 4) return "#c6e48b"; // Light green
    if (count <= 8) return "#7bc96f"; // Green
    if (count <= 12) return "#239a3b"; // Dark green
    return "#196127"; // Very dark green
};
