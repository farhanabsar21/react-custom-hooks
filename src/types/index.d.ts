declare module 'hook-types' {
    export interface FetchState<T> {
        data: T | null;
        isLoading: boolean;
        error: Error | null;
    }

    export interface FetchOptions {
        method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
        headers?: Record<string, string>;
        body?: any;
    }

    export interface UseFetchResult<T> extends FetchState<T> {
        refetch: () => void;
    }

    export function useFetch<T>(url: string, options?: FetchOptions): UseFetchResult<T>;
}