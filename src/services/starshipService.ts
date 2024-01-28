import { ISearchResult } from '../types/shared';
import { IStarship } from '../types/starship';
import axiosFactory from './axiosFactory'

export default class StarshipService {
	private client = axiosFactory.create({
		baseURL: "starships"
	});

	public async get(id: string, signal?: AbortSignal): Promise<IStarship> {
		return (await this.client).get(`/${id}`, { signal }).then(x => x.data);
	}

	public async getAll(page?: number, signal?: AbortSignal): Promise<ISearchResult<IStarship>> {
		return (await this.client).get(`/${page && `?page=${page}`}`, { signal }).then(x => x.data);
	}

	public async search(name: string, model: string, signal?: AbortSignal): Promise<ISearchResult<IStarship>> {
		return (await this.client).get(`/?search=${name}&model=${model}`, { signal }).then(x => x.data);
	}
}