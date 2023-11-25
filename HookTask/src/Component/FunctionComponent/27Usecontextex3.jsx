import { createContext, useContext } from "react";
const CurrecyContext = createContext(null);
const DATA = [
    {
        id: '1',
        title: 'The Road to React',
        price: 19.99,
    },
    {
        id: '2',
        title: 'The Road to GraphQL',
        price: 29.99,
    },
];
const Usecontextex3 = () => {
    return (<>
        <CurrecyContext.Provider value="€">
            <Books list={DATA} />
        </CurrecyContext.Provider>
    </>);
}

export default Usecontextex3;
const Books = ({ list }) => {
    return (
        <ul>
            {list.map((item) => (
                <Book key={item.id} item={item} />
            ))}
        </ul>
    );
};
const Book = ({ item }) => {
    const currency = useContext(CurrecyContext);
    return (<>
        <li>
            {item.title} - {item.price} {currency}
        </li>
    </>);
}
