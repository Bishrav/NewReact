function Think(){

    
    // const products = [

    //     {category : "Fruits" , prices : "$1" , stocked : false , name:"Apple"},
    //     {category : "Fruits" , prices : "$1" , stocked : true , name:"DragonFruits"},
    //     {category : "Fruits" , prices : "$2" , stocked : false , name:"PassionFruits"},
    //     {category : "Vegetables" , prices : "$2" , stocked : true , name:"Spinach"},
    //     {category : "Vegetables" , prices : "$4" , stocked : true , name:"Pumpkin"},
    //     {category : "Vegetables" , prices : "$1" , stocked : true , name:"Peas"},


    // ]
    // const tableBody = document.getElementById("productTable");

    // products.forEach(products => {
    //     const row = document.createElement("tr");

    //     row.innerHTML = ` 
    //     <td>${products.category}</td>
    //     <td class = "${products.stocked ? '' : 'out-of-stock'}">
    //         ${products.name}

    //     </td>
    //     <td>${products.prices}</td>
    //     <td>${products.stocked ? "Yes" : "No"}</td>
         
    //     `;
    //     tableBody.appendChild(row);
    // });
    //props and state
    
    return(

        <>
            {/* <div>ProducList</div>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Stocked</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((products,index) =>(
                        <tr key={index}>
                            <td>{products.category}</td>
                            <td style={{color : products.stocked ? "black" : "red"}}>{products.name}</td>
                            <td>{products.prices}</td>
                            <td>{products.stocked ? "Yes" : "No"}</td>

                        </tr>
                    ))}
                </tbody>
            </table> */}
        </>
    )
}
export default Think;