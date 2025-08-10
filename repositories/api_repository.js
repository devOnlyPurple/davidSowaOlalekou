import axios from "axios";

// Utilisez une URL relative pour que le proxy fonctionne
const api = axios.create({
  baseURL: "/api/v1", // Changé de "http://localhost:3000/api/v1" à "/api/v1"
});

// Exemple d'appels API centralisés
export const getProjects = () => {
  return api.get("/portfolio/projects");
};

export const getAllProjects = () => {
  return api.get("/portfolio/projects/all");
};
export const getProjectByKey = (key) => {
  return api.get(`/portfolio/project?key=${key}`);
};

export const sendMail = (data) => {
  return api.post("/portfolio/send_mail", data);
};

export default api;
