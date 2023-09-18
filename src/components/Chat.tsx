import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";

const Chat: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px] h-min[700px] h grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {messages.map((message) => (
          <div key={message.id} className="flex gap-3 text-slate-600 text-sm ">
            {message.role === "user" && (
              <Avatar>
                <AvatarFallback>TL</AvatarFallback>
                <AvatarImage src="https://github.com/LandimTiago.png" />
              </Avatar>
            )}
            {message.role === "assistant" && (
              <Avatar>
                <AvatarFallback>RS</AvatarFallback>
                <AvatarImage />
              </Avatar>
            )}

            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">
                {message.role === "user" ? "Usuario" : "AI"}:
              </span>
              {message.content}
            </p>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <form className="space-x-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can i help you?"
            value={input}
            onChange={handleInputChange}
          />
        </form>
        <Button type="submit">Send</Button>
      </CardFooter>
    </Card>
  );
};

export default Chat;
