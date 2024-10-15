
'use client';

import { createContext } from "react"

export const contextoLogin = createContext({
    user: null,
    setUser: () => {},
});