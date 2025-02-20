"use client";
import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  prepTimeMinutes: number;
  servings: number;
}

export default function Recipies() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data.recipes.slice(0, 10));
    };
    fetchRecipes();
  }, []);

  return recipes.length > 0 ? (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Prep Time (mins)</th>
            <th style={styles.th}>Servings</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id} style={styles.tr}>
              <td style={styles.td}>{recipe.id}</td>
              <td style={styles.td}>{recipe.name}</td>
              <td style={styles.td}>{recipe.prepTimeMinutes}</td>
              <td style={styles.td}>{recipe.servings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div style={styles.noData}>
      <h1>No recipes found</h1>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "20px",
  },
  table: {
    width: "80%",
    borderCollapse: "collapse" as "collapse",
    textAlign: "center" as const, // Ensure text is centered
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  th: {
    backgroundColor: "#333",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ddd",
  },
  tr: {
    borderBottom: "1px solid #ddd",
    transition: "background-color 0.3s",
  },
  td: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ddd",
  },
  noData: {
    textAlign: "center" as const,
    padding: "20px",
  },
};
