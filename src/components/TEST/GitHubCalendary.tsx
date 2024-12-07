import GitHubCalendar from "react-github-calendar";

export function Github() {
    // Tema de colores personalizado con colores extraídos de la imagen
    const customTheme = {
        light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"], // Reemplaza con tus colores claros
        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"], // Reemplaza con tus colores oscuros
    };

    return (
        <div id="github" className="flex flex-col max-w-7xl  bg-black/20 sm:mx-4 lg:mx-auto rounded-md mx-4 p-4 lg:p-0 items-center pb-10">
            <h1 className="text-3xl font-bold pb-5">
                Git <span className="text-green-500/80">Hub</span>
            </h1>
            <GitHubCalendar
                username="AlexBecci"
                blockSize={15}
                blockMargin={5}
                fontSize={16}
                theme={customTheme} // Tema actualizado
            />
        </div>
    );
}
