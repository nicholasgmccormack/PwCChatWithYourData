<<<<<<< HEAD
/**
 * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.
 */

if (!process.env.PINECONE_INDEX_NAME) {
  throw new Error('Missing Pinecone index name in .env file');
}

const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? '';

const PINECONE_NAME_SPACE = 'pdf-test'; //namespace is optional for your vectors

export { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE };
=======
/**
 * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.
 */

// if (!process.env.PINECONE_INDEX_NAME) {
//   throw new Error('Missing Pinecone index name in .env file');
// }

const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? '';

// your "ingestion" will use this namespace
const PINECONE_NAME_SPACE = 'finetunegpt'; //namespace is optional for your vectors

export { PINECONE_NAME_SPACE, PINECONE_INDEX_NAME };
>>>>>>> 193008a8b8225f7fd98ddbaa04459afe458571f1
