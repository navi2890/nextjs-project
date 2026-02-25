"use client";
import { useEffect, useState } from "react";
import DxGrid from "../Components/common/DxGrid";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  console.log(users, "users");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token =
      "eyJraWQiOiJaMnZjZVRkbWttWk1Ra1pQanVUMmFZNEh0TlRBZDJJaGkwakJua0lZUk5VPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1MTZiYTVhMC1jMDIxLTcwMTItZWU3Yy1iNTc1ZGQ2NzQyZDkiLCJjb2duaXRvOmdyb3VwcyI6WyJTdXBlci1BZG1pbiJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9Jc1dtV3BiNGIiLCJjbGllbnRfaWQiOiIzODZxam5oNGwxNXM4bjhqMjlsdXZucG80cyIsIm9yaWdpbl9qdGkiOiI1MzRkM2U5Mi1hOWRlLTQzOTYtOGQ1Zi0xMjQ2ZDQ5OTk5NjAiLCJldmVudF9pZCI6ImEwYTNiMmUxLWNjMjctNGM1OS1iNDQzLTg5OGY1MWFiZDYyNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3NzE5OTEyMzAsImV4cCI6MTc3MjA3NzYzMCwiaWF0IjoxNzcxOTkxMjMwLCJqdGkiOiI2OWMzZDM3Ny1lZWRjLTQ0MDktYjQ4OS01MTdlYWJmNjIwNWYiLCJ1c2VybmFtZSI6IjUxNmJhNWEwLWMwMjEtNzAxMi1lZTdjLWI1NzVkZDY3NDJkOSJ9.GwbaaO_mrQcsOSZWBwE0GamVffSSGBvrAjhlpivGwYGlLoSAtH4I22Gxqnf1aXNQxHMY9wMUy4lX9WGEjTjSItZXyuTYTetPfQbSOugQ9RThK723QqOxCUtxya1wIlCFZ7qcidvDH2CMjUxo6qUwY0J4zrjmlksGLnlYJ3X7uHVzLAAXWXoGMN7KC16DEjqwfuCPu4NgDAsULOMwu_WwfgL9oiqK4u8yAVN7mJ-L27C6A56FA3Zs7lLhdzDkJ7sQmMtYNtpgfji_X51Y8iekrRwGF9FGfa3cOwLEBSQ20dlKqTfX-HyAkNeAvkG7w9fqdreE493kc9pk-6QxrOhwfA";
    const url = "http://192.168.1.6:5000/v1/users/list";

    setLoading(true);

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const formatted = response.data.map((item: any) => ({
          id: item.id,
          user_name: item.user_name,
          email: item.user_email,
          phone: item.user_phone,
          company: item.reg_company_name,
          role: item.role?.name,
          status: item.status?.name,
          created_at: item.created_at,
        }));

        setUsers(formatted);
        // setUsers(response?.data || []);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <DxGrid
      data={users}
      users="Users List"
      loading={loading}
      columns={undefined}
    />
  );
}
