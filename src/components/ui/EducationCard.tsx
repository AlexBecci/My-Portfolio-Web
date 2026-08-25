import { educationData } from "../../data/education";

export const EducationCard = () => {
    return (
        <div className="bg-white    py-6 max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl px-6  text-gray-800 mb-4">Educación</h3>
            <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {educationData.map((item, index) => (
                    <>
                        {/*         <li key={index} className="flex items-start">
                            <span className="w-2.5 h-2.5 bg-teal-500 rounded-full mt-2 mr-4"></span>
                            <div>
                                <h4 className="text-lg  gap-4 text-gray-700">{item.degree}</h4>
                                <p className="text-gray-500">{item.institution}</p>
                                <p className="text-gray-400 text-sm">{item.date}</p>
                            </div>
                        </li> */}
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-4">
                            <h2 className="text-xl  text-gray-800">{item.degree}</h2>
                            <p className="text-blue-600 text-sm mt-2">{item.institution}</p>
                            <p className="text-gray-700 mt-4">{item.date}</p>
                        </div>
                    </>


                ))}
            </ul>
        </div>
    );
};

