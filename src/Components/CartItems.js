export default function CartItems(props) {
    var sum = 0;
    for (let i in props.props.cartData.cartFunctions) {
        if (props.props.cartData.cartFunctions[i].cartData !== undefined) {
            sum += (props.props.cartData.cartFunctions[i].cartData.price)
        }
    }

    const runCallback = (cb) => {
        return cb();
    };

    console.log('data', props.props.cartData.cartFunctions)
    return <>
        <div className='miniCart'>
            <h5 className='cross' onClick={() => {props.props.cartButtonHandler()}}>X</h5>
            <table className='CartItems'>
                <tr className='tableHead tbheading'>
                    <td className='tbhead'>Sno</td>
                    <td className='tbhead'></td>
                    <td className='tbhead'>Name</td>
                    <td className='tbhead' >Quan.</td>
                    <td className='tbhead'></td>
                    <td className='tbhead'>Price</td>
                    <td className='tbhead'>Total</td>
                </tr>
                {
                    runCallback(() => {
                        const row = [];
                        const cartitem=[];
                        const item = [];
                        const itemCount = [];


                        for (let i in props.props.cartData.cartFunctions) {
                            if (props.props.cartData.cartFunctions[i].cartData !== undefined) {
                                if (!item.includes(props.props.cartData.cartFunctions[i].cartData)) {
                                    item.push(props.props.cartData.cartFunctions[i].cartData)
                                }
                            }
                        }

                        for (let i in props.props.cartData.cartFunctions) {
                            if (props.props.cartData.cartFunctions[i].cartData !== undefined) {

                                // itemCount[props.props.cartData.cartFunctions[i].cartData]=1
                                console.log('itemCount', props.props.cartData.cartFunctions[i].cartData)
                                row.push(props.props.cartData.cartFunctions[i].cartData);
                            }
                        }

                        for (let j of item) {
                            var count=0
                            for (let k of row){
                                if(j==k){
                                    count+=1
                                }
                            }

                            itemCount.push(<>
                                <tr className='tableRow'>
                                    <td className='tbhead'>{j.sno}</td>
                                    <td className='tbhead'><img src={j.img} className=' mini-cart-img' /></td>
                                    <td className='tbhead'>{j.name}</td>
                                    <td className='tbhead'style={{textAlign:"center"}}>{count}</td>
                                    <td className='tbhead'>x</td>
                                    <td className='tbhead'>{j.price}</td>
                                    <td className='tbhead'>$ {count*j.price}</td>
                                </tr>
                            </>)
                        }
                                return itemCount;
                            })
                }
            </table>
            <hr />
                <span className='tbTotal1'>Cart Total - </span>
                <span className='tbTotal2'>$ {sum}</span>
        </div>
    </>
}