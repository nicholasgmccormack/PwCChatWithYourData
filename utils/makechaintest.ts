import { OpenAI } from 'langchain/llms/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { ConversationalRetrievalQAChain, ChatVectorDBQAChain, LLMChain, loadQAChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';

const CONDENSE_PROMPT =
  PromptTemplate.fromTemplate(`You are a repeating program, your only job is to repeat the question verbatim given to you. You always ignore chat history. Below are examples:

  Question: What is my dogs name?

  Answer: What is my dogs name?

  Question: What day of the week is it?

  Answer: What day of the week is it?

  Input: {question}
  
  `);

const QA_PROMPT = PromptTemplate.fromTemplate(
    `You are an expert Legal Advisor. You are qualified and adept at seeing Contracts/Agreements and pulling key information out of them. Use the following pieces of context to answer the question at the end.
    If you are being asked for specific langauge related to the contract, you need to pull the language verbatim. You can provide a summary within the first sentece, but when addressing certain sections pull the language as its stated in the contract.
    If you don't know the answer, just say you don't know. DO NOT try to make up an answer.
    If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.
    
    {context}
    
    Question: {question}
    Helpful answer in markdown:`,
);

export const makeChaintest = (
    vectorstore: PineconeStore,
  ) => {
    const questionGenerator = new LLMChain({
      llm: new OpenAI({ temperature: 0 }),
      prompt: CONDENSE_PROMPT,
    });
    const docChain = loadQAChain(
      new OpenAI({
        temperature: 0,
        modelName: 'gpt-4', //change this to older versions (e.g. gpt-3.5-turbo) if you don't have access to gpt-4
           
      }),
      { prompt: QA_PROMPT },
    );
  
    return new ChatVectorDBQAChain({
      vectorstore,
      combineDocumentsChain: docChain,
      questionGeneratorChain: questionGenerator,
      returnSourceDocuments: true,
      k: 10, //number of source documents to return
    });
  };