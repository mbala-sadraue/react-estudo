import { useState } from "react";



function FilterableProdutTable() {

    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]

    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)
    function onFilterTextChange(value) {
        setFilterText(value)

    }
    return (
        <>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={onFilterTextChange} onInStockOnlyChange={setInStockOnly} />
            <ProductTable products={products} filterText={filterText}  inStockOnly={inStockOnly}/>
        </>)



}

function ProductTable({ products, filterText, inStockOnly }) {
    let rows = []
    let lastCategory = null;

    products.forEach(
        (product) => {

            if (product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === - 1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
            }
            rows.push(<ProductRow
                product={product}
                key={product.name} />)
            lastCategory = product.category;

        }
    )
    return (<>
        <h3>Lsita de Produtos</h3>
        <div>

        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </>)
}


function ProductCategoryRow({ category }) {

    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>);
}


function ProductRow({ product }) {

    let name = product.stocked ? product.name : <span style={{ color: 'red' }}>
        {product.name}
    </span>;

    return (<tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>)
}


function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <form>
            <input type="text" placeholder="Search..." value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}


export default FilterableProdutTable;

// Saber a divisao de componte
// implementar de forma estatica
//  Encontrar as variavel ou parte que são state
//  Componente responsavel por alterar state



