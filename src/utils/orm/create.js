import prisma from "@/lib/prisma";

export default async function create(){
    const result = await prisma.product.create({
        data:{
            Product_Name: "Aavaran Tank-Top",
            Price: 100,
        }
    })
    return result
}