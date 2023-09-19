import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    // Add authentication logic here (NextAuth.js or other library)
    // If authentication is successful, call onLogin() with user data
    const user = await authenticateUser(email, password);
    if (user) {
      onLogin(user);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Simulated authentication function
async function authenticateUser(email, password) {
  if (email === "user@example.com" && password === "1Password") {
    return { email: "user@example.com" };
  }
  return null;
}
