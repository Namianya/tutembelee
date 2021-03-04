import React, { Component } from 'react';
import 'materialize-css';

class DatePicker extends Component {

    render() {
        return (
            <div className="DatePicker">
                <div className="input-field">
                    <DatePicker
                        onChange={({ target: { value: date } }) => {
                            this.setState({
                                date
                            });
                        }}
                    />
                    <label for="date">Choose a date you need me for...</label>
                </div>
            </div>
        );
    }
}
export default DatePicker;
