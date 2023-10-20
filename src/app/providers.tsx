"use client";
import { store } from "@/store/store";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
                <Toaster />
            </Provider>
        </SessionProvider>
    );
}