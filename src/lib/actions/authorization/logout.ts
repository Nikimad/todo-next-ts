"use server";

import { Endpoints } from "@/lib/endpoints";

import { cookies } from "next/headers";
import { _delete } from "@/lib/helpers/_fetch";

export const logout = async () => {
    const cookiesStore = await cookies();
    await _delete(Endpoints.Logout);
    cookiesStore.delete("_session_id");
};
