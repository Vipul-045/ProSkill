"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from "next/link"

const authFormSchema = (type: FormType) => {
    return z.object({
        username: type === "sign-in" ? z.string() : z.string().nonempty(),
        email: z.string().email(),
        password: z.string().min(6),
    })
}

const AuthForm = ({type}: {type: FormType}) => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const isSignIn = type === "sign-in";

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.svg" width={32} height={38} alt="logo" />
                    <h2 className="text-primary-100">ProSkill</h2>


                </div>
                <h3>Practice job interview with AI</h3>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                    {!isSignIn && <p>Name</p>} 
                    <p>Email</p>
                    <p>Password</p>   
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
                <p className="text-center">
                    {isSignIn ? 'No account yet?' : 'Already have an account?'}
                    <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">{!isSignIn ? "Sign in" : "Sign up"}</Link>
                </p>
            </div>
        </div>
    )
}

export default AuthForm