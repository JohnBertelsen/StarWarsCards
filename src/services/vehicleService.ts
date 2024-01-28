import { ISearchResult } from '../types/shared';
import { IVehicle } from '../types/vehicle';
import axiosFactory from './axiosFactory'

export default class VehicleService {
	private client = axiosFactory.create({
		baseURL: "vehicles"
	});

	public async get(id: string, signal?: AbortSignal): Promise<IVehicle> {
		return (await this.client).get(`/${id}`, { signal }).then(x => x.data);
	}

	public async getAll(page?: number, signal?: AbortSignal): Promise<ISearchResult<IVehicle>> {
		return (await this.client).get(`/${page && `?page=${page}`}`, { signal }).then(x => x.data);
	}

	public async search(name: string, model: string, signal?: AbortSignal): Promise<ISearchResult<IVehicle>> {
		return (await this.client).get(`/?search=${name}&model=${model}`, { signal }).then(x => x.data);
	}
}