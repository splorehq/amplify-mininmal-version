import { NextResponse } from 'next/server'

import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
	return NextResponse.next()
}
