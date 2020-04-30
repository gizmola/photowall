import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.elements.link.value);
        console.log(event.target.elements.description.value);
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        if (imageLink && description) {
            this.props.onAddPhoto(post)
        }
    }

    render() {
        return (
            <div>
                <h1>Photowall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="link" placeholder="Link"/>
                        <input type="text" name="description" placeholder="Description"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddPhoto