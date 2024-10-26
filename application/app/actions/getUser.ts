import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export default async function getUser() {
    const user = await currentUser()
    if(!user){
        return NextResponse.json({
            success : false,
        })
    }

    return NextResponse.json({
        ...user,
        success : true
    })
}
