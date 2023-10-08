import prisma from "@/lib/prisma";

export default async function read(){
    const result = await prisma.product.findMany({
        where:{
            id: 1,
        },
        select:{
            Product_Name: true,
            Price: true,
            Discount_Price: true,
            Description: true,
            slug: true,
            Images: {
                select:{
                    image_url: true,
                    image_type: true
                }
            }

        },
        // include:{
        //     Images: true,
        // }
    })
    return result
}