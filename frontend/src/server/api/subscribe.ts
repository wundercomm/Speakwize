import type { IncomingMessage, ServerResponse } from 'http'
import url from "url"
import { serverSupabaseClient } from '#supabase/server'

// This is the handler for the /api/subscribe?email=a@a.com insert  parameter email in table site_newsletter_subscriptions in supabase
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const client = serverSupabaseClient(event)

    // Insert the email into the table site_newsletter_subscriptions
    try {
        await client.from('site_newsletter_subscriptions').insert([
            { email: query.email }
        ])
        return { success: true }
    } catch (error) {
        console.log(error)
    }
  })
  