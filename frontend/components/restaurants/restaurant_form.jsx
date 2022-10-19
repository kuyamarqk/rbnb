import React from 'react';

import {withRouter} from 'react';

class RestaurantForm extends React.Component{
    constructor(props){
        super(props)
        this.state  = {
            name: '',
            address: '',
            state: '',
            zip: '',
            cuisine: '',
            open_time: '',
            close_time: '',
            phone_number: '',
            menu_link: '',
            photo: '',
            bphoto: '',
            lat: '',
            lng: '',
            description: ''
        }
        this.handleSumbit = this.handleSumbit.bind(this)
        this.renderError = this.renderError.bind(this)
    }
    componentDidMount(){
        this.props.clearErrors()
    }
    update(field){
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }
    renderErrors(){
        return (
            <ul className="error-messages"> 
                {this.props.errors.map((error, i) => (
                <li className="error-message" key={`error-${i}`}>
                    {error}
                </li>
                ))}
            </ul>
        );
    }
    renderNameError(){
        if (this.props.errors.includes("name can't be blank")) {
            return(
                <li className="error-message">Please enter the name of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderAddressError(){
        if (this.props.errors.includes("address can't be blank")) {
            return(
                <li className="error-message">Please enter the address of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderStateError(){
        if (this.props.errors.includes("state can't be blank")) {
            return(
                <li className="error-message">Please enter the state of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderZipError(){
        if (this.props.errors.includes("zip can't be blank")) {
            return(
                <li className="error-message">Please enter the zip of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderCuisineError(){
        if (this.props.errors.includes("cuisine can't be blank")) {
            return(
                <li className="error-message">Please enter the cuisine of the restaurant</li>
            )
        } else {
            return null
        }
        
    }
    renderOpenTimeError(){
        if (this.props.errors.includes("open time can't be blank")) {
            return(
                <li className="error-message">Please enter the opening time of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderCloseTimeError(){
        if (this.props.errors.includes("close time can't be blank")) {
            return(
                <li className="error-message">Please enter the closing time of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderMenuLinkError(){
        if (this.props.errors.includes("Menu Link can't be blank")) {
            return(
                <li className="error-message">Please enter the Menu Link of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderPhotoError(){
        if (this.props.errors.includes("Photo can't be blank")) {
            return(
                <li className="error-message">Please enter the Photo of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderBPhotoError(){
        if (this.props.errors.includes("2nd Photo can't be blank")) {
            return(
                <li className="error-message">Please enter the 2nd photo of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderlatitudeError(){
        if (this.props.errors.includes("latitude can't be blank")) {
            return(
                <li className="error-message">Please enter the latitude of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderLongitudeError(){
        if (this.props.errors.includes("longitude can't be blank")) {
            return(
                <li className="error-message">Please enter the longitude of the restaurant</li>
            )
        } else {
            return null
        }
    }
    renderDescriptionError(){
        if (this.props.errors.includes("Description can't be blank")) {
            return(
                <li className="error-message">Please enter the Description of the restaurant</li>
            )
        } else {
            return null
        }
    }
    handleSumbit(e){
        e.preventDefault();
        const rest = Object.assign({}, this,state);
        this.props.action(rest).then(this.props.closeModal);
    }

    render (){
        const errors =  Object.values(this.props.errors);
        const name = errors.includes("Name can't be blank");
        const address = errors.includes("Address can't be blank");
        const state = errors.includes("state can't be blank");
        const zip = errors.includes("zip can't be blank");
        const cuisine = errors.includes("cuisine can't be blank");
        const open_time = errors.includes("opening time can't be blank");
        const close_time = errors.includes("closing time can't be blank");
        const phone_number = errors.includes("Phone Number can't be blank");    
        const menu_link = errors.includes("Menu link can't be blank");    
        const photo = errors.includes("Photo can't be blank");
        const bphoto = errors.includes("2nd photo can't be blank");
        const mapLocation = errors.includes("map location can't be blank");
        const description = errors.includes("Description can't be blank");
        
        const displayForm = (this.props.formType === 'Add Restaurant' ) 
            (
            <div className='form-container'>
                <form onSubmit={this.handleSumbit}  className='form-box'>
                    <div onClick={this.props.closeModal} className='close-x'>X</div>
                    <h2  className='form-title'>Add a Restaurant</h2>
                    <input type="text" value={this.state.name} placeholder="Name" onChange={this.update('name')} className={name} />
                    {this.renderNameError()}
                    <input type="text" value={this.state.address} placeholder="Address" onChange={this.update('address')} className={address} />
                    {this.renderAddressError()}
                    <input type="text" value={this.state.state} placeholder="State" onChange={this.update('state')} className={state} />
                    {this.renderStateError()}
                    <input type="text" value={this.state.zip} placeholder="Zip" onChange={this.update('zip')} className={zip} />
                    {this.renderZipError()}

                </form>
            </div>
        )
        return(
            <div >
              {displayForm}
            </div>
          );
    }

}
export default withRouter(RestaurantForm)