import { NextResponse } from "next/server";

export function middleware(request:NextResponse){

    console.log("Middleware is running");
    

    return NextResponse.next()

}