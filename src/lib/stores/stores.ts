import { writable } from 'svelte/store';

export const sidebar = writable<boolean>(false);
export const currentRoute = writable<string>('/');
export const currentRouteState = writable<'loading' | 'loaded'>('loaded');
