import * as React from 'react';

interface Props {
    lisTodo: string[];
}

export const List: React.SFC<Props> = (props) => (
    <div>
    {
        props.lisTodo.map((todo, id) =>
            <div key={id}>{todo}</div>
        )
    }
    </div>
);
