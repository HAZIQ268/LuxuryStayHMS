import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

<<<<<<< HEAD
// ✅ Attach token if logged in
=======
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

<<<<<<< HEAD
// ✅ Prevent unwanted redirects for website guest
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Allow guest access (don’t redirect for website routes)
    const isAdminRoute = window.location.pathname.startsWith("/admin") || window.location.pathname.startsWith("/manager");

    if (error.response && error.response.status === 401) {
      if (isAdminRoute) {
        // Admin session expired → redirect to login
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        // Website guest → just ignore 401
        console.warn("Guest mode: ignoring unauthorized API call");
      }
    }

    return Promise.reject(error);
  }
);

export default api;


// old code
// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default api;


=======
export default api;


>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366





