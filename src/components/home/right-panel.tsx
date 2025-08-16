"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, X } from "lucide-react";
import MessageInput from "./message-input";
import MessageContainer from "./message-container";
import ChatPlaceHolder from "@/components/home/chat-placeholder";

const RightPanel = () => {
	const selectedConversation = true;
	if (!selectedConversation) return <ChatPlaceHolder />;

	const conversationName = "John Doe";

	return (
		<div className='w-3/4 flex flex-col bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'>
			<div className='w-full sticky top-0 z-50'>
				{/* Header */}
				<div className='flex justify-between bg-gray-primary/90 p-3 border-b border-gray-200/30 dark:border-gray-700/30'>
					<div className='flex gap-3 items-center'>
						<div className="relative">
							<Avatar className="w-10 h-10 border-2 border-gray-200 dark:border-gray-600 shadow-md">
								<AvatarImage src={"/placeholder.png"} className='object-cover' />
								<AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg">
									{conversationName.split(' ').map(name => name[0]).join('')}
								</AvatarFallback>
							</Avatar>
							{/* Online status indicator */}
							<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
						</div>
						<div className='flex flex-col'>
							<p className="text-gray-900 dark:text-white font-medium text-lg">{conversationName}</p>
							<p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
								<span className="w-2 h-2 bg-green-500 rounded-full"></span>
								Online
							</p>
						</div>
					</div>

					<div className='flex items-center gap-7 mr-5'>
						<a href='/video-call' target='_blank' className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
							<Video size={23} />
						</a>
						<X size={16} className='cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors' />
					</div>
				</div>
			</div>
			{/* CHAT MESSAGES */}
			<MessageContainer />

			{/* INPUT */}
			<MessageInput />
		</div>
	);
};
export default RightPanel;