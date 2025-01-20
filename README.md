# 🌟 Tail News

**Tail News** is a dynamic and modern news portal that allows users to explore the latest trends, featured articles, and categorized news, whether authenticated or not. The app combines an attractive and functional interface with a robust backend to deliver a smooth and optimized experience.

---

## 🎯 Key Features

### 📖 News Navigation

- **Latest Articles:** Displays the most featured article and six recent ones, organized by date.
- **Trending News:** A section with the most popular news based on their socialScore, featuring pagination.
- **Categories:** News organized by topics like Business, Health, Sports, and more.
- **Article Details and Related** Detail about the news selected by the user and related news.

### 🔍 Advanced Search

- **Search by categories:** Users can filter articles by specific categories.
- **Optimization:** Debounce implemented to avoid redundant requests while typing.

### 🛠️ Authentication and User Management

- **Sign-up and Sign-in:** Supports email/password and Google authentication.
- **Profile Management:** Users can edit their name and profile picture if registered via email.
- **Favorites:** Authenticated users can save, delete, and view their favorite articles.

### 🖼️ Modern Interface

- Skeletons for loading states in news sections.
- Support for **light and dark mode**.
- Dynamic navbar highlighting the user’s current location.

---

## 🚀 Technologies Used

### 🧩 Frontend

- **React**: For building the user interface.
- **TypeScript**: Strong typing for safer and more efficient development.
- **Redux Toolkit & RTK Query**: Global state management and optimized data fetching.
- **Tailwind CSS and ShadCN**: Stylish design and reusable components.
- **React Hook Form & Zod**: Controlled forms with advanced validations.

### 🔒 Backend and Services

- **Firebase Authentication**: Secure and flexible authentication.
- **Cloudinary**: Image management for profile pictures.
- **News API**: External data consumption to fetch updated and categorized news
