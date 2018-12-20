import * as React from 'react';
import { Form } from '../Form';
import { List } from '../List';
import {
    Wrapper
} from './styled';

interface Props {
    handlerSubmit: Function;
    handlerChangeText: Function;
    lisTodo: string[];
    text: string;
}

export const Page: React.SFC<Props> = (props) => (
    <Wrapper>
        <Form {...props} />
        <hr/>
        <List lisTodo={props.lisTodo} />
    </Wrapper>
);
