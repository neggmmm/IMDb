import { v4 as uuid } from 'uuid';

export async function GET(req){
    const res = await fetch("https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies")
    const data = await res.json()
     return new Response(JSON.stringify(data))
}

export async function POST(req){
    const res = await fetch("https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies")
    const data = await res.json()
    const newProject=await req.json()
    comments.push({...newProject,id:uuid()})
    return new Response(JSON.stringify(data),{status:200})
}