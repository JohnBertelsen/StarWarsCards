import { ISearchResult } from '../types/shared';
import { IPlanet } from '../types/planet';
import axiosFactory from './axiosFactory'

export default class PlanetService {
	private client = axiosFactory.create({
		baseURL: "planets"
	});

	public async get(id: string, signal?: AbortSignal): Promise<IPlanet> {
		return (await this.client).get(`/${id}`, { signal }).then(x => x.data);
	}

	public async getAll(page?: number, signal?: AbortSignal): Promise<ISearchResult<IPlanet>> {
		return (await this.client).get(`/${page && `?page=${page}`}`, { signal }).then(x => x.data);
	}

	public async search(name: string, signal?: AbortSignal): Promise<ISearchResult<IPlanet>> {
		return (await this.client).get(`/?search=${name}`, { signal }).then(x => x.data);
	}
}