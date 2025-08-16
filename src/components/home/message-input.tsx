import { Laugh, Mic, Plus, Send } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";

const MessageInput = () => {
	const [msgText, setMsgText] = useState("");

	return (
		<div className='bg-white/90 dark:bg-gray-800/90 p-3 flex gap-4 items-center border-t border-gray-200/30 dark:border-gray-700/30 backdrop-blur-sm'>
			<div className='relative flex gap-2 ml-2'>
				{/* EMOJI PICKER WILL GO HERE */}
				<Laugh className='text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 cursor-pointer transition-colors' />
				<Plus className='text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 cursor-pointer transition-colors' />
			</div>
			
			<form className='w-full flex gap-3'>
				<div className='flex-1'>
					<Input
						type='text'
						placeholder='Type a message'
						className='py-3 text-sm w-full rounded-lg shadow-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus-visible:ring-transparent text-gray-900 dark:text-white'
						value={msgText}
						onChange={(e) => setMsgText(e.target.value)}
					/>
				</div>
				<div className='mr-4 flex items-center gap-3'>
					{msgText.length > 0 ? (
						<Button
							type='submit'
							size={"sm"}
							className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors'
						>
							<Send className="text-white" />
						</Button>
					) : (
						<Button
							type='submit'
							size={"sm"}
							className='bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors'
						>
							<Mic className="text-white" />
						</Button>
					)}
				</div>
			</form>
		</div>
	);
};
export default MessageInput;