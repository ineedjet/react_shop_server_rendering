import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Image from './src/components/Image';
import TextBox from './src/components/TextBox';

class App extends Component {
    render() {
        return (
            <div>
                <Image url={'http://via.placeholder.com/200x200'} width={200} heigh={200} />
                <TextBox>Some text</TextBox>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
