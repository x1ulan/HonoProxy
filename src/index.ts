import { Hono } from 'hono'

const app = new Hono()
const domain = 'https://example.com'

app.get('*', async(c) => {
    const res = await fetch(domain + c.req.path + new URL(c.req.url).search)
  console.log(domain + c.req.path + new URL(c.req.url).search)
  const newRes = new Response(res.body, res)
  return newRes
})

app.post('*', async(c) => {
  const header = c.req.header('Content-Type')
  let res;
  if(header == 'application/json'){
    const body = await c.req.raw.json()
    res = await fetch(domain + c.req.path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
  }else if(header == 'application/x-www-form-urlencoded'){
    const body = await c.req.text()
    res = await fetch(domain + c.req.path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body
    })
  }
  const newRes = new Response(res?.body, res)
  return newRes
})

export default app
