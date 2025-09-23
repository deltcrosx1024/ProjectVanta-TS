import Aurora from './aurora';

export default function BackgroundAurora() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <Aurora />
        </div>
    );
}