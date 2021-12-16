import CartItems from './CartItems'
export default function Header(props) {
    console.log('Header',props)
    return <>
        {console.log("Header Props", props.cartData.cartFunctions[0].cartBtn)}
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 navbar-posi">
                <div className="container-fluid ">
                    <a className="navbar-brand title" href="#">Preety Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item t">
                                <a className="nav-link text-light" href="#">Link</a>
                            </li>
                        </ul>
                        <img onClick={() => {props.cartButtonHandler()}} className='bag-count' src="https://www.seekpng.com/png/full/213-2131084_luxury-goods-tide-icon-comments-png-bag-cart.png" alt='IMage Not Found' />
                            {props.cartData.cartFunctions[0].cartBtn?(<CartItems props={props} />):(<span className='bagCount' > {props.cartData.cartFunctions.length-1}</span>)}
                    </div>
                </div>
            </nav>
            <h1 className="border-end py-4 title titleHead">Preety Shop</h1>
            <div className='SubHeadingSec'>
                <img src='http://cdn.onlinewebfonts.com/svg/img_473372.png' />
                <h2 className='SubHeading'>Fashion Trends</h2>
            </div>

        </header>
    </>
}
