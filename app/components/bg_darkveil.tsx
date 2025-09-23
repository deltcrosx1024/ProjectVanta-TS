import DarkVeil from './darkveil';

export default function BackgroundDarkVeil() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <DarkVeil />
        </div>
    );
}