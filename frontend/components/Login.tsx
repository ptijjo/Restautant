'use client'
import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

type Inputs = {
    email: string
    password: string
}

const Login = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const connectUser = await axios.post("", data);
            toast.success(`Bienvenue ${connectUser.data.data.pseudo}`);
            localStorage.setItem("token", connectUser.data.token);

            /*setTimeout(() => {
              navigate.push("/dashboard")
            }, 2000);*/

        } catch (error: any) {
            toast.error(`${error.response.data.message}`)
        }

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-1.5 w-4/5 max-w-lg">
            <Input type="email" placeholder="e-mail" id="email" autoComplete="false" className="rounded-none placeholder-red-400 pl-4" {...register("email")} />
            {errors.email && errors.email.type === "required" && <span>Email Obligatoire</span>}

            <Input type="password" placeholder="password" id="password" autoComplete="false" className="rounded-none" {...register("password", { required: true })} />
            {errors.password && errors.password.type === "required" && <span>Mot de passe obligatoire</span>}

            <Button type="submit" className="mt-2.5 bg-blue-400">Se connecter</Button>

            <ToastContainer autoClose={2000} />
        </form>

    )
}

export default Login