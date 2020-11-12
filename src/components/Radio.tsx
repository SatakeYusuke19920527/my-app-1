import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

export const ChoiceGroupBasicExample: React.FunctionComponent = () => {
    const options: IChoiceGroupOption[] = [
        { key: 'A', text: 'アプリケーションで開く' },
        { key: 'B', text: '保存する' },
    ];
    return (
            <ChoiceGroup defaultSelectedKey="A" options={options}  label="取り出し動作"  />
    );
};