import type { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';

export const getRequest = async (url: string, config?: AxiosRequestConfig) => {
  const res = await axiosInstance.get(url, config);
  return res;
};

export const postRequest = async (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
) => {
  const res = await axiosInstance.post(url, payload, config);
  return res;
};

export const putRequest = async (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
) => {
  const res = await axiosInstance.put(url, payload, config);
  return res;
};

export const patchRequest = async (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
) => {
  const res = await axiosInstance.patch(url, payload, config);
  return res;
};

export const deleteRequest = async (
  url: string,
  config?: AxiosRequestConfig
) => {
  const res = await axiosInstance.delete(url, config);
  return res;
};
