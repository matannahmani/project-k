
const Category = ({catname,children}) => {

    return (
        <div className="category">
            <h1>{catname}</h1>
            <div className="category-scroll">
                {children}
            </div>
        </div>
    )
}

export default Category;