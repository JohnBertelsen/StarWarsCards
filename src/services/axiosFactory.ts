import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const factory = {
	create: async (config?: AxiosRequestConfig) => {
		config = config || {};
		config.baseURL = `https://swapi.dev/api/${config.baseURL}/`;

		const client = axios.create(config);

		client.interceptors.request.use(config => {
			if (document.documentElement.hasAttribute('lang')) {
				config.headers["Accept-Language"] = document.documentElement.getAttribute('lang');
			}

			return config;
		})

		return client;
	},
}

export default factory;