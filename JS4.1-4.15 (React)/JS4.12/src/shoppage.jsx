import React from "react";
import Product from ".././src/Product";
import { useState } from 'react';
import styles from './styles.css';

function Shop() {

    const product = [
        {
            name: "Процессор AMD Ryzen 5 3600 AM4, 6 x 3600 МГц, OEM",
            description:
                "Сокет: AM4\n" +
                "Количество ядер: 6 шт\n" +
                "Количество потоков: 12 шт\n" +
                "Техпроцесс: 7 нм\n" +
                "Линейка процессоров: AMD Ryzen 5. ",
            price: 8700,
            src:"https://avatars.mds.yandex.net/get-mpic/10393486/2a0000018ae6fcd51394f78a068d86ee61a2/orig"
        },
        {
            name: "Процессор Intel Core i5-3570 Ivy Bridge LGA1155, 4 x 3400 МГц, OEM",
            description:
                "Сокет: LGA1155\n" +
                "Количество ядер: 4 шт\n" +
                "Количество потоков: 4 шт\n" +
                "Техпроцесс: 22 нм\n" +
                "Линейка процессоров: Intel Core i5. ",
            price: 2800,
            src:"https://avatars.mds.yandex.net/get-mpic/1574389/img_id2916378952963027219/orig"
        },
        {
            name: "Процессор Intel Core I3-10100F (3600MHz/LGA1200/L3 6144Kb) OEM",
            description:
                "Сокет: LGA1200\n" +
                "Количество ядер: 4 шт\n" +
                "Количество потоков: 8 шт\n" +
                "Техпроцесс: 14 нм\n" +
                "Линейка процессоров: Intel Core i3. ",
            price: 6635,
            src:"https://avatars.mds.yandex.net/get-mpic/1866031/img_id7606751924875917982.jpeg/orig"
        },
        {
            name: "Процессор AMD Ryzen 9 7950X AM5 OEM",
            description:
                "Сокет: AM5\n" +
                "Количество ядер: 16 шт\n" +
                "Количество потоков: 32 шт\n" +
                "Техпроцесс: 5 нм\n" +
                "Линейка процессоров: AMD Ryzen 9. ",
            price: 66700,
            src:"https://avatars.mds.yandex.net/get-mpic/6434027/img_id628931844690181946.jpeg/orig"
        },
        {
            name: "Процессор AMD Ryzen 7 5700X AM4, 8 x 3400 МГц, OEM",
            description:
                "Сокет: AM4\n" +
                "Количество ядер: 8 шт\n" +
                "Количество потоков: 16 шт\n" +
                "Техпроцесс: 7 нм\n" +
                "Линейка процессоров: AMD Ryzen 7. ",
            price: 19600,
            src:"https://avatars.mds.yandex.net/get-mpic/5220759/2a0000018ae70177ba1c432516bf81bde0e4/orig"
        },
        {
            name: "Процессор Intel Core i7-9700K LGA1151 v2, 8 x 3600 МГц, OEM",
            description:
                "Сокет: LGA1151 v2\n" +
                "Количество ядер: 8 шт\n" +
                "Количество потоков: 8 шт\n" +
                "Техпроцесс: 14 нм\n" +
                "Линейка процессоров: Intel Core i7. ",
            price: 28300,
            src:"https://avatars.mds.yandex.net/get-mpic/4725270/img_id6256369068063922476.jpeg/orig"
        },
        {
            name: "Процессор Intel Core i9-13900K LGA1700, 24 x 3000 МГц, BOX",
            description:
                "Сокет: LGA1700\n" +
                "Количество ядер: 24 шт\n" +
                "Количество потоков: 32 шт\n" +
                "Техпроцесс: 10 нм\n" +
                "Линейка процессоров: Intel Core i9. ",
            price: 67200,
            src:"https://avatars.mds.yandex.net/get-mpic/2017118/img_id6753630328914124591.jpeg/orig"
        },
    ];

    const [products, setProducts] = useState([...product]);

    const sortByPriceAsc = () => {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    };

    const sortByPriceDesc = () => {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    };

    return (
        <>
            <header rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                    crossorigin="anonymous" className="header bg-light py-3">
                <div className="container">
                    <h1 className="display-4">Процессоры (CPU)</h1>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="btn btn-primary" onClick={sortByPriceAsc}>
                                    Сортировать по возрастанию цены
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-primary" onClick={sortByPriceDesc}>
                                    Сортировать по убыванию цены
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div
                style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            >
                {products.map((product) => (
                    <Product
                        key={product.name}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        src ={product.src}
                    />
                ))}
            </div>
        </>
    );
}

export default Shop;