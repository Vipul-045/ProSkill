"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Image from 'next/image'
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === "sign-up" ? z.string().min(3) : z.string().nonempty(),
        email: z.string().email(),
        password: z.string().min(6),
    })
}

const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter();
    const formSchema = authFormSchema(type)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            if(type === 'sign-up'){
                toast.success("Account created successfully. Please sign in.");
                router.push('/sign-in')
            }else{
                toast.success("Sign in successfully.");
                router.push('/')
            }
            
        } catch (error) {
            console.error("Error submitting form", error)
            toast.error("Error submitting form")
            
        }
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
                    {!isSignIn && (<FormField control={form.control} name="name" label="Name" placeholder="Your Name"/>)} 
                    <FormField control={form.control} name="email" label="Email" placeholder="Your Email Address" type="email"/>
                    <FormField control={form.control} name="password" label="Password" placeholder="Enter your password" type="password"/>   
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