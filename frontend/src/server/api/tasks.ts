import type { IncomingMessage, ServerResponse } from 'http'
import url from "url"
import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const client = serverSupabaseClient(event)
    const { data } = await client.from('tasks').select()
    return { libraries: data }
  })