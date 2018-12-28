import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: "INCREMENT" });
    };
    decrement = () => {
        this.props.dispatch({ type: "DECREMENT" });
    };
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>
                    <button onClick={this.decrement}>decrement</button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>increment</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

export default connect(mapStateToProps)(Counter);