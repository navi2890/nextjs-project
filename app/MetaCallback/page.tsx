"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function MetaCallback() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  console.log(state);
  console.log(code, "code");

  useEffect(() => {
    if (!code || !state) return;

    const token = localStorage.getItem("token");

    const url = new URL(
      "http://192.168.1.35:3000/v1/instagram/instagram-callback"
    );

    url.searchParams.set("code", code);
    url.searchParams.set("state", state);

    fetch(url.toString(), {
      method: "GET",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Success:", data?.status);
        if (data?.status === true) {
          router.push("/sucess");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [code, state]);

  return (
    <>
      <p>Logging you in…</p>
      <strong>State</strong>
      {state}

      <strong>Code</strong>
      {code}
    </>
  );
}
