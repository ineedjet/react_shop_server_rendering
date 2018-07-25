import React, {Component} from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
    render() {
        return (
            <div>
                <Image url={this.props.product.image.url} width={this.props.product.image.width} heigh={this.props.product.image.heigh} />
                <TextBox>{this.props.product.title}</TextBox>
                <Price>{this.props.product.price}</Price>
            </div>
        )
    }
}

export default ProductCard;
