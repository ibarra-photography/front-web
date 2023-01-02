'use client';
import { ApiPhoto } from './ApiPhoto';

export interface PhotoData {
  data: Array<ApiPhoto>;
  page: string;
  totalPages: number;
}
