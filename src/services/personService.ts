import { ISearchResult } from '../types/shared';
import { IPerson } from '../types/person';
import axiosFactory from './axiosFactory'

export default class PersonService {
	private client = axiosFactory.create({
		baseURL: "people"
	});

	public async get(id: string, signal?: AbortSignal): Promise<IPerson> {
		return (await this.client).get(`/${id}`, { signal }).then(x => x.data);
	}

	public async getAll(page?: number, signal?: AbortSignal): Promise<ISearchResult<IPerson>> {
		const url = page != undefined ? `/?page=${page}` : `/`;
		return (await this.client).get(url, { signal }).then(x => x.data);
	}

	public async search(name: string, signal?: AbortSignal): Promise<ISearchResult<IPerson>> {
		return (await this.client).get(`/?search=${name}`, { signal }).then(x => x.data);
	}
}