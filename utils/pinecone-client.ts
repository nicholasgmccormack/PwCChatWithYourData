<<<<<<< HEAD
import { PineconeClient } from '@pinecone-database/pinecone';

if (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {
  throw new Error('Pinecone environment or api key vars missing');
}

async function initPinecone() {
  try {
    const pinecone = new PineconeClient();

    await pinecone.init({
      environment: process.env.PINECONE_ENVIRONMENT ?? '', //this is in the dashboard
      apiKey: process.env.PINECONE_API_KEY ?? '',
    });

    return pinecone;
  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to initialize Pinecone Client');
  }
}

export const pinecone = await initPinecone();
=======
/**
 * This pinecone client is used in your api routes via the Frontend UI
 */

import { PineconeClient } from '@pinecone-database/pinecone';
import { CreatePineconeIndexArgs } from '@/types/pinecone';

//use this client in api routes
export const createPineconeIndex = async ({
  pineconeApiKey,
  pineconeEnvironment,
  pineconeIndexName,
}: CreatePineconeIndexArgs) => {
  const pinecone = new PineconeClient();

  // console.log('pineconeApiKey', pineconeApiKey);
  // console.log('pineconeEnvironment', pineconeEnvironment);
  // console.log('pineconeIndexName', pineconeIndexName);
  // console.log('pinecone', pinecone);

  await pinecone.init({
    apiKey: pineconeApiKey ?? '',
    environment: pineconeEnvironment ?? '', //this is in the pinecone dashboard
  });

  const index = pinecone.Index(pineconeIndexName);

  console.log('index', index);

  return index;
};
>>>>>>> 193008a8b8225f7fd98ddbaa04459afe458571f1
