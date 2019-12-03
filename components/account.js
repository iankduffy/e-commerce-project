import { useContext } from 'react';
import { UserContext } from '../components/product-listing/user-context'

const AccountPage = () => {
	let [currentUser, setUser] = useContext(UserContext);
	return(
		<div className="container__row container--space-between">
      <div className="col-3">
        <div className="col-12 u-t-cen">
          <h4>{ currentUser.displayName }</h4>
          <p>{ currentUser.email }</p>
        </div>
      </div>
      <div className="col-8">
        <div className="col-12">
          <h3>Order History</h3>
        </div>
      </div>
		</div>
	)
};
  
export default AccountPage;