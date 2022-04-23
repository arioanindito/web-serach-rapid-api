import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("Elon Musk");

	const getResults = async (url) => {
		setLoading(true);

		const res = await fetch(`${baseUrl}${url}`, {
			method: "GET",
			headers: {
				"x-rapidapi-host": "google-search3.p.rapidapi.com",
				"x-rapidapi-key": process.env.REACT_APP_API_KEY,
			},
		});

		const data = await res.json();

		if (url.includes("/news")) {
			setResults(data.entries);
		} else if (url.includes("/images")) {
			setResults(data.image_results);
		} else {
			setResults(data.results);
		}

		// setResults(data);
		setLoading(false);
	};

	return (
		<StateContext.Provider
			value={{ getResults, results, searchTerm, setSearchTerm, loading }}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);

//
//
//
//
// import React, { createContext, useContext, useState } from "react";

// const StateContext = createContext();
// const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

// export const StateContextProvider = ({ children }) => {
// 	const [results, setResults] = useState([]);
// 	const [loading, setLoading] = useState(false);
// 	const [searchTerm, setSearchTerm] = useState("");

// 	const getResults = async (url) => {
// 		setLoading(true);

// 		const res = await fetch(`${baseUrl}${url}`, {
// 			method: "GET",
// 			headers: {
// 				"x-rapidapi-host": "google-search3.p.rapidapi.com",
// 				"x-rapidapi-key": "e0f70853c7msh66d970a732e208ep1663d2jsn3b263485902b",
// 			},
// 		});

// 		const data = await res.json();

// 		setResults(data);
// 		setLoading(false);
// 	};

// 	return (
// 		<StateContext.Provider
// 			value={{ getResults, results, searchTerm, setSearchTerm, loading }}
// 		>
// 			{children}
// 		</StateContext.Provider>
// 	);
// };

// export const useStateContext = () => useContext(StateContext);

//
//
//
//

// import React, { createContext, useContext, useState } from "react";
// // import React, { createContext, useContext, useState } from "react";

// const StateContext = createContext();
// const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
// // const StateContext = createContext();
// // const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

// // export const StateContextProvider = ({ children }) => {
// export const StateContextProvider = ({ childern }) => {
// 	const [results, setResults] = useState([]);
// 	const [loading, setLoading] = useState(false);
// 	const [searchTerm, setSearchTerm] = useState("");
// 	// 	const [results, setResults] = useState([]);
// 	// 	const [loading, setLoading] = useState(false);
// 	// 	const [searchTerm, setSearchTerm] = useState("");

// 	// 	const getResults = async (url) => {
// 	const getResults = async (url) => {
// 		setLoading(true);
// 		// 	setLoading(true);

// 		// 	const res = await fetch(`${baseUrl}${url}`, {
// 		const res = await fetch(`${baseUrl}${url}`, {
// 			method: "GET",
// 			headers: {
// 				"x-rapidapi-host": "google-search3.p.rapidapi.com",
// 				"x-rapidapi-key": "e0f70853c7msh66d970a732e208ep1663d2jsn3b263485902b",
// 			},
// 		});
// 		// 		method: "GET",
// 		// 		headers: {
// 		// 			"x-rapidapi-host": "google-search3.p.rapidapi.com",
// 		// 			"x-rapidapi-key": "e0f70853c7msh66d970a732e208ep1663d2jsn3b263485902b",
// 		// 		},
// 		// 	});

// 		const data = await res.json();
// 		setResults(data);
// 		setLoading(false);

// 		// 	const data = await res.json();
// 		// 	setResults(data);
// 		// 	setLoading(false);
// 	};

// 	return (
// 		<StateContext.Provider
// 			value={{ getResults, results, searchTerm, setSearchTerm, loading }}
// 		>
// 			{childern}
// 		</StateContext.Provider>
// 	);

// 	// 	return (
// 	// 		<StateContext.Provider
// 	// 			value={{ getResults, results, searchTerm, setSearchTerm, loading }}
// 	// 		>
// 	// 			{children}
// 	// 		</StateContext.Provider>
// 	// 	);
// 	// };
// };

// export const useStateContext = () => useContext(StateContext);
// // export const useStateContext = () => useContext(StateContext);
