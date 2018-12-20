import * as React from 'react';

interface Props {
    handlerSubmit: Function;
    handlerChangeText: Function;
    text: string;
}

export const Form: React.SFC<Props> = (props) => (
    <form action="/" method="post" onSubmit={(event) => props.handlerSubmit(event)}>
        <div>
            <label>Ingrese Todo:&nbsp;</label>
            <input type="text" value={props.text} onChange={(event) => props.handlerChangeText(event)} />
        </div>
        <div>
            <button type="submit">Guardar</button>
        </div>
    </form>
);
