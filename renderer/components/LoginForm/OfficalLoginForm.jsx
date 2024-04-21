import { useEffect } from "react";
import { AuthForm } from "./AuthForm";
import { useServer } from "../store/useServer";
import { getProfile } from "../../timeversation.config";

export function OfficalLoginForm() {
    useEffect(() => {
        //
        let { socket, rest } = getProfile()
        useServer.getState().setBackend({ serverOwner: 'official', socket, rest })
    }, [])

    return <>
        <AuthForm></AuthForm>
    </>
}
