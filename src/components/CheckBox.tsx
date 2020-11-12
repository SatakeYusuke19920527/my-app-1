import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

export const CheckboxBasicExample: React.FunctionComponent = (props) => {
  
  return (
    <Stack >
          {/* <h6>{title}</h6> */}
          <Checkbox label="asdf"  />
    </Stack>
  );
};