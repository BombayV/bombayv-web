import type { Component } from 'svelte';

export type RouteData = {
	name: string;
	path: string;
	icon?: Component;
};

export type R2Image = {
	id: number;
	src: string;
};

export type UserForm = {
	id: number;
	name: string;
	email: string;
	subject: string;
	message: string;
	read: 0 | 1;
};
