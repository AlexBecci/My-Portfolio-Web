import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

export function Github() {
    const customTheme = {
        light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    };

    return (
        <motion.div
            id="github"
            className="flex flex-col max-w-7xl glass-card xl:mx-auto rounded-xl mx-4 p-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl font-bold pb-6">
                Git<span className="text-green-500/80">Hub</span> Activity
            </h2>
            <div className="overflow-x-auto w-full flex justify-center">
                <GitHubCalendar
                    username="AlexBecci"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={14}
                    theme={customTheme}
                />
            </div>
        </motion.div>
    );
}
