import { getDataSiswa } from "@/app/lib/action"
import { type NextRequest } from "next/server"

export async function GET(request: NextRequest){
    try{const searchParams = request.nextUrl.searchParams;
        const page = searchParams.get("page");
        console.log(page, "params in route")
        const data = await getDataSiswa(Number(page))
        console.log(data, "data in route")
        return Response.json(data)
    }catch(error){
        if(error instanceof Error){
            console.error(error, " error in route")
            return error.message
        }else{
            console.error("unexpected error accoured")
        }
    }
}