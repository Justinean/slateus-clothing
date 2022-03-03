import "./styles.css";

export const Header = () => {
    return (
        <div className="Header">
            <div className="headerLeft">
                <img className="logo" src="https://via.placeholder.com/100x100" alt="Company Logo"></img>
                <ul className="links">
                    <li className="link">Link1</li>
                    <li className="link">Link2</li>
                    <li className="link">Link3</li>
                    <li className="link">Link4</li>
                    <li className="link">Link5</li>
                    <li className="link">Link6</li>
                </ul>
            </div> 
            <ul className="searchAndCart">
                <li className="link search">Search</li>
                <li className="link cart">Cart</li>
                <li className="link wishlist">Wishlist</li>
            </ul>
        </div>
    )
}