// import { unstable_noStore } from 'next/cache';
import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

// export const revalidate = 5;
export const dynamic = 'force-dynamic';
// force-dynamic => always refetch
// force-static => would never refetch

export default async function MessagesPage() {
  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
