export type FetchStatusStr = 'loading' | 'error' | 'success' | 'none';

export interface GalleryImage {
  id: number;
  name: string;
  description: string;
  src: string | File;
  created_at: string;
}

export interface ImageData {
  src: string;
  name: string;
  description?: string;
  image: File;
}

export interface FetchStatus<T> {
  status: FetchStatusStr;
  data?: T;
  error?: any;
}

export interface Route {
  name: string;
  path: string;
  auth?: boolean;
}

export interface SidebarRoute extends Route {
  paths?: Route[];
}

export interface TimelineData {
  path: string;
  title: string;
  description: string;
  date: Date;
}

export interface TechItemData {
  name: string;
  icon: string;
  link: string;
  svg?: string;
  burn?: boolean;
}

export interface ProjectData {
  name: string;
  description: string;
  image: string;
  link: string;
  date: Date;
}
