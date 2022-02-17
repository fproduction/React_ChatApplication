


const SearchBar = () => {
    return (
        <>
            <div className="w-full bg-[#1f2133] py-2 px-2 rounded-md flex items-center">
                <img className="w-[14px] mr-2" src={`${process.env.PUBLIC_URL}/icons/search.svg`} alt="image" />
                <input type="text" className="bg-transparent outline-none border-none flex-1" placeholder="Search..." />
                {/* <span className="ml-2">icons</span> */}
            </div>
        </>
    )
}

export default SearchBar