export interface UseFetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    headers?: { [key: string]: string };
    body?: any;
}

export interface UseFetchResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}