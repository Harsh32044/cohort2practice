import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="flex justify-between p-4">
        <div className="text-md inline-flex items-center">
            Youtube | IN
        </div>
        <SearchBar/>
        <div className="text-md inline-flex items-center">
            Sign In
        </div>
    </div>
}