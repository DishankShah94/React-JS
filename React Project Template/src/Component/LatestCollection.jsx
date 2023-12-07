import LatestCollectionBox from "./LatestCollectionBox";
// import ProductApi from "./ProductApi";

const LatestCollection = () => {
    return (<>
        <section class="banner-bottom-w3ls-agileinfo">
            {/* <!-- Portfolio --> */}
            <div class="portfolio" id="portfolio">
                <div class="container">
                    <h3 class="tittle text-center">Latest Collection</h3>
                    <div class="inner-sec-wthree-agileits">

                        <ul class="portfolio-categ filter text-center mb-lg-5 mb-3">
                            <li class="port-filter all active">
                                <a href="#">All</a>
                            </li>
                            <li class="cat-item-1">
                                <a href="#" title="Category 1">Category 1</a>
                            </li>
                            <li class="cat-item-2">
                                <a href="#" title="Category 2">Category 2</a>
                            </li>
                            <li class="cat-item-3">
                                <a href="#" title="Category 3">Category 3</a>
                            </li>
                            <li class="cat-item-4">
                                <a href="#" title="Category 4">Category 4</a>
                            </li>
                        </ul>
                        {/* https://fakestoreapi.com/products */}
                        <ul class="portfolio-area clearfix">
                            <LatestCollectionBox img='assests/images/g1.jpg' />
                            <LatestCollectionBox img='assests/images/g2.jpg' />
                            <LatestCollectionBox img='assests/images/g3.jpg' />
                            <LatestCollectionBox img='assests/images/g4.jpg' />
                            <LatestCollectionBox img='assests/images/g5.jpg' />
                            <LatestCollectionBox img='assests/images/g6.jpg' />
                            <LatestCollectionBox img='assests/images/g7.jpg' />
                            <LatestCollectionBox img='assests/images/g8.jpg' />
                            <LatestCollectionBox img='assests/images/g9.jpg' />
                        </ul>
                        {/* <ul className="portfolio-area clearfix">
                            <ProductApi />
                        </ul> */}
                        {/* <!--end portfolio-area --> */}
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default LatestCollection;