import { ListFilter, LogOut, MessageSquareDiff, Search, User } from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitch from "../theme-switch";
import Conversation from "./conversations";
import { UserButton } from "@clerk/nextjs";

const LeftPanel = () => {
	const conversations: any[] = [];

	return (
		<div className='w-1/4 border-gray-600/50 border-r bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'>
			<div className='sticky top-0 bg-white/95 dark:bg-gray-900/95 z-10 shadow-sm'>
				{/* Header */}
				<div className='flex justify-between bg-orange-primary/90 p-3 items-center border-b border-orange-200/30'>
					<UserButton/>

					<div className='flex items-center gap-3'>
						<MessageSquareDiff size={20} className="text-white" /> {/* TODO: This line will be replaced with <UserListDialog /> */}
						<ThemeSwitch />
						
					</div>
				</div>
				<div className='p-3 flex items-center bg-white/80 dark:bg-gray-800/80'>
					{/* Search */}
					<div className='relative h-10 mx-3 flex-1'>
						<Search
							className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 z-10'
							size={18}
						/>
						<Input
							type='text'
							placeholder='Search or start a new chat'
							className='pl-10 py-2 text-sm w-full rounded shadow-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus-visible:ring-transparent text-gray-900 dark:text-white'
						/>
					</div>
					<ListFilter className='cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors' />
				</div>
			</div>

			{/* Chat List */}
			<div className='my-3 flex flex-col gap-0 max-h-[80%] overflow-auto'>
				{/* Conversations will go here*/}
                {conversations.map((conversation) => (
                    <Conversation key={conversation._id}  conversation={conversation} />
                ))}
                

				{conversations?.length === 0 && (
					<>
						<p className='text-center text-gray-700 dark:text-gray-300 text-sm mt-3 font-medium'>No conversations yet</p>
						<p className='text-center text-gray-600 dark:text-gray-400 text-sm mt-3 px-4'>
							We understand {"you're"} an introvert, but {"you've"} got to start somewhere 😊
						</p>
					</>
				)}
			</div>
		</div>
	);
};
export default LeftPanel;