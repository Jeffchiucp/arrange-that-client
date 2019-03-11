import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography, TextField } from '@material-ui/core'

const ESC_KEY = 27

export class EditArrangementTitle extends Component {
    constructor (props) {
        super(props)

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.escFunction = this.escFunction.bind(this);
    }
    
    state = {
        name: this.props.name
    };
   
    handleChange = name => event => {
        this.setState({
            name: event.target.value
        });
    };
    
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.setState({
                name: this.state.name
            });
            this.props.handleEnter(this.state.name)
        }
    }

    handleBlur = () => {
        this.setState({
            name: this.state.name
        });
        this.props.handleEnter(this.state.name)
    }

    escFunction (event) {
        if(event.keyCode === ESC_KEY) {
            this.props.handleEsc()
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }

    render () {
        return (
            <Typography variant="headline" align="left">
                <TextField
                    id="outlined-name"
                    label="Arrangement Name"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    margin="normal"
                    variant="outlined"
                    autoFocus={true} />
            </Typography>
        )
    }
}

EditArrangementTitle.propTypes = {
    name: PropTypes.string,
    handleEnter: PropTypes.func,
    handleEsc: PropTypes.func
}

export default EditArrangementTitle