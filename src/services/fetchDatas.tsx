import { HeaderTypesI, UserTypesI } from "../types";

export function fetchUsers(): Promise<UserTypesI[]> {
  return fetch("http://localhost:3000/users").then((res) => res.json());
}

// export function fetchTags(): Promise<TagsTypeI[]> {
//   return fetch("http://localhost:3000/tags").then((res) => res.json());
// }

export function fetchTodo({ status }: { status?: string }) {
  const params = new URLSearchParams();
  if (status) params.append("status", status);
  return fetch("http://localhost:3000/todos?" + params).then((res) =>
    res.json()
  );
}

export function fetchSections(): Promise<HeaderTypesI[]> {
  return fetch("http://localhost:3000/basliklar").then((res) => res.json());
}
