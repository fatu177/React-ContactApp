import React from "react";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tag: '',
        };
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandle = this.onSubmitEventHandle.bind(this);

    }
    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
    }
    onTagChangeEventHandler(event) {
        this.setState(() => {
            return {
                tag: event.target.value
            }
        })
    }
    onSubmitEventHandle(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmitEventHandle}>
                <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default ContactInput;