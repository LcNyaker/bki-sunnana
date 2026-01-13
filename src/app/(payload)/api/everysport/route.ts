import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch('https://api.everysport.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          team(id: "165144") {
            id
            name
            shortName
            logo
            class
          }
        }
      `,
    }),
  })

  const data = await res.json()

  return NextResponse.json(data)
}
