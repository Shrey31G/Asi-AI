"use client";

import { DefaultChatTransport } from "ai";
import ProfileButton from "../profile-button";
import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface WorkspaceClientProps {
  user?: any;
}

export default function WorkspaceClient({ user }: WorkspaceClientProps) {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const [input, setInput] = useState("");

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!messagesRef.current || !bottomRef.current) return;

    const el = messagesRef.current;

    const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 200;

    if (isNearBottom) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="grid h-screen grid-cols-12 overflow-hidden">
      <div className="bg-background3 col-span-2 flex min-h-0 flex-col border">
        <div className="min-h-12 w-full flex-shrink-0">hi</div>

        <div className="scrollbar-thin min-h-0 w-full flex-1 overflow-y-auto overscroll-contain px-4">
          hi
        </div>

        <div className="relative flex h-17 w-full shrink-0 items-center justify-center">
          <div className="from-background via-background to-background/0 pointer-events-none absolute inset-0 -top-4 z-10 w-full bg-gradient-to-t via-65% blur-sm dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900" />
          <div className="relative z-20 w-full">
            <ProfileButton user={user} />
          </div>
        </div>
      </div>

      <div className="col-span-10 h-screen min-h-0 flex-1 dark:bg-neutral-900">
        <div className="relative flex h-full flex-col overflow-hidden">
          <header className="sticky top-0 z-30 w-full flex-shrink-0">
            <div className="from-background via-background to-background/0 pointer-events-none absolute inset-0 -bottom-2 z-10 bg-gradient-to-b via-65% backdrop-blur-lg dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900/0" />

            <div className="relative z-20 flex w-full items-center justify-between gap-4 bg-white/80 p-3 pr-3 pl-11 backdrop-blur-md lg:px-8 lg:pr-3 lg:pl-4 dark:bg-neutral-900/80">
              <div>ASI AI</div>
              <div>Share</div>
            </div>
          </header>

          <div className="scrollbar-thin relative flex w-full flex-1 flex-col overflow-y-auto overscroll-contain p-0">
            {!messages || messages.length === 0 ? (
              <div className="mx-auto my-auto w-full max-w-2xl">
                <div className="text-center">
                  <h1 className="mb-4 w-full text-3xl font-bold">
                    What can I help with?
                  </h1>

                  <InputForm
                    input={input}
                    sendMessage={sendMessage}
                    setInput={setInput}
                    status={status}
                  />
                </div>
              </div>
            ) : (
              <>
                <div
                  ref={messagesRef}
                  className="scrollbar-thin relative flex min-h-0 w-full flex-1 flex-col overflow-y-auto overscroll-contain p-4 pb-6"
                >
                  <div className="mx-auto max-w-3xl space-y-4">
                    {messages.map((message, i) => (
                      <div key={i} className="flex w-full">
                        {message.role === "user" ? (
                          <div className="ml-auto max-w-[80%] rounded-md bg-neutral-100 p-2 break-words dark:bg-neutral-600">
                            {message.parts.map((part, index) =>
                              part.type === "text" ? (
                                <span key={index}>
                                  <ReactMarkdown>{part.text}</ReactMarkdown>
                                </span>
                              ) : null,
                            )}
                          </div>
                        ) : (
                          <div className="prose prose-neutral dark:prose-invert max-w-none rounded-md p-2 break-words">
                            {status === "streaming" && (
                              <div className="flex items-center gap-2 text-sm text-neutral-500">
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-600" />
                                Thinking...
                              </div>
                            )}
                            {message.parts.map((part, index) =>
                              part.type === "text" ? (
                                <span key={index}>
                                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {part.text}
                                  </ReactMarkdown>
                                </span>
                              ) : null,
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                    <div ref={bottomRef}></div>
                  </div>
                </div>
                <InputForm
                  input={input}
                  sendMessage={sendMessage}
                  setInput={setInput}
                  status={status}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface InputFormTypes {
  input: string;
  sendMessage: (message: { text: string }) => void;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  status: string;
}

function InputForm({ input, sendMessage, setInput, status }: InputFormTypes) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="mx-auto mb-4 w-full max-w-4xl flex-shrink-0">
      <div className="bg-background flex items-center gap-2 rounded-3xl border-2 py-2 pr-2 pl-4 dark:border-neutral-800">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (input.trim()) {
                sendMessage({ text: input });
                setInput("");
              }
            }
          }}
          disabled={status !== "ready"}
          placeholder="Say something..."
          rows={1}
          className="max-h-40 min-h-[24px] flex-1 resize-none overflow-y-auto bg-transparent outline-none"
        />

        <Button
          type="button"
          onClick={() => {
            if (input.trim()) {
              sendMessage({ text: input });
              setInput("");
            }
          }}
          variant={"outline"}
          disabled={status !== "ready"}
          className="h-9 w-9 flex-shrink-0 rounded-full"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path d="M8.99992 16V6.41407L5.70696 9.70704C5.31643 10.0976 4.68342 10.0976 4.29289 9.70704C3.90237 9.31652 3.90237 8.6835 4.29289 8.29298L9.29289 3.29298L9.36907 3.22462C9.76184 2.90427 10.3408 2.92686 10.707 3.29298L15.707 8.29298L15.7753 8.36915C16.0957 8.76192 16.0731 9.34092 15.707 9.70704C15.3408 10.0732 14.7618 10.0958 14.3691 9.7754L14.2929 9.70704L10.9999 6.41407V16C10.9999 16.5523 10.5522 17 9.99992 17C9.44764 17 8.99992 16.5523 8.99992 16Z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}
