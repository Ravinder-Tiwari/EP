const SearchBar = ({
    searchTerm,
    setSearchTerm,
}) => {
    return (
        <input
            type="text"
            placeholder="Search by name or department"
            value={searchTerm}
            onChange={(e) =>
                setSearchTerm(
                    e.target.value
                )
            }
            className="border p-2 w-full rounded"
        />
    );
};

export default SearchBar;