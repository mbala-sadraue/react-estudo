import { Metadata } from "next";
import { title } from "process";

export const  metadata:Metadata ={
title:'page not found',
description:'pagina não encontrada',

}
export default function NotFound() {
    return (
        <div>
            <h1 className="text-2xl text-red-500">404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}