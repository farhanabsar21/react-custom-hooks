import { FetchOptions, FetchState, UseFetchResult } from 'hook-types';
import { useState, useEffect, useCallback } from 'react';

const useFetch = <T>(url: string, options: FetchOptions = { method: 'GET' }): UseFetchResult<T> => {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        isLoading: true,
        error: null,
    });

    const fetchData = useCallback(async () => {
        setState(prev => ({ ...prev, isLoading: true }));
        try {
            const fetchOptions: RequestInit = {
                method: options.method,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            };

            if (options.body && options.method !== 'GET') {
                fetchOptions.body = JSON.stringify(options.body);
            }

            const response = await fetch(url, fetchOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setState({ data: result, isLoading: false, error: null });
        } catch (error) {
            setState({ data: null, isLoading: false, error: error as Error });
        }
    }, [url, options]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const refetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return { ...state, refetch };
};

export default useFetch;