import { Labeller, LabellerProps } from '@components/global/labeller';

export default function Pending() {
    const labellerProps: LabellerProps = { transferFrom: 'pending', transferTo: 'validation', editImages: true };

    // If session exists, display content
    return (
        <Labeller {...labellerProps} />
    );
}