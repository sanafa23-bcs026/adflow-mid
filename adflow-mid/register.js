import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "Client" });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/register", form);
    alert(res.data.message);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} /><br/>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} /><br/>
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} /><br/>
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option>Client</option>
        <option>Moderator</option>
        <option>Admin</option>
      </select><br/>
      <button type="submit">Register</button>
    </form>
  );
}