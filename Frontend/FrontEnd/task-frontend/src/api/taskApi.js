import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/tasks"
});

export const getTasks = (page, size) =>
  API.get(`?page=${page}&size=${size}`);

export const addTask = (task) =>
  API.post("", task);

export const deleteTask = (id) =>
  API.delete(`/${id}`);

export const updateStatus = (id, status) =>
  API.put(`/${id}/status?status=${status}`);

export const filterTasks = (status, page, size) =>
  API.get(`/filter?status=${status}&page=${page}&size=${size}`);

export const searchTasks = (title, page, size) =>
  API.get(`/search?title=${title}&page=${page}&size=${size}`);