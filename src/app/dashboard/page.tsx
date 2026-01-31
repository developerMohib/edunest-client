
export default async function DashboardPage() {
    const role = "admin";

    if (role === "admin") {
        return <h1>Welcome Admin 👑</h1>;
    }
    if (role === "manager") {
        return <h1>Manager Dashboard 📊</h1>;
    }
    return <h1>User Dashboard 🙋</h1>;
}
