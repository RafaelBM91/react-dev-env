import * as React from 'react';
import { Page } from '../../components/Page';

interface State {
    lisTodo: string[];
    text: string
}

export class PageContainer extends React.Component<{},State> {
    state = {
        lisTodo: [],
        text: ''
    };
    handlerSubmit = (event: any) => {
        event.preventDefault();
        let { lisTodo, text } = this.state;
        lisTodo.push(text);
        this.setState({ lisTodo, text: '' });
    }
    handlerChangeText = (event: any) => {
        let { value } = event.target;
        this.setState({ text: value });
    }
    render (): JSX.Element {
        return (
            <Page
                handlerSubmit={this.handlerSubmit}
                handlerChangeText={this.handlerChangeText}
                {...this.state}
            />
        );
    }
}
