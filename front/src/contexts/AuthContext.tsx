import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../integrations/supabase/client";


interface IAuthcontextProps {
    email:string | undefined;
    accessToken: string | undefined;
    login(email:string, password:string): Promise<void>;
    logOut(): Promise<void>
}

const AuthContext = createContext({} as IAuthcontextProps);

