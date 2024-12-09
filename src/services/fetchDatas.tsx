import { HeaderTypesI, MissionsTypesI, UserTypesI } from "../types";

export function fetchUsers(): Promise<UserTypesI[]> {
  return fetch("http://localhost:3000/users").then((res) => res.json());
}

export function fetchTodo({ status }: { status?: string }) {
  const params = new URLSearchParams();
  if (status) params.append("status", status);
  return fetch("http://localhost:3000/todos?" + params).then((res) =>
    res.json()
  );
}

export function fetchAllTodos(): Promise<MissionsTypesI[]> {
  return fetch("http://localhost:3000/todos").then((res) => res.json());
}

export function fetchSections(): Promise<HeaderTypesI[]> {
  return fetch("http://localhost:3000/basliklar").then((res) => res.json());
}
