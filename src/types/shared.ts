export interface ISearchResult<T> {
	count: number;
	next: string;
	previous: string;
	results: T[];
}