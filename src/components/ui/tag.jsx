const TagText = ({name}) => {
    if (name === "New") {
        return <h2 className="bg-green-100 text-green-600 items-center text-center px-2 py-1 rounded-full">{name}</h2>
    }
    else if (name === "Best Seller") {
        return <h2 className="bg-yellow-100 text-yellow-600 items-center text-center px-2 py-1 rounded-full">{name}</h2>
    }
    else if(name === "Popular") {
        return <h2 className="bg-violet-100 text-violet-600 items-center text-center px-2 py-1 rounded-full">{name}</h2>
    }
}
export default TagText;