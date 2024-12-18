import { SearchIcon } from "lucide-react";

export const Search2 = () => {
	return (
		<div className=" rounded-2xl bg-white h-[36px] w-[400px]">
			<label className="h-[36px] px-[12px] flex items-center p-0">
				<span className="sr-only">Search</span>

				<SearchIcon size={18} />
				<input
					type="search"
					placeholder="Search"
					className="size-full ml-2 border-none bg-transparent focus:outline-none"
				/>
			</label>
		</div>
	);
};
