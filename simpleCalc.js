import React from 'react';
import ReactDOM from 'react-dom';

// parent component
var Calculator = React.createClass({
    getInitialState() {
        return {
            value: '0'
        }
    },
    //////// event listeners //////////////

    // get the values from buttons update the state
    // and concat them for eval
    onKeyPress(val) {
        this.setState({
            value: this.state.value + val.toString()
        })
    },

    // calculate the value from state
    // and update the state
    onCalculate() {
        // console.log(this.state.value)
        this.setState({
            value: eval(this.state.value)
        })
    },
    // reset the state
    onClear() {
        this.setState({
            value: '0'
        })
    },
    render() {
        return(
            <main className ="calcContainer">
                <ResultSection value={this.state.value} />
                <NumberSection onClear={this.onClear} onKeyPress={this.onKeyPress} onCalculate={this.onCalculate} />
                <OperatorSection onKeyPress={this.onKeyPress}/>
            </main>
        )
    }
});

// calc keyboard (numbers)
var NumberSection = React.createClass ({
    getInitialState() {
        return {
            numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "=", "C"]
        }
    },
    // get the value from buttons
    // calculate if button "=" pressed
    // clean the parent state when (C) pressed
    onClickHandler(obj, val) {
        if(this.props.onKeyPress) this.props.onKeyPress(val)
        if(val === "=") {
            if(this.props.onCalculate) this.props.onCalculate()
        } else if(val === "C") this.props.onClear()
    },
    render() {
        // loop through elements and create buttons
        var buttons = this.state.numbers.map((val) => {
            // created prop "onMouseDown" to handle clicks events
            // onMouseEvent calls parent method "onKeyPress"
            return <Button value={val} onMouseDown={this.onClickHandler}></Button>
        });

        return(
            <div className="numberSection">{buttons}</div>
        )
    }
});

// calc keyboard (operators)
var OperatorSection = React.createClass ({
    getInitialState() {
        return {
            operators: ["+", "-", "*", "/"]
        }
    },
    onClickHandler(obj, val) {
        if(this.props.onKeyPress) this.props.onKeyPress(val)
    },
    render() {
        var operators = this.state.operators.map((val) => {
            return <Button value={val} onMouseDown={this.onClickHandler}></Button>
        })
        return(
            <div className="operatorsSection">
                {operators}
            </div>
        )

    }
});

var ResultSection = React.createClass ({
    render() {
        return <div className="resultSection" >{this.props.value}</div>
    }
});

var Button = React.createClass ({
    handleClick() {
        if(this.props.onMouseDown)
            this.props.onMouseDown(this, this.props.value)
    },
    render() {
        return <button className="button" onMouseDown={this.handleClick}>{this.props.value}</button>
    }
});

export default Calculator