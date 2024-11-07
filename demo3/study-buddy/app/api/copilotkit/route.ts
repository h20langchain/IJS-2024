/**
 * @filePath app/copilotkit/route.ts
 */
import {
    CopilotRuntime,
    copilotRuntimeNextJSAppRouterEndpoint,
  } from "@copilotkit/runtime";
import { NextRequest } from "next/server";
import { getAzureOpenAIAdapter, getGroqAdapter, getLangChainAzureOpenAIAdapter, getLangChainOllamaAdapter, getLangChainOpenAIAdapter, getOpenAIAdapter } from "./adapter";

const runtime = new CopilotRuntime();

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    //serviceAdapter: await getLangChainOpenAIAdapter(),
    //serviceAdapter: await getOpenAIAdapter(),
    //serviceAdapter: await getLangChainOllamaAdapter(),
    serviceAdapter: await getLangChainAzureOpenAIAdapter(),
    //serviceAdapter: await getGroqAdapter(),
    //serviceAdapter: await getAzureOpenAIAdapter(),
    endpoint: req.nextUrl.pathname,
  });

  return handleRequest(req);
};